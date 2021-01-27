import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Products from './components/product/Products'

import links from './data/links'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {

  const routeItems = links.map((item, index) => (

    <Route key={index} exact={item.isExact} path={item.link} component={item.component} />


  ))
  return (
    <BrowserRouter>

      <NavBar />

      <div className="container-fluid">



        <Switch>

          {routeItems}

          <Route path="*">
            <Redirect to="/404"></Redirect>
          </Route>
        </Switch>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
