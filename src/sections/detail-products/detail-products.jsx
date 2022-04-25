import './detail-products.scss';
import React, { useEffect, useState } from 'react';
import { getProductDetail, getProductDescription } from '../../services/products';
import { detailLabel } from './detail-products.label';
/**
 * @returns {*}
 * @constructor
 */
const ProductDetail = () => {

    //const and var sections
    const [productInfo, setProductInfo] = useState({});
    const [productDescription, setProductDescription] = useState({});

    // functions sections


    //useEffect Sections 

    /**
     * 
     */
    useEffect(() => {
        getProductDetail().then(data => {
            // console.log(data);
            setProductInfo(data)
        }).catch((error) => {
            console.error(error)
        });

        /**
         * 
         */
        getProductDescription().then(data => {
            // console.log(data);
            setProductDescription(data)
        }).catch((error) => {
            console.error(error)
        });
    }, []);

   
    //productInfo.pictures !== undefined ? console.log(productInfo.pictures[0].secure_url) : console.log(productInfo.pictures);

    let image = productInfo.pictures !== undefined ? productInfo.pictures[0].secure_url : '';
    return (
        <React.Fragment>
            {
                productInfo !== undefined ?
                    <div className='sections-detail-products-external'>
                        <div className='sections-detail-products-content'>
                            <div className='sections-detail-products-top'>
                                <div className='sections-detail-products-image-sec'>
                                    <img className='sections-detail-products-image' src={image} alt={productInfo.title} />
                                </div>
                                <div className='sections-detail-products-info'>
                                    <p className='sections-detail-products-info-text'>
                                        <span>{productInfo.condition==='new'
                                        ? detailLabel.new : detailLabel.used}</span>
                                        -
                                        <span> {productInfo.sold_quantity} {detailLabel.sold}</span>
                                    </p>
                                    <h1 className='sections-detail-products-info-title'>{productInfo.title}</h1>
                                    <h2 className='sections-detail-products-info-price'>$ {productInfo.price}</h2>
                                    <button className="sections-detail-products-info-button">{detailLabel.buttonBuy}</button>
                                </div>

                            </div>
                            <div className='sections-detail-products-description'>
                            </div>
                        </div>
                    </div> :
                    <div className="sections-productList-content-not-found">
                        <h2> {detailLabel.errorMesage} </h2>

                    </div>
            }
        </React.Fragment>
    )
}
export default ProductDetail;