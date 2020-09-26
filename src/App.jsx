import React from "react";
import ProductsList from "./components/ProductsList";
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <ProductsList />
      <button id="login">Login</button>
    </>
  );
};

export default App;
