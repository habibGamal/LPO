import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Book as BookModel } from '../Models/Book';
import BookVideo from './BookVideo';
import { Button, Form, Input, Upload, UploadFile, UploadProps } from 'antd';
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/inertia-react';

export default function Book({ book = null }: { book?: BookModel | null }) {
    const [form] = Form.useForm();
    const { errors } = usePage().props;
    const [videos, setVideos] = useState<number[]>(book?.videos.map((_, i) => i) || []);
    const [lastVideoCount, setLastVideoCount] = useState<number>(book ? book.videos.length - 1 : -1);
    const addVideo = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        setVideos(state => [...state, lastVideoCount + 1]);
        setLastVideoCount(count => count + 1);
    }
    const removeVideo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();
        setVideos(state => state.filter(videoId => videoId !== id));
    }
    const [fileList, setFileList] = useState<UploadFile[]>(
        book ? [
            {
                uid: '-1',
                name: book.coverName,
                status: 'done',
                url: book.cover,
            },
        ] :
            []
    );
    // cover image upload props
    const props: UploadProps = {
        beforeUpload: file => {
            return false;
        },
        maxCount: 1,
        fileList,
        onChange: ({ fileList: newFileList }) => {
            setFileList(newFileList);
        },
    };
    // form submit
    const store = (values: any) => {
        Inertia.post('/books', {
            ...values,
            cover: fileList?.[0]?.originFileObj
        }, {
            errorBag: '-1',
            preserveScroll: true,
            onSuccess: () => {
                form.resetFields();
                setFileList([]);
                setVideos([]);
            },
        })
    };
    const update = (values: any) => {
        const data = { ...values, _method: 'put' }

        const fileId = fileList[0]?.uid;
        if (fileId && fileId !== '-1') {
            data.cover = fileList[0].originFileObj
        }

        Inertia.post(`/books/${book!.id}`, data, {
            forceFormData: true,
            errorBag: `${book!.id}`,
            preserveScroll: true
        });
    };

    const getErrors = () => book ? errors?.[`${book.id}`] : errors?.['-1'];

    return (
        <>
            <div className="rounded bg-gray-100 shadow-sm p-4">
                <FontAwesomeIcon icon={faCaretRight} /> {book ? book.name : 'Add New Book'}
                <Form
                    form={form}
                    name="basic"
                    className="max-w-[500px] mx-auto"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={book ? update : store}
                    autoComplete="off"
                    method='post'
                    encType='multipart/form-data'
                >
                    <Form.Item
                        label="Book Name"
                        name="name"
                        initialValue={book?.name}
                        validateStatus={getErrors()?.name && 'error'}
                        help={getErrors()?.name}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Cover"
                        name="cover"
                        valuePropName="fileList"
                        validateStatus={getErrors()?.cover && 'error'}
                        help={getErrors()?.cover}
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
                    <Form.Item
                        name="pdf"
                        label="PDF Link"
                        initialValue={book?.pdf}
                        validateStatus={getErrors()?.pdf && 'error'}
                        help={getErrors()?.pdf}
                    >
                        <Input />
                    </Form.Item>
                    {videos.map((id, count) => <BookVideo key={id} id={id} video={book ? book.videos[id] : null} count={count} removeVideo={removeVideo} />)}
                    <Form.Item wrapperCol={{ offset: 16, span: 20 }}>
                        <Button onClick={e => addVideo(e)} type="link">
                            + Add Video
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                {
                    book &&
                    <Link href={`/books/${book.id}`} method="delete" as="button" className="ant-btn ant-btn-link ant-btn-dangerous">
                        Delete
                    </Link>
                }
            </div>
        </>
    )
}
