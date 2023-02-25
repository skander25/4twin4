import React from 'react'
import { useParams,Link } from 'react-router-dom';
import {Col,Row, Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import NotFound from './NotFound';


export default function ProductDetails({product}) {
    const params = useParams();
    console.log(product[1])
let identifiant=Number(params.id)
console.log(identifiant)
const prod = product.find((el)=>el.id ==identifiant)
console.log(prod)
  if(prod==null){return (<><NotFound/></>)}
   else{return (
    <Card style={{ width: '35rem' , textAlign:'center'}}>
  <Row>
    <Card.Body>
      
     <Col ><Card.Img variant="top" style={{ height: '25rem' }}

src={require("../assets/images/"+prod.img)}
/></Col><Col >
 <Card.Title>{prod.name}</Card.Title>   </Col >
      <Card.Text>
      {prod.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem><div width='50%'>

 
</div></ListGroupItem>
     
    </ListGroup>
    <Card.Body>
     
    <Link to="/">Home</Link> 
    </Card.Body>





 






 
    </Row>

  </Card>
  
);} 
}
