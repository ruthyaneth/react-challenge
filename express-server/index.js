const express = require('express');
const cors = require("cors");;
const app = express();
const axios = require("axios");

app.use(cors());
app.use(express.json());

const SEARCH_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=​:';
const ITEM_URL = 'https://api.mercadolibre.com/items/';

let paramSearch = 'Apple ipod';

app.get('/items', (req, res) => {
    axios.get(`${SEARCH_URL}${paramSearch}`)
    .then((item) => {
        return item.results
    })
    .then((products) => {
        res.status(200).send({
            error: "",
            body: products,
          });
    })
    .catch((e) => {
        console.error(req,res, 'Not found')
    })
})


app.listen('8090', () => {
  console.log(`Server ok`)
})