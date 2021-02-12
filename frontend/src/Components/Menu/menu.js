import {Navbar, Nav, NavItem, NavLink} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import logo from './logo.png';
import './Menu.css';

function BaseMenu(props){
    const {location} = props
    return (
        <Navbar className="navbar" expand="lg" fixed="top">
            <Navbar.Brand>
                <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <NavItem>
                        <NavLink as={Link} href="/" to="/">Página Inicial</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  as={Link} href="/produtos" to="/produtos">Produtos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  as={Link} href="/lojas" to="/lojas">Nossas Lojas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  as={Link} href="/contato" to="/contato">Contato</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  as={Link} href="/pedidos" to="/pedidos">Meu Carrinho</NavLink>
                    </NavItem>
                    

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);
export default Menu