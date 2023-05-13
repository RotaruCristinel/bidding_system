<template>
    <div class="product-page">
        <div class="product" v-for="product in products" :key="product.id">
            <img :src="product.image" alt="Product Image"/>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>Auction Time: {{ new Date(product.auction_time) }}</p>
            <p>Price: {{ product.starting_price }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:3000/products');
            console.log(response.data);
            this.products = response.data;
        } catch (error) {
            console.error("error");
            console.error(error);

        }
    },
};
</script>


<style scoped>
.product-page {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 6 columns, distribute space evenly */
    gap: 20px;
    align-items: start;
    margin-top: 20px;
}

.product {
    flex: 1 0 200px; /* grow and shrink equally, initial size of 200px */
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    margin: 10px; /* add some margin to simulate grid gap */
}

img {
    width: 100%;
    height: auto;
}
</style>
