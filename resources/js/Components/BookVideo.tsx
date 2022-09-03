import { Button, Form, Input } from 'antd';
import React from 'react'

export default function BookVideo({ id, count, removeVideo, video = null }: { id: number, count: number, removeVideo: Function, video?: { name: string, link: string } | null }) {
    console.log(id);

    return (
        <>
            <hr />
            <h4 className="text-lg font-sans text-center my-4">Video No {count + 1}</h4>
            <Form.Item
                label="Video Name"
                name={`video_name[${id}]`}
                initialValue={video?.name}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Video Link"
                name={`video_link[${id}]`}
                initialValue={video?.link}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 16, span: 20 }}>
                <Button onClick={(e) => removeVideo(e, id)} type="link" danger>
                    - Remove Video
                </Button>
            </Form.Item>

            <hr />
        </>
    )
}
