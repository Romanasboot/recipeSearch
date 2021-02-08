import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Service from '../service/service';
//import Search from '../search/search';
//import Main from '../main/main';

class App extends Component{
    render (){
        return(
            <Container fluid>
                    <div className="app">
                        <Service/>
                    </div>
            </Container>
            )
    }

}
export default App;
