import'./service.scss';
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Search from '../search/search';
 
class Service extends Component {
 
    state= {
        recipes: [],
        btnLabel: "Save",
        search: " "
    }
 
    handleSubmit = (e) =>{
        console.log("searchstate value " +this.state.search);
        fetch("http://www.recipepuppy.com/api/?q="+ this.state.search)
        .then(response =>{
            let data = response.data;
            let dishes = data.results;
            this.setState({recipes:dishes})
        })
        console.log(this.state.recipes);
        this.setState( { search: "" });
        e.preventDefault()
    }
 
    handleChange = (e) =>{
        this.setState( { search: e.target.value });
    }
 
    render(){
 
        return (
            <Container>
                <Search 
                value={this.state.search}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                />
            </Container>
        )
    }
}
 
export default Service;