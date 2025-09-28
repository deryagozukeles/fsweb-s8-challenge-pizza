import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import banner from "../../images/iteration-1-images/home-banner.png";
import logo from "../../images/iteration-1-images/logo.svg";
import "../index.css";
import CategoryMenu from "./CategoryMenu";

function Header() {
  return (
    <>
    <div className="home-container position-relative text-center text-white">
      <img className="home-banner w-100" src={banner} alt="banner" />
      <Container className="title-banner position-absolute top-50 start-50 translate-middle">
        <Row>
          <Col>
            <img className="logo mb-3" src={logo} alt="logo" />
            <p>
              <span className="yazi">fırsatı kaçırma</span>
            </p>
            <h1 className="title-container">
              KOD ACIKTIRIR <br /> PIZZA, DOYURUR
            </h1>

            <Link to="/siparis">
              <Button color="warning" className="order-button mt-3">
                ACIKTIM
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <CategoryMenu/>
    </>
  );
}

export default Header;
