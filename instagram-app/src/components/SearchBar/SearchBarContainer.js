import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchProperty, logMeOutProperty, seeOnlyHeartedPostsProperty, seeAllPostsProperty}) => 
  (
    <div className="nav-container">
       <div className="image-logo"></div>
        <input className="navigation-search" onKeyPress={searchProperty} type="text" placeholder="Search" />
        <div className="menu-container">
          <div className="compass" onClick={seeAllPostsProperty}></div>
          <div className="heart" onClick={seeOnlyHeartedPostsProperty}></div>
          <div className="person" onClick={logMeOutProperty}></div>
        </div>
    </div>
  );

export default SearchBar;