<template>
  <div class="homeView">
    <h1>Welcome to the Book and Author Management App</h1>
    <div class="buttons">
      <button @click="goToBooks">View Books</button>
      <button @click="goToAuthors">View Authors</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToBooks() {
      this.$router.push('/books');
    },
    goToAuthors() {
      this.$router.push('/authors');
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
