import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Component} from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader';

class Product extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  <Card style={{ width: '18rem' }}>
    <CardHeader>
        <Card.Img src={"../assets/images/"+this.props.product.img}/>
        </CardHeader>
        <Card.Body>
          <Card.Title>{this.props.product.name}</Card.Title>
          <Card.Text>
   {this.props.product.description} <br></br>
   {this.props.product.price}dt
          </Card.Text>
          <Button variant="primary">Like {this.props.product.like}</Button>
        </Card.Body>
      </Card>);
    }
}
 
export default Product ;