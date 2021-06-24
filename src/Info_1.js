import React, { useState } from "react";
import "./Info.css";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";

    const Info_1 = () => {
        const history = useHistory();

        const [fname, setFname] = useState("");
        const [lname, setLname] = useState("");
        const [email, setEmail] = useState("");
        const [contact, setContact] = useState("");
        const [details, setDetails] = useState("");
        const [stock, setStock] = useState("");
        const [address_1, setAddres_1] = useState("");
        const [address_2, setAddress_2] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [pincode, setPincode] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            history.push('/')
            db.collection("retailer_details").add({
                fname:fname,
                lname:lname,
                email:email,
                contact:contact,
                details:details,
                stock:stock,
                address_1:address_1,
                address_2:address_2,
                city:city,
                state:state,
                pincode:pincode,
            })
            .then(() => {
                alert("Your details has been submitted!")
            })
            .catch((error) => {
                alert(error.message);
            });
            setFname('')
            setLname('')
            setEmail('')
            setContact('')
            setDetails('')
            setStock('')
            setAddres_1('')
            setAddress_2('')
            setCity('')
            setState('')
            setPincode('')
        };
        
   
    return(
        <div className="info">
            <Link to="/">
          <img className="login__logo" 
          src=".\6.png" />
        </Link>
        <div className="info__container">
            <h1>Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                <h5>Name</h5>
                <div className="row">
                <input type="text" placeholder="First Name"  value={fname} onChange={(e) => setFname(e.target.value)} required/> &nbsp;&nbsp;
                <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} required/></div>
                <h5>Email</h5>
                <input type="email" placeholder="john@abc.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <h5>Contact Number</h5>
                <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} required/>
                <h5 for="list">Choose Products </h5>
                <select name="choose_product" id="choose_product" multiple>
                    <option value="tablet">Mask</option>
                    <option value="syrup">Sanitizer</option>
                    <option value="powder">Hand Gloves</option>
                    <option value="drink">PPE Kit</option>
                    <option value="cream">Oxymeter</option>
                    <option value="cream">Face Sheild</option>
                </select>
                <h5>Product Details</h5>
                <textarea type="text" placeholder="type details of all the products" value={details} onChange={(e) => setDetails(e.target.value)} required></textarea>
                <h5>Stock Availability</h5>
                <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} required />
                <h5>Address</h5>
                <input type="text" placeholder="Line 1" value={address_1} onChange={(e) => setAddres_1(e.target.value)} required /><br/>
                <input type="text" placeholder="Line 2" value={address_2} onChange={(e) => setAddress_2(e.target.value)}  />
                <h5>City</h5>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                <h5>State</h5>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
                <h5>PIN Code</h5>
                <input type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                <a href="/"><center><button type="submit"
                className="info__signInButton">Done</button></center></a>
            </form>
            <p><input type="checkbox" required/> I agree to StayWell's conditions of use & sale. Please see our Privacy
                Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            

        </div>
        </div>
    );
};

export default Info_1;