function BookDetails({book}) {
    return (
        <div className="book-details">
            <img src={book.coverImage} alt={book.title} />
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Description:</strong> {book.description}</p>
        </div>
    );
}

export default BookDetails;