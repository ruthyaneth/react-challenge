import './card-element.scss' // first .css to improve performance
import React from 'react';
import { useNavigate }  from 'react-router-dom';
import iconDelivey from '../../assets/card-elements/ic_shipping.png';

const CardElement = ({ id, title, thumbnail, price, shipping, address }) => {

    //const and var section
    const navigate = useNavigate();

    // functions sections
    /**
     * 
     * @param {*} id 
     * navigate to detail product page
     */
    const handleClick = (id) => {
        const url = `/items/${id}`;
        navigate(url);
    }

    return (
        <div className='component_card_element_external' onClick={() => handleClick(id)}>
            <img className="component_card_element_productImage" src={thumbnail} alt={title} />
            <div className='component_card_element_container'>
                <p className='component_card_element_amount'>${price} {shipping.free_shipping ? <img src={iconDelivey} title='Envio Gratis' alt='Envio Gratis' /> : ''}</p>
                <h2 className="component_card_element_title">{title}</h2>
            </div>
            <div className="component_card_element_address"> <p>{address.city_name}</p></div>
        </div>
    )
}

export default CardElement;