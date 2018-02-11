import React, { Component } from 'react';
import { observer } from 'mobx-react'
import BookList from '../../components/BookList/BookList'

import './HomePage.css'
@observer
class HomePage extends Component {
  showNewModal(){
    this.props.store.currBook = null
    this.props.store.isEditModal = true
  }

  render() {
    return (
      <div className="home-page">
        <button className="btn-new-book button is-success is-small animated zoomInRight" onClick={this.showNewModal.bind(this)}>
          <i className="fa fa-plus"></i>
        </button>

        <BookList store={this.props.store} />
      </div>
    )
  }
}

export default HomePage;
