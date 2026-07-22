function BookList({ books }) {
    return (
        <section className="Books-list">
            {books.map(((book) =>
                <BookCard
                    key={book.id}
                    book={book}
                />
            ))}
        </section>
    );
}

export default BookList;