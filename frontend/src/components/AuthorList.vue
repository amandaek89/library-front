<template>
  <div class = "container">
    <h1 class="text-center"> AuthorsList</h1>
    <table class="table table-striped">
      <thead>
      <th> Author Id </th>
      <th> Author Name </th>
      <th> Author Age </th>
      </thead>
      <tbody>
      <tr v-for = "author in authors" v-bind:key = "author.id">
        <td> {{author.id }}</td>
        <td> {{author.name }}</td>
        <td> {{author.age }}</td>
      </tr>
      </tbody>
    </table>


  </div>


</template>


<script>
import AuthorService from '../services/AuthorService'


export default {
  name: 'AuthorList',
  data(){
    return {
      authors : []
    }
  },
  methods: {
    getAuthors(){
      AuthorService.getAuthors().then((response) =>{
        this.authors = response.data;
      });
    }
  },
  created() {
    this.getAuthors()
  }

}
</script>