import { action, observable } from 'mobx'
// computed,
import BookService from '../services/BookService'

class BookStore {
    constructor() {
        this.loadBooks()
    }

    @observable books = []
    @observable currBook = {}
    @observable isEditModal = false
    @observable isDeleteModal = false
    @observable searchQuery = ''

    @action
    loadBooks(searchQuery) {
        BookService.getBooks(searchQuery).then(books => this.books.replace(books))
    }

    @action
    saveBook(prevBook,newBook){
        if(!prevBook) return this.books.unshift(newBook)

        let index = this.books.indexOf(prevBook)
        this.books[index] = newBook
    }

    @action 
    deleteBook(){
        let index = this.books.indexOf(this.currBook)
        this.books.splice(index,1)
    }
}

var store = new BookStore()

export default store