import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projetos from './components/pages/Projetos'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sobre">
            <Sobre />
          </Route>
          <Route exact path="/contato">
            <Contato />
          </Route>
          <Route exact path="/novoprojeto">
            <NovoProjeto />
          </Route>
          <Route exact path="/projetos">
            <Projetos />
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
