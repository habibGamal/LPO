import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import useTranslate from "../Hooks/useTranslate";
import { Form, Input, message } from "antd";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "antd/lib/form/Form";
export default function Feedback() {
    const [form] = useForm();
    const {errors} = usePage().props;
    const t = useTranslate();
    const send = (values:any)=>{
        Inertia.post('/feedback',values,{
            onSuccess:()=>{
                message.success('We received your feedback');
                form.resetFields();
            }
        });
    }
    return (
        <section className="bg-ov-white min-h-[91vh] flex  items-center">
            <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-align-inherit lg:grid-cols-2 items-center justify-center">
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">{t('يهمنا جدا معرفة ', 'Your ')} <span className="highlight-header"> {t('انطباعك', 'feedback ')}</span> {t('', 'is very important for us')}</h2>
                    <Form
                        name="feedback"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={send}
                        form={form}
                    >
                        <Form.Item
                            name="feedback"
                            validateStatus={errors?.feedback && 'error'}
                            help={errors?.feedback}
                        >
                            <Input.TextArea className="text-xl rounded-xl" rows={10} placeholder={t('اكتب انطباعك هنا...','Type your feedback here...')}/>
                        </Form.Item>
                        <Form.Item className='text-center mb-0'>
                            <button type="submit" className="btn">
                                {t('ارسال','Send')}
                            </button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="h-[400px]">
                    <img className="h-full w-full object-contain mx-auto" src="./images/feedback.png" alt="" />
                </div>
            </div>
        </section>
    )
}
