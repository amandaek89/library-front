<template>
  <div>
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

    <!-- Modal for displaying book details -->
    <div v-if="selectedBook" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Book Details</h5>
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><strong>ID:</strong> {{ selectedBook.id }}</p>
            <p><strong>Title:</strong> {{ selectedBook.title }}</p>
            <p><strong>ISBN:</strong> {{ selectedBook.isbn }}</p>
            <p><strong>Author:</strong> {{ selectedBook.author }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookService from '../services/BookService'

export default {
  name: "BookSearchButton",
  data() {
    return {
      bookId: '', // To store the input value for the book ID
      selectedBook: null // To store the selected book details
    };
  },
  methods: {
    async getBookById() {
      try {
        const response = await BookService.getBookById(this.bookId);
        this.selectedBook = response.data;
      } catch (error) {
        console.error("Error fetching the book", error);
        this.selectedBook = null; // Reset selected book details
      }
    },
    // Method to close the modal and reset the selected book details
    closeModal() {
      this.selectedBook = null;
    }
  }
}
</script>
