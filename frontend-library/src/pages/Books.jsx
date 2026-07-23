import { useState } from "react";
import TopBar from "../components/Topbar";
import BookList from "../components/BookList";
import BookDetails from "../components/Bookdetails";

function Books() {
    const [selectedBook, setSelectedBook] = useState(null);
    function handleBookClick(book) {
        setSelectedBook(book);

    }
    return (
        <main>

            <TopBar />
            <section>
                <BookList />
                <BookDetails />
            </section>
        </main>
    )
}

export default Books;