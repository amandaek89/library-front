<template>
  <div>
    <h2>Add a new book</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="title">Title</label>
        <input
            type="text"
            v-model="book.title"
            id="title"
            placeholder="Enter book title"
            required />
        </div>
      <div>
        <label for="isbn">ISBN</label>
        <input
            type="text"
            v-model="book.isbn"
            id="isbn"
            placeholder="Enter book ISBN"
            required />
        </div>
      <div>
        <label for="author">Author</label>
        <input
            type="text"
            v-model="book.author"
            id="author"
            placeholder="Enter book author"
            required />
        </div>
      <!-- Disable the button if any of the fields is empty -->
      <button type="submit" :disabled="!book.title || !book.isbn || !book.author">
        Add Book
      </button>
      <!-- Show a message if the book was added successfully or if an error occurred -->
      <p v-if="message">{{ message }}</p>
    </form>
  </div>
</template>

<script>
import BookService from '../services/BookService'

export default {
  name: "AddBookButton",
  data() {
    return {
      book: {
        title: '',
        isbn: '',
        author: ''
      },
      message: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await BookService.addBook(this.book);
        this.message = "Book added successfully!";
        this.book = {
          title: '',
          isbn: '',
          author: ''
        };
      } catch (error) {
        this.message = "An error occurred while adding the book."; // Error message
        console.error(error);
      }
    }
  }

};
</script>

