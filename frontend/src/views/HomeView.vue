<template>
  <div class="home-container">
    <nav class="navbar">
      <button @click="showComponent('addBook')" class="nav-button">Add Book</button>
      <button @click="showComponent('searchBook')" class="nav-button">Search Book</button>
    </nav>

    <div class="content">
      <component :is="currentComponent"></component> <!-- Dynamically render the current component -->
    </div>

    <BookList v-if="currentComponent === 'bookList'" /> <!-- Show BookList component -->
  </div>
</template>

<script>
import AddBookButton from '../components/AddBookButton.vue'; // Importing AddBookButton component
import BookSearchButton from '../components/BookSearchButton.vue'; // Importing BookSearchButton component
import BookList from '../components/BookList.vue'; // Importing BookList component

export default {
  name: 'HomeView',
  components: {
    AddBookButton,
    BookSearchButton,
    BookList
  },
  data() {
    return {
      currentComponent: 'bookList' // Default component to display
    };
  },
  methods: {
    showComponent(component) {
      this.currentComponent = component === 'addBook' ? AddBookButton : BookSearchButton; // Switch between components
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar {
  display: flex;
  justify-content: center;
  background-color: #007bff; /* Bootstrap primary color */
  padding: 10px;
  width: 100%;
}

.nav-button {
  margin: 0 10px;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.nav-button:hover {
  text-decoration: underline;
}

.content {
  margin-top: 20px;
  width: 80%; /* Adjust width as necessary */
}
</style>
