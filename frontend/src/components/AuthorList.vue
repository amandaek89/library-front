<template>
  <div>
    <h1>Lista över författare</h1>
    <ul>
      <li v-for="author in authors" :key="author.id">
        <strong>Namn:</strong> {{ author.name }} <br />
        <strong>Ålder:</strong> {{ author.age }} <br />
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { getAllAuthors } from '../api.js';

export default {
  data() {
    return {
      authors: [],
    };
  },
  created() {
    this.fetchAuthors();
  },
  methods: {
    async fetchAuthors() {
      try {
        this.authors = await getAllAuthors();
      } catch (error) {
        console.error('Det gick inte att hämta författare:', error);
      }
    },
  },
};
</script>

