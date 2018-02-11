// import uniqid from 'uniqid'
// import books from './books.JSON'

function getBooks(query = '') {
  return fetch('https://www.googleapis.com/books/v1/volumes?q=' + (query || 'ReactJs'))
    .then(res => res.json())
    .then(({ items }) => {
      if(!items) return []

      return items.map(({ volumeInfo }) => {
        return {
          title: volumeInfo.title,
          subtitle: volumeInfo.subtitle || '',
          author: volumeInfo.authors ? volumeInfo.authors[0] : 'Unknown Author',
          date: volumeInfo.publishedDate ? new Date(volumeInfo.publishedDate) : new Date(),
          rate: Math.floor(Math.random() * 5) + 1,
          imageSrc: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail
            : 'http://books.google.com/books/content?id=Rhl1CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        }
      })
    })
}

export default {
  getBooks
}