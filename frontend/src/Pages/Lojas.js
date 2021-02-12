import {Container, Row, Col} from 'react-bootstrap';

function Lojas(){
    const newLocal = (
        <Container fluid>
            <h1 className="text-center">Nossas Lojas</h1>
            <hr></hr>
            <Row>
                <Col className="Col text-danger">São Paulo </Col>
                <Col className="text-body">Avenida Paulista, 287 </Col>
                <Col className="text-body">12 &ordm; andar </Col>
                <Col className="text-body">Bela Vista</Col>
                <Col className="text-body">(11) 4781-0000 </Col>
            </Row>
            <Row>
                <Col className="col text-danger">Rio de Janeiro</Col>
                <Col className="text-body">Avenida Presidente Vargas, 50</Col>
                <Col className="text-body">10 &ordm; andar</Col>
                <Col className="text-body">Centro</Col>
                <Col className="text-body">(21) 3344-0000</Col>
            </Row>
            <Row>
                <Col className="col text-danger">Porto Alegre</Col>
                <Col className="text-body">Avenida Brasil, 400</Col>
                <Col className="text-body">5 &ordm; andar</Col>
                <Col className="text-body">Centro</Col>
                <Col className="text-body">(51) 2222-0000</Col>
            </Row>
            <hr></hr>
        </Container>);
    return (
        newLocal

    );
}

export default Lojas;