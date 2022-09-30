import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Book, BookDB } from "../../Models/Book";
import { motion } from "framer-motion"
import React from "react";
import useTranslate from "../../Hooks/useTranslate";
enum Screen {
    Books,
    Videos,
}
export default function Index({ booksDB }: { booksDB: BookDB[] }) {
    const [screen, setScreen] = useState(Screen.Books);
    const books = booksDB.map(book => new Book(book));
    const [currentBook, setCurrentBook] = useState<Book>();
    const toVideos = (book: Book) => {
        if(book.videos.length > 0){
            setCurrentBook(book)
            setScreen(Screen.Videos);
        }
    }
    const toBooks = () => {
        setScreen(Screen.Books)
    }
    const t = useTranslate();
    return (
        <>
            <section className="bg-ov-white">
                <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-align-inherit lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3 initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">{t('مواد','Study')} <br /> <span className="highlight-header"> {t('الدراسة','material')}</span></motion.h3>
                        <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, delay:.5, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">Enjoy the flexibility of the powerful features of Zoom Web Conferencing and get access directly through MasterStudy LMS thanks to Zoom integration. Schools and Universities can enhance their virtual programs by allowing their learners to access high-quality video sessions through desktop and mobile. Create and manage Zoom Meetings directly from your LMS!</motion.p>
                    </div>
                    <div className="h-[400px]">
                        <motion.img initial={{ x: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="h-full w-full object-contain mx-auto" src="./images/material.png" alt="" />
                    </div>
                </div>
            </section>
            <div className="move-sections-container">
                {/* <div className="moving-sections"> */}
                <section className={`container moving-section screen-1 ${screen === Screen.Books ? 'current' : ''}`}>
                    <div className="box-out">
                        {
                            books.map(book => <div key={book.id} onClick={() => toVideos(book)} style={{ backgroundImage: `url("${book.cover}")` }} className="book books-1"></div>)
                        }
                    </div>
                </section>
                <section className={`container my-8 moving-section screen-2 ${screen === Screen.Videos ? 'current' : ''}`}>
                    {currentBook ? <VideosScreen book={currentBook!} /> : ''}
                    <button onClick={toBooks} className="btn block my-4 mx-auto">Back to books</button>
                </section>
                {/* </div> */}
            </div>
            <section className="m-10"></section>
        </>
    )
}
const VideosScreen = ({ book }: { book: Book }) => {
    const [currentVideo,setCurrentVideo] = useState(book.videos[0].link);
    return (
        <>
            <div className="grid grid-rows-auto lg:grid-cols-4 gap-4">
                <iframe title="viemo" className="lg:col-span-3 w-full h-full min-h-[400px]" src={currentVideo} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                <div className="rounded overflow-hidden shadow-dark-50">
                    <h4 className="p-6 text-2x font-normal bg-gray-200">List of Videos</h4>
                    <ul className="bg-gray-50 ">
                        {
                            book.videos.map((video, i) => <Video key={i} name={video.name} onClick={() => setCurrentVideo(video.link)} active={true} />)
                        }
                    </ul>
                </div>
            </div>
            <button className="btn block my-4 mx-auto">Download PDF</button>
        </>
    )
}
const Video = ({ name, active, onClick }: { name: string, active: boolean, onClick: React.MouseEventHandler<HTMLLIElement> }) => {
    return (
        <li onClick={onClick} className={`${active ? 'bg-gray-100' : ''} py-4 px-4 cursor-pointer hover:bg-gray-100`}><FontAwesomeIcon icon={faCirclePlay} className={`${active ? 'text-main' : 'text-second'} mx-4`} /> {name}</li>
    )
}
