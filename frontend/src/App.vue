<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/books">Books</router-link> |
      <router-link to="/authors">Authors</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AuthorList from './components/AuthorList.vue'

export default {
  name: 'App',
  components: {
    AuthorList
  }
}
</script>

<style>
/* Lägg till CSS här om nödvändigt */
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
