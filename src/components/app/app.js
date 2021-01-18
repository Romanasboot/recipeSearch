import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Search from '../search/search';
//import Main from '../main/main';

class App extends Component{
    render (){

        return(
            <Container>
                    <div className="app">
                        <Search/>
                    </div>
            </Container>
            )
    }



}
export default App;
