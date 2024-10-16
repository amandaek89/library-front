<template>
  <div class = "container">
    <h1 class="text-center"> AuthorsList</h1>
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


  </div>


</template>


<script>
import BookService from '../services/BookService'


export default {
  name: 'BookList',
  data(){
    return {
      books : []
    }
  },
  methods: {
    getBooks(){
      BookService.getBooks().then((response) =>{
        this.books = response.data;
      });
    }
  },
  created() {
    this.getBooks()
  }

}
</script>
