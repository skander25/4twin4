import { Component } from "react";
import Product from "./Product";
import Prods from "../products.json"
import { Alert, Col, Container, Row } from "react-bootstrap";

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state ={alertVisible:false}
        this.handleVisible = this.handleVisible.bind(this);
    }
    handleVisible = () => { 
        this.setState({alertVisible:true})
        setTimeout(() => { 
            this.setState({alertVisible:false})
        }, 3000);
    } 
    componentDidMount() {
    this.handleVisible();
    }
  render() {
    return (
      <Container >
<Alert variant="success"  show={this.state?.alertVisible}><Alert.Heading>Hey, Welcome To Our Shop <strong>MyStore</strong></Alert.Heading>
<p>Thank you for choosing our store, we hope you enjoy your shopping experience!</p></Alert>
        <Row className="mt-5">
        {Prods.map((prod,i) => (<Col key={i}><Product  product={prod}></Product></Col>))}
        </Row>
      </Container>
    )
  }
}