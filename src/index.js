import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//mdb
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MeusEventos from './pages/MeusEventos/MeusEventos';
import GerenciarEventos from './pages/GerenciarEventos/GerenciarEventos';
import Perfil from './pages/perfil/Perfil';

//rotas
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Meuseventos" component={MeusEventos} />
                <Route path="/GerenciarEventos" component={GerenciarEventos} />
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
