import React from 'react';
import { Container,Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import kart1 from "../../images/iteration-2-images/cta/kart-1.png";
import kart2 from "../../images/iteration-2-images/cta/kart-2.png";
import kart3 from "../../images/iteration-2-images/cta/kart-3.png";
import "../index.css";

function SpecialOffers() {
  return (
    <Container>
      <Row className="my-5">
        <Col md="6" className="d-flex mb-4">
          <Card className="border-0 custom-card">
            <img src={kart1} alt="Pizza" className="card-bg1" />
            <CardBody className="card-overlay">
              <CardTitle tag="h2" className="card-title1"style={{fontSize:"50px"}}>
                Özel <br /> Lezzetus
              </CardTitle>
              <CardText className="card-text">Position:Absolute Acı Burger</CardText>
              <Button className="card-button">Sipariş Ver</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" className="d-flex flex-column">
          <Card className="border-0 custom-card">
            <img src={kart2} alt="Burger" className="card-bg" />
            <CardBody className="card-overlay">
              <CardTitle tag="h2" className="card-title">
                Hackathlon <br /> BurgerMenu
              </CardTitle>
              <Button className="card-button">Sipariş Ver</Button>
            </CardBody>
          </Card>

          <Card className="border-0 custom-card">
            <img src={kart3} alt="Kurye" className="card-bg" />
            <CardBody className="card-overlay">
              <CardTitle tag="h2" className="card-title">
                <span style={{ color: "red" }}>Çooook</span> <span style={{ color: "black" }}>hızlı</span>  <br /> <span style={{ color: "black" }}>npm gibi kurye</span>
              </CardTitle>
              <Button className="card-button">Sipariş Ver</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default SpecialOffers;

