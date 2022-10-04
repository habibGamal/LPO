import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Meeting as MeetingModel } from '../Models/Meeting';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, DatePicker, Form, Input, Select, Upload, UploadFile, UploadProps, message, Popconfirm } from 'antd';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import moment from 'moment';
export default function Meeting({ meeting = null }: { meeting?: MeetingModel | null }) {
    const [form] = Form.useForm();
    const { errors } = usePage().props;
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>(
        meeting ? meeting.assets.map((asset, i) =>
        ({
            uid: `existing-asset-${i}`,
            name: asset,
            status: 'done',
            url: '/storage/images/' + asset,
        })
        ) :
            []
    );
    const [removedAssets, setRemovedAssets] = useState<string[]>([]);
    // cover image upload props
    const props: UploadProps = {
        beforeUpload: file => {
            return false;
        },
        fileList,
        multiple: true,
        onChange: ({ fileList: newFileList }) => {
            setFileList(newFileList);
        },
        onRemove: (file) => {
            setRemovedAssets(assets => [...assets, file.name])
        }
    };
    // form submit
    const store = (values: any) => {
        Inertia.post('/meetings', {
            ...values,
            date: values?.date ? values.date.format('YYYY-MM-DD') : null,
            assets: fileList.map(file => file.originFileObj),
        }, {
            errorBag: '-1',
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                message.success('Meeting has been added succesfuly')
                form.resetFields();
                setFileList([]);
            },
            onProgress: (v) => {
                setLoading(true)
            },
            onFinish: () => {
                setLoading(false)
            }
        })
    };
    const update = (values: any) => {
        const data = {
            ...values,
            assets:
                (fileList.filter(file => !file.uid.includes('existing-asset-')))
                    .map(file => file.originFileObj),
            date: values?.date?.format('YYYY-MM-DD'),
            removedAssets,
            _method: 'put'
        }

        Inertia.post(`/meetings/${meeting!.id}`, data, {
            forceFormData: true,
            errorBag: `${meeting!.id}`,
            preserveScroll: true,
            onSuccess: () => {
                message.success('Meeting updated succesfuly')
            },
            onProgress: () => {
                setLoading(true)
            },
            onFinish: () => {
                setLoading(false)
            }
        });
    };

    const getErrors = () => meeting ? errors?.[`${meeting.id}`] : errors?.['-1'];

    return (
        <>
            <div className="rounded bg-gray-100 shadow-sm p-4">
                <FontAwesomeIcon icon={faCaretRight} /> {meeting ? meeting.name : 'Make a new meeting'}
                <Form
                    form={form}
                    name={meeting ? `edit_${meeting.id}` : "new"}
                    className="max-w-[500px] mx-auto"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={meeting ? update : store}
                    autoComplete="off"
                    method='post'
                    encType='multipart/form-data'
                >
                    <Form.Item
                        label="Meeting Name"
                        name="name"
                        initialValue={meeting?.name}
                        validateStatus={getErrors()?.name && 'error'}
                        help={getErrors()?.name}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Meeting Link"
                        name="meeting_link"
                        initialValue={meeting?.link}
                        validateStatus={getErrors()?.meeting_link && 'error'}
                        help={getErrors()?.meeting_link}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Meeting Date"
                        name="date"
                        initialValue={meeting ? moment(meeting.date) : ''}
                        validateStatus={getErrors()?.date && 'error'}
                        help={getErrors()?.date}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Meeting State"
                        name="state"
                        initialValue={meeting?.state}
                        validateStatus={getErrors()?.state && 'error'}
                        help={getErrors()?.state}
                    >
                        <Select placeholder="Select state" >
                            <Select.Option value="not_started">Not Started</Select.Option>
                            <Select.Option value="in_meeting">In Meeting</Select.Option>
                            <Select.Option value="ended">ended</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Assets"
                        name="assets[]"
                        valuePropName="fileList"
                    >
                        <>
                            <Upload {...props} listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            </Upload>
                        </>
                    </Form.Item>
                    <Form.List
                        name="videos"
                        initialValue={meeting?.videos}
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        label={`Video no ${index + 1}`}
                                        required={true}
                                        key={field.key}
                                    >
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: "Please input embed code here",
                                                },
                                            ]}
                                            noStyle
                                        >
                                            <Input placeholder="Embed code" style={{ width: '80%' }} />
                                        </Form.Item>
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button mx-2"
                                            onClick={() => remove(field.name)}
                                        />
                                    </Form.Item>
                                ))}
                                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        icon={<PlusOutlined />}
                                    >
                                        Add video
                                    </Button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                {
                    meeting &&
                    <Popconfirm
                        title="Are you sure to delete this meeting?"
                        onConfirm={() => Inertia.delete(`/meetings/${meeting.id}`)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <span className="ant-btn ant-btn-link ant-btn-dangerous">
                            Delete
                        </span>
                    </Popconfirm>
                }
            </div>
        </>
    )
}
