import React from 'react';
import PropTypes from 'prop-types';

export const Book = ({author="Unknown author", freeBookmark, pages="Unknown", title="No title provided"}) => {
    return (
        <section>
            <h2>{ title }</h2>
            <p>By: { author }</p>
            <p>Pages: { pages } pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'} </p>
        </section>
    )
}

Book.propTypes = {
    author: PropTypes.string,
    freeBookmark: PropTypes.bool,
    pages: PropTypes.number,
    title: PropTypes.string
}

export default Book
