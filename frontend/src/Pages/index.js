import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
        <div>
            <h2> Seja Bem-vindx!</h2>
            <hr></hr>
            <p>Aqui em nossa loja, <b>programadores tem desconto </b> nos produtos para sua casa!</p>  
            <br></br>

            <h3>O que você procura hoje? :)</h3>
            <li>
                <ul>Fogões</ul>
                <ul>Geladeiras</ul>
                <ul>Lava Louças</ul>
                <ul>Máquinas de Lavar</ul>
                <ul>Microondas</ul>
            </li>
        </div>
    );
  }
}