import'./service.scss';
import React, {Component} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Search from '../search/search';
import Recipe from '../recipe/recipe';

 
class Service extends Component {

    state= {
        recipes: [],
        savedRecipes: [],
        search: " "
    }

    searchBtnHandler = async () =>{
        let response = await axios.get('http://www.recipepuppy.com/api/?q=' + this.state.search)
        let data = response.data;
        let dishes = data.results;
        this.setState({recipes:dishes})
        console.log(this.state.recipes);
        this.setState( { search: "" });
    
    }

    inputChangeHandler = (event) =>{
        this.setState( { search: event.target.value });
    }

    saveRecipeHandler = (index) =>{
        let recipe = this.state.recipes[index]
        let savedRecipes =[...this.state.savedRecipes];
        savedRecipes.push(recipe);
        this.setState({savedRecipes:savedRecipes});
    }

    deleteRecipeHandler = (index) =>{
        let savedRecipes =[...this.state.savedRecipes];
        savedRecipes.splice(index,1);
        this.setState({savedRecipes:savedRecipes});
    }

    render(){

        const recipes = this.state.recipes.map((recipe, index) => 
            <Recipe
                key={{index}*Math.random()}
                name={recipe.title}
                link={recipe.thumbnail}
                ingredients={recipe.ingredients}
                clicked={()=> this.saveRecipeHandler(index)}
                btnLabel="Save"
            />
        )
        const savedRecipes = this.state.savedRecipes.map((recipe, index) => 
            <Recipe
                key={{index}*Math.random()}
                name={recipe.title}
                link={recipe.thumbnail}
                ingredients={recipe.ingredients}
                clicked={()=> this.deleteRecipeHandler(index)}
                btnLabel="Delete"
            />
        )

        return (
            <Container fluid>
                <Search 
                search={this.state.search}
                handleSubmit={this.searchBtnHandler}
                handleChange={this.inputChangeHandler}
                />
                <h5>Search results</h5>
                <div className="row">
                    {recipes}
                </div>
                <h5>Saved recipes</h5>
                <div className="row">
                    {savedRecipes}
                </div>
            </Container>
        )
    }
}

export default Service;