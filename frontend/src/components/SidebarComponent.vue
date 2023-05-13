<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <h2>Categories</h2>
            <ul>
                <li v-for="(category, index) in categories" :key="index">
                    <router-link :to="`/products?category=${category.id}`">{{ category.name }}</router-link>
                </li>
            </ul>
        </div>
        <div class="contact-us">
            <router-link to="/contact">Contact Us</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            categories: [],
        }
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:3000/categories');
            this.categories = response.data;
        } catch (error) {
            console.error("Error fetching categories: ", error);
        }
    }
}
</script>

<style scoped>
.sidebar {
    top: 78px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 200px;
    padding: 20px;
    background-color: #eee;
    border-right: 1px solid #ddd;
    overflow: auto;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
}

h2 {
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

.contact-us {
    margin-top: 20px;
}
</style>
