import React from "react";
import "./Sell.css";
import fill_form from "./Info_1.js";


import { useStateValue } from "./StateProvider";


function Sell(){
    const [{ user }, dispatch] = useStateValue();
    return(
        
        <div>
            <div className="bg-area"></div>
        <div className="bg-area layer-2"></div>
        <div className="bg-area layer-3"></div>
        <div className="bg-area layer-4"></div>
        <div className="grid-container">

            <div className="grid-1">
               <h2>Hello, {!user? 'Retailer' : user.email} </h2>
                
                <p><span>HAKUNA MATATA!</span><br />Stay home safely, no need to worry about your shops. Focus on the things you love and let us handle the rest. <br />Selling with <b><i>Stay Well</i></b> is easier, faster and more scalable. Just Sell more :) </p>
                <h5>"Goods are displayed by thousands of shopkeepers with a sense of beauty that finds no other outlet"</h5>
                <h6>CLICK ON THE IMAGES TO SELL YOUR PRODUCTS </h6>
            </div>

            <div className="grid-2">

                    <div className="row-1">
                    <div className="box"><img src=".\1.jpg" />
                    <div className="detail">
                        <h1>Covid Protectives</h1>
                        <a href="/info_1" ><button className="btn">ADD</button></a>
                    </div>
                    </div>

                    <div className="box"><img src=".\image-2.jpg" alt="image" />
                    <div className="detail">
                        <h1>Pharmacy Products</h1>
                        <a href="/info_2"><button className="btn">ADD</button></a>
                    </div>
                    </div>
                    </div>
                   
                    <div className="row-2 ">
                        <div className="box"><img src=".\image-3" />
                    <div className="detail">
                        <h1>Household Products</h1>
                        <a href="/info_3" ><button className="btn">ADD</button></a>
                    </div>
                    </div>
                    </div>
            </div>
        
        </div>
        </div>
    );
}
export default Sell;