import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // En komponent som du skapar
import BookList from '../components/BookList.vue'; // Din BookList-komponent
import AuthorList from '../components/AuthorList.vue'; // Din AuthorList-komponent


const routes = [
    { path: '/', component: HomeView },
    { path: '/bookList', component: BookList },
    { path: '/authors', component: AuthorList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
