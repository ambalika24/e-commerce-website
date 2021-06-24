import React, { useEffect } from "react";
import './App.css';
import Header from './Header'; 
import Home from './Home'; 
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import Sell from "./Sell";
import Info_1 from "./Info_1";
import Info_2 from "./Info_2";
import Info_3 from "./Info_3";

const promise=loadStripe("pk_test_51IzPjPSD2dEbAJI2FNUt6CrfuVzbccU7LewhuH9SWFDzFFxBTLNYEJ0eVPtMr2iF043glFnWllmitRb1FW0zDQ6800Blte9uYF"
  );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER', 
          user: authUser
        })
      } else {
        //the user is logged out

        dispatch({
          type: 'SET_USER', 
          user: null
        })
      }
    })

  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/info_3">
          <Header/>
          <Info_3/>
        </Route>
        <Route path="/info_2">
          <Header/>
          <Info_2/>
        </Route>
        <Route path="/info_1">
          <Header/>
          <Info_1/>
        </Route>
        <Route path="/sell">
          <Header/>
          <Sell />
        </Route>

        <Route path="/login">
          <Login />
          
        </Route>
        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
           <Header />
          <Elements stripe={promise}>
          < Payment />
          </Elements>
        </Route>
        <Route path="/">
        <Header/>
          <Home />
        </Route>
      </Switch>
    
    </div>
    </Router>
    
  );
}

export default App;
