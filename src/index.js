import React from 'react';
import { render } from 'react-dom';

import Library from './Library';

let BookList = [
    { title: "Hunger" },
    { author: "Ernest Hemingway", pages: 260},
    { author: "Zadie Smith", pages: 480, title: "White Teech"},
    { author: "Kurt Vonnegut", pages: 304, title: "Cat's Cradle"}
]
// let BookList = {};

render(
    <Library books={ BookList }/>, 
    // <FavouriteColourForm />,
    document.getElementById('root')
);
