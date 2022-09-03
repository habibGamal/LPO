import { Link } from "@inertiajs/inertia-react"
import React from "react"

export default function Dashboard() {
    return (
        <div className="container py-4">
            <h2 className="text-center font-sans my-4 text-3xl font-bold">HI <span className="highlight-header"> DR.Maha</span></h2>
            <p className="text-center font-sans text-2xl">This is a dashboard to manage your website</p>
            <div className="flex flex-wrap  gap-4 justify-evenly mt-16">
                <Link href="/books/create">
                    <div className="rounded hover:scale-110 transition-transform cursor-pointer bg-ov-white p-4 shadow-sm max-w-[400px]">
                        <img className="w-full" src="./images/material.png" alt="" />
                    </div>
                </Link>
                <Link href="/meetings/create">
                    <div className="rounded hover:scale-110 transition-transform cursor-pointer bg-ov-white p-4 shadow-sm max-w-[400px]">
                        <img className="w-full" src="./images/meeting.jpg" alt="" />
                    </div>
                </Link>
                <div className="rounded hover:scale-110 transition-transform cursor-pointer flex items-center bg-ov-white p-4 shadow-sm max-w-[400px]">
                    <img className="w-full" src="./images/quiz.png" alt="" />
                </div>
                <Link href="/articles/create">
                    <div className="rounded hover:scale-110 transition-transform cursor-pointer bg-ov-white p-4 shadow-sm max-w-[400px]">
                        <img className="w-full" src="./images/articles.png" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
