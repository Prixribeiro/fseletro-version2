import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './footer.css';
import email from '../Footer/email.png';
import wpp from '../Footer/whatsapp.png';

function Footer () {
    return (
        <Container fluid className="position-relative fixed-bottom">
            <Row>
            <Col className="col-md-9">
                <img src={email} alt="Email"  className="email" />
                contato@fullstackeletro.com.br 
            </Col>
            <Col className=" col-md-3">
                <img src={wpp} alt="WhatsApp"  className="wpp" />
                (11) 94786-0000
            </Col>
            <hr></hr>
            </Row> 
                <p className="text-center bg-light">FullStack Eletro 2020 &copy; Priscila Ribeiro</p>
        </Container>
    );
}
export default Footer;