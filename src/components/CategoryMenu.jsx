import React from "react";
import { Container, Row, Col } from "reactstrap";
import koreIcon from "../../images/iteration-2-images/icons/1.svg";
import pizzaIcon from "../../images/iteration-2-images/icons/2.svg";
import burgerIcon from "../../images/iteration-2-images/icons/3.svg";
import friesIcon from "../../images/iteration-2-images/icons/4.svg";
import fastfoodIcon from "../../images/iteration-2-images/icons/5.svg";
import drinkIcon from "../../images/iteration-2-images/icons/6.svg";
import "../index.css";

const categories = [
  { id: 1, name: "YENİ! Kore", icon: koreIcon },
  { id: 2, name: "Pizza", icon: pizzaIcon },
  { id: 3, name: "Burger", icon: burgerIcon },
  { id: 4, name: "Kızartmalar", icon: friesIcon },
  { id: 5, name: "Fast food", icon: fastfoodIcon },
  { id: 6, name: "Gazlı İçecek", icon: drinkIcon },
];

function CategoryMenu() {
  return (
    <div className="category-menu bg-white">
      <Container className="category-container">
        {categories.map((cat) => (
          <div key={cat.id} className="category-item text-center">
            <img
              src={cat.icon}
              alt={cat.name}
              className="category-icon mb-2"
            />
            <p className="mb-0">{cat.name}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default CategoryMenu;
