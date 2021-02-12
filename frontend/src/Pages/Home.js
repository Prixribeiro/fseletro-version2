import React, { Component } from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import Lista from '../Components/Home/lista';

export default class Home extends Component {
    render() {
        return (
        <Jumbotron fluid className="text-center bg-white">
            <Container fluid>
                    <h2 className="display-6"> Seja Bem-vindx!</h2>
                    <hr className="my-4"></hr>
                    <p className="lead">Aqui em nossa loja, <b>programadores tem desconto </b> nos produtos para sua casa!</p>  
                    <br></br>
                     {/* Lista está sendo renderizada em SSR */}
                    <Lista />           
            </Container>
        </Jumbotron>

        ); 
    }
}