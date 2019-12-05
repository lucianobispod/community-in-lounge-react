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
import Categoria from './pages/categoria/Categoria';


//rotas
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import Login from './pages/login/Login';
import { usuarioAutenticado, parseJwt } from './services/auth';



const Administrador = ({ component: Component }) => (
    <Route
        render={props =>
            usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathame: 'Login' }} />
                )
        }
    />
)

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Administrador path='/NotFound' component={NotFound} />
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path='/categoria' component={Categoria}/>

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
