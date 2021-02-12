import React from 'react';
import { ListGroup, ListGroupItem, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Lista = (props) => {
  return (
      
    <ListGroup className="bg-light">
    <h3>O que você procura hoje? :)</h3>
      <ListGroupItem tag="Produtos" as={Link} href="/produtos" to="/produtos"className="text-body bg-light">Fogões<Badge className= "text-danger"> 2</Badge></ListGroupItem>
      <ListGroupItem tag="Produtos" as={Link} href="/produtos" to="/produtos" className="text-body bg-light">Geladeiras<Badge className= "text-danger">3</Badge></ListGroupItem>
      <ListGroupItem tag="Produtos" as={Link} href="/produtos" to="/produtos" className="text-body bg-light">Lava Louças<Badge className= "text-danger">2</Badge></ListGroupItem>
      <ListGroupItem tag="Produtos" as={Link} href="/produtos" to="/produtos"className="text-body bg-light">Máquinas de Lavar<Badge className= "text-danger">2</Badge></ListGroupItem>
      <ListGroupItem tag="Produtos" as={Link} href="/produtos" to="/produtos"className="text-body bg-light">Microondas<Badge className= "text-danger">3</Badge></ListGroupItem>
      
      
      
    </ListGroup>
  );
}

export default Lista;