import React, { Component } from 'react';
import { observer } from 'mobx-react'
import BookPreview from '../BookPreview/BookPreview'

import './BookList.css'
@observer
class BookList extends Component {


  render() {
    const result = this.props.store.books.length ?
      this.props.store.books.map((book, i) => {
        return (
          <li key={i} className="book-item animated zoomIn">
            <BookPreview store={this.props.store} book={book} />
          </li>
        )
      })
      :
      <span className="title">No books found <i className="fa fa-exclamation-triangle has-text-danger"></i></span>
      
    return (
      <ul className="book-list">
        {result}
      </ul>
    )
  }
}

export default BookList;
