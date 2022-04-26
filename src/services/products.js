import axios from 'axios';

const URL = 'https://api.mercadolibre.com/sites/MLA/search?q=​:';

/**
 * 
 * @returns 
 */
export const getSearchProducts = () => {
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=​Apple ipod`)
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
 */
export const getProductDetail = (id) => {
    return axios.get(`https://api.mercadolibre.com/items/MLA1132158644`)
    .then(({ data: item }) => {
       // console.log("Detail", item)
        return item
    }).catch((err) => {
        console.error(err);
    });

}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export const getProductDescription = (id) => {
    return axios.get(`https://api.mercadolibre.com/items/MLA1132158644/description`)
    .then(({ data: item }) => {
        //console.log("description", item)
        return item
    }).catch((err) => {
        console.error(err);
    });

}