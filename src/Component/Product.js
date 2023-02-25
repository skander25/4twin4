import { Component } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {product:this.props?.product,alertVisible:false};
        this.addLike = this.addLike.bind(this);
        this.removeQuantity = this.removeQuantity.bind(this);
        this.handleVisible = this.handleVisible.bind(this);
    }
    addLike() {

        this.setState((oldState)=>({product:{...oldState.product,like:oldState.product.like+1}}));
    }
    removeQuantity() {
        this.setState((oldState)=>({product:{...oldState.product,quantity:oldState.product.quantity-1}}));
        this.handleVisible();
    }
     handleVisible = () => { 
        this.setState({alertVisible:true})
        setTimeout(() => { 
            this.setState({alertVisible:false})
        }, 2000);
    } 

  render() {

    return (
        <>
        <Card className="p-2">




            <Card.Img style={{height:'20rem'}} variant="top" src={require('../../public/assets/images/'+this.props?.product.img)} />
            <Card.Title>{this.props?.product.name}</Card.Title>
            <Card.Body>{this.props?.product.description}</Card.Body>
            <Card.Body>{this.props?.product.price}DT</Card.Body>
            <Row><Col><Button variant="info" onClick={this.addLike}>Like👌</Button></Col> <Col><small>{this.state?.product.like}</small></Col></Row>
            <br/>
            <Row><Col><Button variant="outline-dark" onClick={this.removeQuantity} disabled={this.state?.product.quantity===0}>Buy🤑</Button></Col><Col> <small>{this.state?.product.quantity}</small></Col></Row>

            </Card>
              <Alert variant="primary" show={this.state?.alertVisible}  >You bought an Item</Alert>
              </>

    )
  }
}