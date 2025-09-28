import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import koreIcon from "../../images/iteration-2-images/icons/1.svg";
import pizzaIcon from "../../images/iteration-2-images/icons/2.svg";
import burgerIcon from "../../images/iteration-2-images/icons/3.svg";
import friesIcon from "../../images/iteration-2-images/icons/4.svg";
import fastfoodIcon from "../../images/iteration-2-images/icons/5.svg";
import drinkIcon from "../../images/iteration-2-images/icons/6.svg";
import "../index.css";
import Products from "./Products";

const products = [
  { id: 1, name: "Ramen", icon: koreIcon },
  { id: 2, name: "Pizza", icon: pizzaIcon },
  { id: 3, name: "Burger", icon: burgerIcon },
  { id: 4, name: "Frencfries", icon: friesIcon },
  { id: 5, name: "Fast food", icon: fastfoodIcon },
  { id: 6, name: "Soft drinks", icon: drinkIcon },
];

function Product() {
    const [selectedCategory,setSelectedCategory]=useState(null)
  return (
    <div className="product-menu bg-white">
        <div>
            <p className="product-p">en çok paketlenen menüler</p>
            <h1>Acıktıran Kodlara Doyuran Lezetler</h1>
        </div>
      <Container className="product-container">
        {products.map((cat) => (
          <Button key={cat.id} 
          className="product-item border-0 text-center" 
          data-testid={`category-${cat.name.toLowerCase()}`}
          onClick={()=>setSelectedCategory(cat.name)}
          style={{backgroundColor:selectedCategory === cat.name ? "#5F5F5F" : "#faf7f2"
          ,borderRadius: '50px'}}>
            <img
              src={cat.icon}
              alt={cat.name}
              className="product-item-icon mb-2"
            />  
            <span className="product-item-p mb-0">  {cat.name}</span>
          </Button>
        ))}
      </Container>
     {selectedCategory === "Pizza" && <Products />}

    
     
    
    </div>

  );
}

export default Product;
