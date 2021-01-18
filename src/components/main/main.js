import "./main.scss";
import { Component } from "react";
//import Search from "../search/search";

class Main extends Component{
    constructor(){
        super();
        this.state={
            query:null,
            result:{},
            favRecipes:[]
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    // async recipeSearch(){
    //     let validQuery = this.state.query;
    //     const result=await fetch("http://www.recipepuppy.com/api/?q="+validQuery);
    //     if (!result.ok){
    //         throw new Error('Nepavyko rasti..')
    //     }
    //     console.log(result.json);
    //     return await result.json();
    // }

    // <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

}
export default Main;