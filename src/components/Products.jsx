import React from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, Button, CardText } from 'reactstrap';
import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";
import "../index.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const products = [
  { id: 1, name: "Terminal Pizza", img: food1,price:80,score:4.9,count:200 },
  { id: 2, name: "Position Absolute Acı Pizza", img:food2,price:85,score:4.9,count:928 },
  { id: 3, name: "useEffect Tavuklu Burger", img: food3,price:75,score:4.9,count:462  },
];

function Products() {
    const history=useHistory();
    function handleSelect(product){
        history.push("/siparis",product);

    }
  return (
    <Row className="my-5">
      {products.map((p) => (
        <Col md="4" key={p.id} className="mb-4">
          <Card className='border-0'
           onClick={() => handleSelect(p)} style={{ cursor: "pointer" }}
           >
            <CardImg top src={p.img} alt={p.name} />
            <CardBody>
              <CardTitle tag="h5">{p.name}</CardTitle>
              <CardText>
                <p className='products-text'><span>{p.score}</span> <span>({p.count})</span> <span style={{color:"black",fontSize:"30px",fontWeight:"bold"}}>{p.price}₺</span></p>

              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;
