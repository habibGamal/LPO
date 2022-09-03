import React, { useEffect, useState } from "react";
import Book from "../../Components/Book";
import { Book as BookModel, BookDB } from "../../Models/Book";

export default function Editor({ booksDB }: { booksDB: BookDB[] }) {
    const books = booksDB.map(book => new BookModel(book));
    return (
        <div className="container my-16 flex flex-col gap-4">
            <Book />
            {
                books.map(book => <Book key={book.id} book={book} />)
            }
        </div>
    )
}
