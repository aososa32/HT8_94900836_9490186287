import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CategorySelector from "./CategorySelector";
import ProductList from "./ProductList";
import { categories, products } from "./data";
import './App.css';
import logo from './logo.svg';



function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="App">
      <header className="App-header" >
      <Header title="Catálogo de Productos"/>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container mt-4">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductList
          category={selectedCategory}
          products={products[selectedCategory]}
        />
      </div>
      <Footer />
      
    
        

      </header>
      </div>
      

      
  );
}

export default App;
