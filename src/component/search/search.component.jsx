import React from 'react';
import '../search/search.component.style.css';

export const SearchBar=({placeholder,HandleChange})=>(
     <div>
         <input 
      className="search"  
      type="search"
      placeholder={placeholder}
      onChange={HandleChange}
      />
    </div>
)