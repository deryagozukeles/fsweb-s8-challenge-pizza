import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logoFooter from "../../images/iteration-2-images/footer/logo-footer.svg";
import Icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import Icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import Icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import li0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import li1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import li2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import li3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import li4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import li5 from "../../images/iteration-2-images/footer/insta/li-5.png";

const iletisimIcons = [
  { id: 1, name: "341 Londondery Road, İstanbul Türkiye", icon: Icon1 },
  { id: 2, name: "aciktim@teknolojikyemekler.com", icon: Icon2 },
  { id: 3, name: "+90 216 123 45 67", icon: Icon3 }
];

const instaImg = [li0, li1, li2, li3, li4, li5];

const menuler = [
  { id: 1, name: "TerminalPizza" },
  { id: 2, name: "5 Kişilik Hackatlon Pizza" },
  { id: 3, name: "useEffect Tavuklu Pizza" },
  { id: 4, name: "Beyaz Constol Frozty" },
  { id: 5, name: "Testler Geçti Mutlu Burger" },
  { id: 6, name: "Position Absolute Acı Burger" }
];

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row className="mb-4">
         
          <Col md="4">
            <img src={logoFooter} alt="logo" className="mb-3" />
            {iletisimIcons.map((item) => (
              <p className="iletisim-container d-flex align-items-center" key={item.id}>
                <img src={item.icon} alt="icon" className="me-2" />
                {item.name}
              </p>
            ))}
          </Col>

         
          <Col md="4">
            <h3 className="mb-3">Sıcacık Menüler</h3>
            {menuler.map((menu) => (
              <p className="menu-container mb-2" key={menu.id}>
                {menu.name}
              </p>
            ))}
          </Col>
          <Col md="4" className="ms-auto">
  <h5 className="mb-3">Instagram</h5>
  <Row className="gx-1 gy-1">
    {instaImg.map((image, index) => (
      <Col xs="4" key={index} className="text-end">
        <img
          src={image}
          alt={`insta-${index}`}
          className="img-fluid rounded insta-img"
        />
      </Col>
    ))}
  </Row>
</Col>

        </Row>
        <Row>
          <Col className="text-center">
            <p className="mt-3">© 2025 Teknolojik Yemekler</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
