import {Container, Table, Row, Col} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import '../Components/Pedidos/pedidos.css';

function TelaPedidos(props){
    const newLocal = (

    <Container fluid>
                <h2 className="text-center"> Meu Carrinho</h2>
                <hr></hr>
                    <Table className="table table-hover table-condensed">
                                        <tr>
                                            <th className="col-sm-4 text-center">Produto</th>
                                            <th className="col-sm-2 text-center">Preço</th>
                                            <th className="col-sm-3 text-center">Quantidade</th>
                                            <th className="col-sm-3 text-center">Subtotal</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td data-th="Product">
                                                <Row>
                                                    <Col className="col-sm-2 hidden-xs text-center"><img src={require(`../Components/Produto/IMAGENS/geladeira-inox.jpeg`).default} alt="Imagem de Produtos" className="img-responsive"/></Col>
                                                        <p className="text-center"> Geladeira Frost Free Electrolux 433 litros</p>
                                                </Row>
                                            </td>
                                            <td data-th="Price" className="col-sm-2 text-center">R$4830.00</td>
                                            <td data-th="Quantity">
                                                <input type="number" class="form-control text-center col-sm-6" value="1"></input>
                                            </td>
                                            <td data-th="Subtotal" className="col-sm-3 text-center">R$ 4830.00</td>
                                        </tr>



                                        <tr>
                                            <td><a as={Link} href="/produtos" to="/produtos" classname="btn btn-warning"><i class="fa fa-angle-left"></i> Continuar Comprando</a></td>
                                            <td colspan="2" className="hidden-xs"></td>
                                            <td className="hidden-xs text-center text-danger"><strong>Total R$4830.00</strong></td>
                                            <td><a as={Link} href="/" to="/" className="btn btn-success">Finalizar Compra <i className="fa fa-angle-right"></i></a></td>
                                        </tr>
                                </Table>
    </Container>);
    return (
        newLocal

    );
}
const Pedidos = withRouter(TelaPedidos);
export default Pedidos;