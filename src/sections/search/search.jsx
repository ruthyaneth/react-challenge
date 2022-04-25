import './search.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate }  from 'react-router-dom';
import iconMeLi from '../../assets/search-bar/Logo_ML.png';
import iconSearch from '../../assets/search-bar/ic_Search.png';
import { searchLabel } from './search.label';

/**
 * @returns {*}
 * @constructor
 */
const Search = () => {

    const navigate = useNavigate();
    /**
     * 
     */
    const [valueInputSearch, setValueInputSearch] = useState('');

    /**
     * 
     */
    const eventSearch = (event) => {
        event.preventDefault();
        //console.log({valueInputSearch});
        const url = `/items/search=`;
        navigate(url);
    }

    return (
        <React.Fragment>
            <header className='section-search-background'>
                <img src={iconMeLi} alt={searchLabel.altIconMeLi} />
                <form className="section_search_form"  onSubmit={eventSearch}>
                    <input className="section_search_input" type="text" placeholder={searchLabel.labTitleCar}  value={valueInputSearch}  onChange={(event)=> setValueInputSearch(event.target.value)} required />
                    <button className="section_search_button">
                        <img src={iconSearch} alt={searchLabel.altIconSearch} />
                    </button>
                </form>
            </header>
        </React.Fragment>
    )
}
export default Search;