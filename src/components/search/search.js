import './search.scss';
import { Component } from 'react';
import {Container, Col, Form, FormGroup, FormLabel, FormControl, Button, Row} from 'react-bootstrap';


class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            query:''
        };
        
        
    }
        handleChange = (e)=>{
            console.log(e.target.value);
            this.setState({text: e.target.value});
        };
        handleSubmit =(e)=>{
            e.preventDefault();
            //this.props.SearchQuery(this.state.text);
            console.log('ieskosim: '+this.state.text);
            let query= this.state.text;
            console.log('query bus toks: '+query);
        };
    
    render() {
        return (
        <Container>
            <Row className="justify-content-md-center">
                <h2>Receptų paieška</h2>
            </Row>
            <Row>
            <Col md-6>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormLabel>Receptų pagal turimus ingredientus paieška:</FormLabel>
                    <FormControl type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Įveskite kokį produktą turite... pvz eggs " />
                </FormGroup>
                
                <Button variant="primary" type="submit" id="btnsubmit">
                    Ieškoti
                </Button>
                
            </Form>
            </Col>
            </Row>
        </Container>
        );
    }
}
export default Search;