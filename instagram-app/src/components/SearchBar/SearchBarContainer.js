import React from 'react';
import './SearchBar.css';

const SearchBar = () => 
  (
    <div className="nav-container">
       <div className="image-logo"></div>
        <input className="navigation-search" type="text" placeholder="Search" />
        <div className="menu-container">
          <div className="compass"></div>
          <div className="heart"></div>
          <div className="person"></div>
        </div>
    </div>
  );

export default SearchBar;