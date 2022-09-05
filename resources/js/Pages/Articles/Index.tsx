import React from 'react'
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card, Popconfirm } from 'antd';
import { Article, ArticleDB } from '../../Models/Article';
import { Link } from '@inertiajs/inertia-react';
import { motion } from "framer-motion"
import { Inertia } from '@inertiajs/inertia';
export default function Index({ articlesDB }: { articlesDB: ArticleDB[] }) {
    const { Meta } = Card;
    const articles = articlesDB.map(article => new Article(article));
    return (
        <>
            <section className="bg-ov-white">
                <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3 initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">
                            Read our <br /> <span className="highlight-header"> articles</span>
                        </motion.h3>
                        <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, delay: .5, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">
                            Enjoy the flexibility of the powerful features of Zoom Web Conferencing and get access directly through MasterStudy LMS thanks to Zoom integration. Schools and Universities can enhance their virtual programs by allowing their learners to access high-quality video sessions through desktop and mobile. Create and manage Zoom Meetings directly from your LMS!
                        </motion.p>
                    </div>
                    <div className="h-[400px]">
                        <motion.img src="./images/articles.png" initial={{ x: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="h-full w-full object-contain mx-auto" alt="" />
                    </div>
                </div>
            </section>
            <div className="container my-16">
                <div className="flex gap-4 justify-evenly flex-wrap items-start">
                    {
                        articles.map(
                            article =>
                                <Card
                                    key={article.id}
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={article.cover}
                                        />
                                    }
                                    actions={[
                                        <Popconfirm
                                            title="Are you sure to delete this article?"
                                            onConfirm={() => Inertia.delete(`/articles/${article.id}`)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined key="delete" />
                                        </Popconfirm>
                                        ,
                                        <Link href={`/articles/${article.id}/edit`}>
                                            <EditOutlined key="edit" />
                                        </Link>,
                                        <Badge count={5} size="small">
                                            <EyeOutlined key="visits" />
                                        </Badge>
                                    ]}
                                >
                                    <Link href={`/articles/${article.id}`}>
                                        <Meta
                                            title={article.title}
                                            description={article.description}
                                        />
                                    </Link>
                                </Card>
                        )
                    }
                </div>
            </div>
        </>
    )
}
