import './product-list.scss';
import React, { useEffect, useState } from 'react';
import { getSearchProducts } from '../../services/products';
import CardElement from '../../components/card-elements/card-element';
/**
 * @returns {*}
 * @constructor
 */
const ProductList = () => {
    const [productListRes, setProductList] = useState([])

    /**
     * 
     */
    useEffect(() => {
        getSearchProducts().then(data => {
            setProductList(data);
        }).catch((error) => {
            console.error(error)
        });

    }, []);

    console.log(productListRes);
    return (
        <React.Fragment>
            <div className='sections-productList-external'>
                {
                    productListRes?.length > 0 ?
                        <div className="">
                            <h1>ruta</h1>
                            <div className='sections-productList-content'>
                                {
                                    productListRes
                                        .slice(0, 4)
                                        .map((item) =>
                                            <CardElement key={item.id} {...item} />
                                        )
                                }
                            </div>
                        </div>
                        :
                        <div className="sections-productList-content-not-found">
                            <h2> No se encontraron resultados </h2>

                        </div>
                }
            </div>
        </React.Fragment>
    )
}
export default ProductList;