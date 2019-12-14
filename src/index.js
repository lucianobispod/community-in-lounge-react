import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//mdb
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//pages
import Home from './pages/home/Home';
import CadastrarComunidade from './pages/cadastrar_comunidade/CadastrarComunidade';
import DescricaoEventoAdm from './pages/descricaoEventoAdm/DescricaoEventoAdm';
import Perfil from './pages/perfil/Perfil';
import NotFound from './pages/NotFound';

//rotas
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/CadastrarComunidade" component={CadastrarComunidade} />
                <Route path="/Descricao" component={DescricaoEventoAdm} />
                <Route path="/Perfil" component={Perfil} />              
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
