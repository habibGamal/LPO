import { Interweave } from 'interweave'
import React from 'react'
import { Article, ArticleDB } from '../../Models/Article'

export default function Single({ articleDB }: { articleDB: ArticleDB }) {
    const article = new Article(articleDB);
    return (
        <div className="container">
            <div className="h-[500px]">
                <img className="h-full w-full object-cover object-center" src={article.cover} />
            </div>
            <h2 className="text-3xl font-bold my-8 text-center">{article.title}</h2>
            <div className={article.language === 'ar' ? 'rtl':''}>
                <Interweave content={article.content} />
            </div>
        </div>
    )
}
