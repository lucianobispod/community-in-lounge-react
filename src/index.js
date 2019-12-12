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
import NotFound from './pages/NotFound';
import MeusEventos from './pages/MeusEventos/MeusEventos';
import GerenciarEventos from './pages/GerenciarEventos/GerenciarEventos';
import Perfil from './pages/perfil/Perfil';
import Categoria from './pages/categoria/Categoria';
//rotas
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import Login from './pages/login/Login';
import { isAuthenticated, parseToken } from './services/auth';



const Administrador = ({ component: Component }) => (
    <Route
        render={props =>
            isAuthenticated() && parseToken().Roles === 'Administrador' ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathame: '/Login' }} />
                )
        }
    />
)


const Rotas = (
    <Router>
        <div>
            <Switch>
                
                <Route path="/Login" component={Login} />
                <Route path="/Meuseventos" component={MeusEventos} />
                <Administrador path='/Categoria' component={Categoria}/>
                <Administrador path="/GerenciarEventos" component={GerenciarEventos} />
                <Route path="/Perfil" component={Perfil} />
                <Route exact path="/" component={Home} />
                <Route path="/CadastrarComunidade" component={CadastrarComunidade} />
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
