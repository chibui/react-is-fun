import React from 'react';
import { render } from 'react-dom';

const Book = ({author, pages, title}) => {
    return (
        <section>
            <h2>{ title }</h2>
            <p>By: { author }</p>
            <p>Pages: { pages } pages</p>
        </section>
    )
}

const Library = () => {
    return (
        <div>
            <Book 
                author="Ernest Hemingway"
                pages={ 260 }
                title="The Sun Also Rises" />
            <Book 
                author="Zadie Smith"
                pages={ 480 }
                title="White Teech" />
            <Book 
                author="Kurt Vonnegut"
                pages={ 304 }
                title="Cat's Cradle" />
        </div>
    )
}
render(
    <Library />, 
    document.getElementById('root')
);