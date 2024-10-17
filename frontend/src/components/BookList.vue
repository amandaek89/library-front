<template>
  <div class = "container">
    <h1 class="text-center"> BookList</h1>

    <!-- Input och knapp för att söka efter en specifik bok -->
    <div class="form-group">
      <label for="bookId">Find Book by ID:</label>
      <input
          v-model="bookId"
          type="number"
          class="form-control"
          id="bookId"
          placeholder="Enter book ID"
      />
      <button class="btn btn-primary mt-2" @click="getBookById">Find Book</button>
    </div>

    <!-- Tabell för att visa alla böcker -->
    <table class="table table-striped">
      <thead>
      <th> Book Id </th>
      <th> Book Title </th>
      <th> Book  isbn </th>
      <th> Book  Author </th>
      </thead>
      <tbody>
      <tr v-for = "book in books" v-bind:key = "book.id">
        <td> {{book.id }}</td>
        <td> {{book.title }}</td>
        <td> {{book.isbn }}</td>
        <td> {{book.author }}</td>
      </tr>
      </tbody>
    </table>

    <!-- Visar detaljer om den specifika boken som hämtades baserat på ID -->
    <div v-if="selectedBook" class="mt-4">
      <h2>Selected Book Details</h2>
      <p><strong>ID:</strong> {{ selectedBook.id }}</p>
      <p><strong>Title:</strong> {{ selectedBook.title }}</p>
      <p><strong>ISBN:</strong> {{ selectedBook.isbn }}</p>
      <p><strong>Author:</strong> {{ selectedBook.author }}</p>
    </div>
  </div>
</template>


<script>
import BookService from '../services/BookService'


export default {
  name: 'BookList',
  data(){
    return {
      books : [],
      bookId: '', // För att hålla reda på inputvärdet för bokens ID
      selectedBook: null // För att visa den specifika boken baserat på ID
    }
  },
  methods: {
    getBooks(){
      BookService.getBooks().then((response) =>{
        this.books = response.data;
      });
    },

    // Metod för att hämta en specifik bok baserat på ID
    getBookById() {
      BookService.getBookById(this.bookId).then((response) => {
        this.selectedBook = response.data;
      });
    }
  },
  created() {
    this.getBooks()
  }

}
</script>
