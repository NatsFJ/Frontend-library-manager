function BookCard({book, onBookClick}) {
    return (
        <article className="book-card">
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
        </article>   
    );  
}

export default BookCard;