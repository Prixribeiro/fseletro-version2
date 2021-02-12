import Rotas from './rotas';
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import {lazy, Suspense} from 'react';


//const Slogan = lazy(() => import('./Slogan'));
const Menu = lazy(() => import ('./Components/Menu/menu'));
const Footer = lazy(() => import ('./Components/Footer/footer'));



function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <header>
          <Suspense fallback ={<p>Aguarde um instante...</p>}>
            <Menu />
          </Suspense>
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <footer>
          <Suspense fallback = {<p>Carregando ...</p>}>
            <Footer />
          </Suspense>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
