import './product-list.scss'; // first .css to improve performance
// diferent library or resource import
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// components import
import { getSearchProducts } from '../../services/products';
import CardElement from '../../components/card-elements/card-element';
import { productListLabel } from './product-list.label'

/**
 * @author Ruth Rojas
 * @returns {*}
 * @constructor
 */
const ProductList = () => {

    const location = useLocation();
    const [productListRes, setProductList] = useState([])


    /**
     * call function services to get products
     */
    useEffect(() => {
        const searchValue = location.pathname.split('=')[1];
        getSearchProducts(searchValue).then(data => {
            setProductList(data);
        }).catch((error) => {
            console.error(error)
        });
    }, []);

    return (
        <React.Fragment>
            <div className='sections-productList-external'>
                {
                    productListRes?.length > 0 ?
                        <div className="">
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
                            <h2>{productListLabel.errorMessage}</h2>

                        </div>
                }
            </div>
        </React.Fragment>
    )
}
export default ProductList;