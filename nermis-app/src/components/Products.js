import React from 'react';
import '../App.css'
import {  Card, Col, Row }  from 'react-bootstrap'
import BLhero1 from "../images/BLhero1.png"


const Products = () => {
return (
    <Row xs={1} md={2} className="g-4" 
    >
    {/* <div className="welcome">
        <h1>Welcome to my unique selection of Products</h1>
        </div> */}
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={BLhero1} />
        <Card.Body>
          <Card.Title>Blue Lagoon</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={BLhero1} />
        <Card.Body>
          <Card.Title>Blue </Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={BLhero1} />
        <Card.Body>
          <Card.Title>Green</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    
  
</Row>
)};



export default Products;