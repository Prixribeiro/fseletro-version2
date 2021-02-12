import {Switch, Route} from 'react-router-dom';
import Produtos from './Pages/Produtos';
import Pedidos from './Pages/Pedidos';
import Lojas from './Pages/Lojas';
import Contato from './Pages/Contato';
import Home from './Pages/Home';



function Rotas(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/contato" component={Contato} />
        </Switch>
    )
}

export default Rotas;