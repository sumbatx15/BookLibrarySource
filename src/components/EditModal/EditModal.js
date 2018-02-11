import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import { required, date, duplication } from './Validations'

@observer
class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: '',
                author: '',
                date: ''
            }
        };
    }

    componentWillMount() {
        if (!this.props.store.currBook) return

        let book = { ...this.props.store.currBook }
        this.setState({ book: { ...book } })
    }

    onInputChange(field) {
        return (event) => {
            let book = { ...this.state.book, [field]: event.target.value }
            this.setState({ book: { ...book } })
        }
    }

    closeModal() {
        this.props.store.isEditModal = false;
    }

    saveBook() {
        let book = { 
            ...this.state.book, 
            date: new Date(this.state.book.date),
            title: this.state.book.title.replace(/[^0-9a-zA-Z ]+/g,'').toLowerCase()
        }
        this.props.store.saveBook(this.props.store.currBook, book)
        this.closeModal()
    }

    render() {
        return (
            <div ref={modal => this.modal = modal} className="modal is-active">
                <div className="modal-background" onClick={this.closeModal.bind(this)}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Edit Book</p>
                        <button className="delete" aria-label="close" onClick={this.closeModal.bind(this)}></button>
                    </header>
                    <Form>
                        <section className="modal-card-body">
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <Input
                                        placeholder="Title"
                                        type="text"
                                        className="input is-capitalized"
                                        value={this.state.book.title}
                                        onChange={this.onInputChange('title')}
                                        validations={[required, duplication]}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Author</label>
                                <div className="control">
                                    <Input
                                        placeholder="Author"
                                        type="text"
                                        className="input"
                                        value={this.state.book.author}
                                        onChange={this.onInputChange('author')}
                                        validations={[required]}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Date</label>
                                <div className="control">
                                    <Input
                                        placeholder="Date"
                                        type="text"
                                        className="input"
                                        value={this.state.book.date}
                                        onChange={this.onInputChange('date')}
                                        validations={[required, date]}
                                    />
                                </div>

                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <Button className="button is-success" onClick={this.saveBook.bind(this)}>Save changes</Button>
                            <button className="button" onClick={this.closeModal.bind(this)}>Cancel</button>
                        </footer>
                    </Form>
                </div>
            </div>
        )
    }
}

export default EditModal;
