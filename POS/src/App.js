import './App.css';
import React from 'react';
import Landing from './landing-page';
import ShoppingCart from './shopping-cart';
import Checkout from './checkout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CustomerEntryForm from './customer-entry-form';
import Login from './login';

function App() {


  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Landing />} /> {} 
        <Route path = "/login" element = {<Login />} />
        <Route path = "/customer-entry-form" element = {<CustomerEntryForm />} />
        <Route path = "/shopping-cart"  element = {<ShoppingCart/>} />
        <Route path = "/checkout"  element = {<Checkout/>} />

      </Routes>
    </Router>
  );
}

export default App;
