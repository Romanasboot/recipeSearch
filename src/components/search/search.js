import './search.scss';
import React from 'react';
import {Container, Col, Form, FormGroup, FormLabel, FormControl, Button, Row} from 'react-bootstrap';


const Search = (props) => {
               
        return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <h2>Receptų paieška</h2>
            </Row>
            <Row>
            <Col md-6>
            <Form onSubmit={props.handleSubmit}>
                <FormGroup>
                    <FormLabel>Receptų pagal turimus ingredientus paieška:</FormLabel>
                    <FormControl type="text"
                    value={props.search}
                    onChange={props.handleChange}
                    placeholder="Įveskite kokį produktą turite... pvz eggs " />
                </FormGroup>
                
                <Button variant="primary" type="submit" id="btnsubmit">
                    Ieškoti
                </Button>
            </Form>
            </Col>
            <Col md-6>
            <Form inline >
                <FormControl type="text" value={props.search} onChange={props.handleChange} placeholder="Search" className=" mr-sm-2" />
                <Button onClick={props.handleClick} variant="primary">Ieskoti</Button>
            </Form>
            </Col>
            </Row>
        </Container>
        );
}
export default Search;