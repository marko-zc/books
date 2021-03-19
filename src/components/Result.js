import React from 'react';
import PropTypes from 'prop-types';
import './Result.css';
import nothumb from '../nothumb.jpg';

function Result({ data })
{
        if(data) {

            const bookList = data.items;
            const books = bookList.map(book => book.volumeInfo);
            // const authors = books.volumeInfo.authors.map(author => <span>author</span>);
            console.log(books);
            let thumbnail;
            let authors;
            let categories;
            let rating;
            const renderBookList = (books) => books.map(book => {
                if (book.imageLinks) {
                    thumbnail = book.imageLinks.thumbnail;
                } else {
                    thumbnail = nothumb;
                }

                if (book.authors) {
                    authors = book.authors.map(author => <li>{author}</li>);
                } else {
                    authors = "Unknown"
                }
                if (book.categories) {
                    categories = book.categories.map(category => <li>{category}</li>)
                }
                if(book.averageRating) {
                    rating = book.averageRating + "/5"
                } else {
                    rating = "None";
                }



                return (
                    <div className="book">
                        <div className="thumb">
                            <img src={thumbnail} />
                            <span>{book.pageCount} pages</span>
                        </div>
                        <div className="info">
                            <span className="title">{book.title}</span>
                            <ul className="authors">
                                by {authors}
                            </ul>
                            <ul className="categories">
                                Category: {categories}
                            </ul>
                            <span>Avg. rating: {rating}</span>
                            <span>Published: {book.publishedDate}</span>
                            <span>Description:</span><p className="description">{book.description}</p>
                        </div>
                    </div>
                )
            })
            return(
                    <div>
                        {renderBookList(books)}
                    </div>
                );
        } return null;
}

export default Result;

Result.propTypes = {
    data: PropTypes.object
};