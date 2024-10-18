import axios from 'axios'


const BOOK_API_BASE_URL = 'http://localhost:8081/books'


class BookService{
    getBooks(){
        return axios.get(BOOK_API_BASE_URL)
    }

    // Ny metod för att hämta en specifik bok baserat på ID
    getBookById(id) {
        return axios.get(`${BOOK_API_BASE_URL}/${id}`)
    }

    // Ny metod för att skapa en ny bok
    addBook(book) {
        return axios.post(BOOK_API_BASE_URL, book)
    }
}


export default new BookService()