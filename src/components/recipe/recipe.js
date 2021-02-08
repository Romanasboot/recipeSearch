import'./recipe.scss'
import React from 'react';
import {Col, Card, Button, Row} from 'react-bootstrap';

const Recipe =  (props) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body className="">
            <Row className="justify-content-md-center">   
                <Card.Title >
                    Title: {props.name}
                </Card.Title>
            </Row>
            <Row className="justify-content-md-center">
                <Col >
                    <Card.Img src={props.link}/>   
                </Col>
            </Row>
            <Row className="justify-content-md-center">   
                <Card.Text>
                    Ingredients: {props.ingredients}
                </Card.Text>
            </Row>
            <Row className="cardBottom">
                <Col md={{ span: 3, offset: 1 }}>
                    <Button onClick = {props.clicked} variant="btn btn-primary">{props.btnLabel}</Button>
                </Col>
            </Row>
        </Card.Body> 
        </Card>
    )
}

export default Recipe;