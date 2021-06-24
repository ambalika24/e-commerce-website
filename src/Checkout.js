import React from "react";
import "./Checkout.css";
import { getBasketTotal } from "./reducer";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" 
            src="https://envato-shoebox-0.imgix.net/a3fd/858c-e6ff-4270-8a9f-6104d8849c4e/DSC_9728.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=efd1add3e51bcc55a1df97c6e06da7e0"
            alt=""/>
            <div>
                <h3> Hello, {user?.email}</h3>
                <h2 className="checkout_title">Your shopping Basket</h2>
                {basket.map(item => (
                 <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                 />
                ))}
                {/* CheckoutProduct */}
                {/* CheckoutProduct */}
                {/* CheckoutProduct */}
                {/* CheckoutProduct */}
                
            </div>

        </div>
        <div className="checkout_right">
            <Subtotal />
        

        </div>
       
    </div>

    );
       
    
}

export default Checkout;