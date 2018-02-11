import React from 'react';
import BookStore from '../../store/BookStore'
export const required = (value) => {
    if (!value.toString().trim().length) {
        return <p className="help is-danger animated flash">Require.</p>
    }
};

export const date = (value) => {
    if(new Date(value).toString().includes('Invalid'))
        return <p className="help is-danger animated flash">Invalid Date.</p>
};

export const duplication = (value) => {
    let isDup = false;
    for (let i = 0; i < BookStore.books.length; i++) {

        const book = BookStore.books[i]; 
        if(book === BookStore.currBook) continue
        if(book.title.toLowerCase() === value.toLowerCase()) {
            isDup = true
            break
        }
    }
    if(isDup) return <p className="help is-danger animated flash">{value}, already exists.</p>
};