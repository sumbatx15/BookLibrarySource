import React, { Component } from 'react';
import { observer } from 'mobx-react'
import newBookSvg from '../../assets/newbook.png'
import './BookPreview.css'
@observer
class BookPreview extends Component {
  editClicked() {
    const { store } = this.props
    store.currBook = this.props.book
    store.isEditModal = true;
  }
  deleteClicked() {
    const { store } = this.props
    store.currBook = this.props.book
    store.isDeleteModal = true;
  }
  render() {
    const { book } = this.props

    //For good looking :D
    const rates = []
    for (let i = 0; i < 5; i++) {
      if (book.rate > i) {
        rates.push(<span key={i} className="fa fa-star has-text-danger"></span>)
      }else{
        rates.push(<span key={i} className="fa fa-star"></span>)        
      }
    }

    return (
      <div className="book-preview" >
        <div className="book-actions">
          <button onClick={this.editClicked.bind(this)}>Edit</button>
          <button color="secondary" onClick={this.deleteClicked.bind(this)}>Delete</button>
        </div>
        <div className="book-image">
          <img src={book.imageSrc || newBookSvg} alt="book" />
        </div>
        <div className="book-details">
          <span className="subtitle is-capitalized">{book.title}</span>
          <div>
            {rates}
          </div>
          <span className="author has-text-info	">By {book.author}</span>
          <span className="date">{book.date.toLocaleDateString()}</span>
        </div>
      </div>
    )
  }
}

export default BookPreview;
