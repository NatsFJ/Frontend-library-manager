function BookList({ books, onBookClick }) {
    return (
        <section className="Books-list">
            {books.map(((book) =>
                <BookCard
                    key={book.id}
                    book={book}
                    onBookClick={onBookClick}
                />
            ))}
        </section>
    );
}

export default BookList;