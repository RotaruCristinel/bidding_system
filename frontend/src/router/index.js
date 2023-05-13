// router.js or router/index.js
import {createRouter, createWebHistory} from 'vue-router'
import ProductPage from '../components/ProductPage.vue'

const routes = [
    {
        path: '/products',
        component: ProductPage,
        props: (route) => ({category: route.query.category})
    }
    // other routes...
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default
