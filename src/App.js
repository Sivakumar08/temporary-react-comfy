import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  Private,
  Auth,
} from './pages'
import Login from './components/Login';


function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
      
  }, []);

  return  <Auth>
    <Router>
      <Navbar/>
      <Sidebar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/cart">
        <Cart/>
      </Route >
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/products">
        <Products/>
      </Route>
      <Route exact path="/products/:id" children={ <SingleProduct/>}/>
     
              <Private  exact path='/checkout'>
                <Checkout />
              </Private>
    
      <Route exact path="/error">
        <Error/>
      </Route>
    </Switch>
    <Footer/>
  </Router>
  </Auth>
}

export default App
