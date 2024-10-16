<template>
  <div>
    <h1>Lista över böcker</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <strong>Titel:</strong> {{ book.title }} <br />
        <strong>ISBN:</strong> {{ book.isbn }} <br />
        <strong>Författare:</strong> {{ book.author.name }} (Ålder: {{ book.author.age }}) <br />
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { getAllBooks } from '@/api.js';

export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        this.books = await getAllBooks();
      } catch (error) {
        console.error('Det gick inte att hämta böcker:', error);
      }
    },
  },
};
</script>
