import {useState, useEffect} from 'react';
import {lazy, Suspense} from 'react'
import {Container, Row} from 'react-bootstrap';

const Produto = lazy(() => import ('../Components/Produto'));

export default function Produtos(){

    const [produtos, setProdutos] = useState ([]);
    
    //eslint-disable-next-line
    useEffect(async () => {
          const resposta = await fetch("http://localhost:8080/produto");
          const dados = await resposta.json();
          setProdutos(dados);
      }, []);


    return(
        <Container>
            <h1 className="text-center">Produtos</h1>
            <hr></hr>
            <Row> 
               <Suspense fallback={<p className="display-4 text-center">Aguarde um instante, os itens estão sendo carregados! :) </p>}>
                    {produtos && produtos.map(item=> <Produto key={item._id} imagem={item.imagem} descricao={item.descricao} precoantigo={item.precoantigo} precoatual={item.precoatual} categoria={item.geladeira} estoque={item.Estoque}/>)}
               </Suspense>
            </Row>
            <hr></hr>
        </Container>
    )};
