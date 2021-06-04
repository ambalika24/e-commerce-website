import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className="header">
          <img 
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /> 
         <div
          className="header_search">
             <input className="header_searchInput" type="text" />
             <SearchIcon className ="header_SearchIcon" />
         </div>
         <div className="header_nav">
             
         <div className="header_option">
         <span className="header_optionLineOne">Hello Guest</span>  
         <span className="header_optionLineTwo">Sign In</span> 
         </div>
         <div className="header_option">
         <span className="header_optionLineOne">Returns</span> 
         <span className="header_optionLineTwo"> & Orders</span> 
         </div>
         <div className="header_option">
         <span className="header_optionLineOne">Your</span> 
         <span className="header_optionLineTwo">Prime</span> 
         </div>
         <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
         </div>
        </div>
    );
}

export default Header