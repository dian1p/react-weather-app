import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Search() {
    return (
       <div class="frame">
           <form id="signup-form">
               <input
                class="col-4"
                type="text"
                placeholder="search city"
                id="city-input"
                autocomplete="off"
               />
               <button type="submit">
               <FontAwesomeIcon icon={faSearch} />
               </button>
               <button type="submit">
               <FontAwesomeIcon icon={faMapMarkerAlt} />
               </button>
           </form>
       </div>
    
    )
}
export default Search;