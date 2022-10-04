import React from 'react'
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card, Popconfirm } from 'antd';
import { Article, ArticleDB } from '../../Models/Article';
import { Link, usePage } from '@inertiajs/inertia-react';
import { motion } from "framer-motion"
import { Inertia } from '@inertiajs/inertia';
import useTranslate from '../../Hooks/useTranslate';
export default function Index({ articlesDB }: { articlesDB: ArticleDB[] }) {
    const { Meta } = Card;
    const articles = articlesDB.map(article => new Article(article));
    const { auth } = usePage().props;
    const t = useTranslate();
    return (
        <>
            <section className="bg-ov-white">
            <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-align-inherit lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3 initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">
                            {t('اقراء','Read our')} <br /> <span className="highlight-header"> {t('مقالاتنا','articles')}</span>
                        </motion.h3>
                        <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, delay: .5, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">
                            {t(
                                'قد تعتقد أنه من المستحيل أن تصبح عازفاً ماهراً على البيانو بدون سنوات من دروس العزف غالية الثمن، ولكن هذا ليس هو الحال بالضرورة، إذ يمكنك تعلم العزف على البيانو بنفسك، إذ يعتبر العزف على البيانو شيئاً مفيداً للصحة؛ حيث أن تلقّي دروس البيانو والعزف عليه يساعدان على تحسين وعيك السمعي، وفي هذه المقالات سنذكر لك أهم الأساسيات لتعلم كيفية العزف على البيانو.',
                                'You may think that it is impossible to become a good piano player without years of expensive playing lessons, but this is not necessarily the case. You can learn to play the piano on your own. Playing the piano is good for your health; Taking piano lessons and playing it helps improve your auditory awareness, and in these articles we will mention the most important basics for learning how to play the piano.'
                            )}
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
                                    dir="rtl"
                                    actions={auth ? [
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
                                    ] : []}
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
