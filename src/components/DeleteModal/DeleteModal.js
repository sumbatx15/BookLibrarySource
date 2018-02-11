import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class DeleteModal extends Component {
    closeModal() {
        this.props.store.isDeleteModal = false;
    }
    deleteBook() {
        this.props.store.deleteBook()
        this.closeModal()
    }
    render() {

        return (
            <div ref={modal => this.modal = modal} className="modal is-active ">
                <div className="modal-background" onClick={this.closeModal.bind(this)}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Delete book</p>
                        <button className="delete" aria-label="close" onClick={this.closeModal.bind(this)}></button>
                    </header>
                    <section className="modal-card-body has-text-centered">
                        <h2 className="subtitle">Are you sure you want to delete this book?</h2>
                        <img src={this.props.store.currBook.imageSrc} alt=""/>
                        <h2 className="subtitle">{this.props.store.currBook.title}</h2>

                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-danger" onClick={this.deleteBook.bind(this)}>Delete</button>
                        <button className="button" onClick={this.closeModal.bind(this)}>Cancel</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default DeleteModal;
