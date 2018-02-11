import React, { Component } from 'react';

class SearchBook extends Component {
    queryChanged(event) {
        if (event.key !== 'Enter') return
        this.input.blur();
        this.props.store.loadBooks(this.input.value)
        window.scrollTo(0,2)
    }
    render() {
        return <input
            className="search-book animated fadeIn"
            ref={input => this.input = input}
            type="text"
            placeholder="Enter a book name..."
            onKeyPress={this.queryChanged.bind(this)}
        />
    }
}

export default SearchBook;
