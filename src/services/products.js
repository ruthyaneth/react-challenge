import axios from 'axios';

const SEARCH_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=​:';
const ITEM_URL = 'https://api.mercadolibre.com/items/';

/**
 * 
 * @param {*} paramSearch 
 * @returns 
 * get the products that match the search parameter
 */
export const getSearchProducts = (paramSearch) => {
    return axios.get(`${SEARCH_URL}${paramSearch}`)
        .then(({ data: item }) => {
            return item.results
        }).catch((err) => {
            console.error(err);
        });
}

/**
 * 
 * @param {*} id 
 * @returns 
 * get the information of a specific product
 */
export const getProductDetail = (id) => {
    return axios.get(`${ITEM_URL}${id}`)
        .then(({ data: item }) => {
            return item
        }).catch((err) => {
            console.error(err);
        });
}

/**
 * 
 * @param {*} id 
 * @returns 
 * get the detail text a product product
 */
export const getProductDescription = (id) => {
    return axios.get(`${ITEM_URL}${id}/description`)
        .then(({ data: item }) => {
            return item
        }).catch((err) => {
            console.error(err);
        });
}