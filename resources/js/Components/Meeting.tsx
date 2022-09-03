import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Meeting as MeetingModel } from '../Models/Meeting';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, DatePicker, Form, Input, Select, Upload, UploadFile, UploadProps } from 'antd';
import { Link, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { Option } from 'antd/lib/mentions';
import moment from 'moment';
import { ContextApi } from '../Contexts/AppContext';
import useFlashMessage from '../Hooks/useFlashMessage';
export default function Meeting({ meeting = null }: { meeting?: MeetingModel | null }) {
    const [form] = Form.useForm();
    const flashMessage = useFlashMessage();
    const { errors } = usePage().props;
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
            if (file.uid.includes('existing-asset-'))
                setRemovedAssets(assets => [...assets, file.name])
        }
    };
    // form submit
    const store = (values: any) => {
        Inertia.post('/meetings', {
            ...values,
            date: values?.date?._d,
            assets: fileList.map(file => file.originFileObj),
        }, {
            errorBag: '-1',
            preserveScroll: true,
            forceFormData: true,
            onSuccess: () => {
                flashMessage({
                    message:'Meeting has been added succesfuly',
                    type:'success'
                });
                form.resetFields();
                setFileList([]);
            },
        })
    };
    const update = (values: any) => {
        const data = {
            ...values,
            assets:
                (fileList.filter(file => !file.uid.includes('existing-asset-')))
                    .map(file => file.originFileObj),
            date: values?.date?._d,
            removedAssets,
            _method: 'put'
        }

        Inertia.post(`/meetings/${meeting!.id}`, data, {
            forceFormData: true,
            errorBag: `${meeting!.id}`,
            preserveScroll: true,
            onSuccess: () => {
                flashMessage({
                    message:'Meeting updated succesfuly',
                    type:'success'
                });
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
                    name="basic"
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

                    <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                {
                    meeting &&
                    <Link href={`/meetings/${meeting.id}`} method="delete" as="button" className="ant-btn ant-btn-link ant-btn-dangerous">
                        Delete
                    </Link>
                }
            </div>
        </>
    )
}
