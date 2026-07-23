import { useState } from "react";
import TopBar from "../components/Topbar";
import BookList from "../components/BookList";
import BookDetails from "../components/Bookdetails";
import books from "../data/books"

function Books() {
    const [selectedBook, setSelectedBook] = useState(null);
    function handleBookClick(book) {
        setSelectedBook(book);

    }
    return (
        <main>

            <TopBar />
            <section>
                <BookList
                    books={books}
                    handleBookClick={handleBookClick} />
                <BookDetails
                    book={selectedBook} />
            </section>
        </main>
    )
}

export default Books;