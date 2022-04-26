import './detail-products.scss'; // first .css to improve performance
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductDetail, getProductDescription } from '../../services/products';
import { detailLabel } from './detail-products.label';
/**
 * @returns {*}
 * @constructor
 */
const ProductDetail = () => {
    //const and var sections
    const location = useLocation();
    const [productInfo, setProductInfo] = useState({});
    const [productDescription, setProductDescription] = useState({});

    //useEffect Sections, just before return improve performance

    /**
     * call service to load and render data
     */
    useEffect(() => {
        const searchValue = location.pathname.split('items/')[1];
        getProductDetail(searchValue).then(data => {
            setProductInfo(data)
        }).catch((error) => {
            console.error(error)
        });
        getProductDescription(searchValue).then(data => {
            setProductDescription(data)
        }).catch((error) => {
            console.error(error)
        });
    }, []);

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
                                        <span>{productInfo.condition === 'new'
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
                                <h3 className='sections-detail-products-description-title'>{detailLabel.productDescription}</h3>
                                <p>
                                    {productDescription.plain_text}
                                </p>
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