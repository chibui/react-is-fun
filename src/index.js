import React from 'react';
import { render } from 'react-dom';

let BookList = [
    { author: "Roxane Gay", pages: 320,  title: "Hunger" },
    { author: "Ernest Hemingway", pages: 260,  title: "The Sun Also Rises" },
    { author: "Zadie Smith", pages: 480, title: "White Teech"},
    { author: "Kurt Vonnegut", pages: 304, title: "Cat's Cradle"}
]

const Book = ({author, pages, title}) => {
    return (
        <section>
            <h2>{ title }</h2>
            <p>By: { author }</p>
            <p>Pages: { pages } pages</p>
        </section>
    )
}

const Library = ({books}) => {
    return (
        <div>
            {books.map( 
                (book, i) => 
                    <Book 
                        author={ book.author }
                        pages={ book.pages }
                        key={ i }
                        title={ book.title } />
            )}
        </div>
    )
}

render(
    <Library books={ BookList }/>, 
    document.getElementById('root')
);