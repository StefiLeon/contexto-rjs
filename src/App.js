import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Carousel } from "react-bootstrap";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Carousel variant="light">
        <Carousel.Item>
          <Carousel.Caption style={{paddingBottom:"10rem"}}>
            <h1>Tienda FutFem</h1>
            <p style={{textShadow:"1px 1px black"}}>Tus futbolistas preferidas tienen sus productos. ¡Elegí el tuyo!</p>
          </Carousel.Caption>
          <img
          style={{height:"25rem", objectFit:"cover"}}
          className="d-block w-100"
          src="https://www.futbolfemeninoargentino.com.ar/img/Cuadro_Panamericanos.jpg"
          alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <h2 style={{paddingTop:"3rem"}}>Productos</h2>
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/Item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
