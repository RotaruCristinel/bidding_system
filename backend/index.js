const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');
const auctionsRoutes = require('./routes/auctions');

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:5173' // replace with your Vue.js application's origin
}));

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);
app.use('/auctions', auctionsRoutes);

app.listen(port, () => {
    console.log(`Auctions app listening at http://localhost:${port}`);
});