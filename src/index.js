import React from 'react';
import ReactDOM from 'react-dom';

//mdb
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//pages
import Evento from '../src/pages/evento/Evento';
import EventosGerais from './pages/EventosGerais/EventosGerais';
import DescricaoEventoUsuario from './pages/descricaoEventoUsuario/DescricaoEventoUsuario';
import DescricaoEventoAdm from './pages/descricaoEventoAdm/DescricaoEventoAdm';
import Perfil from './pages/perfil/Perfil';
import NotFound from './pages/NotFound';
import MeusEventos from './pages/MeusEventos/MeusEventos';
import GerenciarEventos from './pages/GerenciarEventos/GerenciarEventos';
import Categoria from './pages/categoria/Categoria';
import CadastrarUsuario from './pages/cadastrar_usuario/CadastrarUsuario';
import TornarAdministrador from './pages/tornar_administrador/TornarAdministrador';
import EventosAprovados from './pages/eventos_aprovados/EventosAprovados';
import Home from './pages/home/Home';
import CadastrarComunidade from './pages/cadastrar_comunidade/CadastrarComunidade';
import Login from './pages/login/Login';
import EsqueceuSenha from './pages/esqueceu-senha/EsqueceuSenha';
import Sobre_nosso_espaco from './pages/sobre_nosso_espaco/sobreNossoEspaco';


//rotas
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import { isAuthenticated, parseToken } from './services/auth';



const Administrador = ({ component: Component }) => (
    <Route
        render={props =>
            isAuthenticated() && parseToken().Roles === 'Administrador' ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathame: '/' }} />
                )
        }
    />
)

const Usuario = ({ component: Component }) => (
    <Route
        render={props =>
            isAuthenticated() && parseToken().Roles === 'Comunidade' ? (
                <Component {...props} />
            ) : isAuthenticated() && parseToken().Roles === 'Funcionario' ? (
                <Component {...props} />
            ) : isAuthenticated() && parseToken().Roles === 'Administrador' ? (
                <Component {...props} />
            ) : (
                            <Redirect to={{ pathname: '/' }} />
                        )
        }
    />
)






const Rotas = (
    <Router>
        <div>
            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/EsqueceuSenha" component={EsqueceuSenha} />
                <Usuario exact path="/Meuseventos" component={MeusEventos} />
                <Usuario exact path="/Evento" component={Evento} />
                <Administrador path="/DescricaoEventoAdm" component={DescricaoEventoAdm} />
                <Route exact path="/Descricao" component={DescricaoEventoUsuario} />
                <Route exact path="/EventosGerais" component={EventosGerais} />
                <Usuario exact path="/MeuPerfil" component={Perfil} />
                <Route exact path='/Categoria' component={Categoria} />
                <Administrador exact path="/GerenciarEventos" component={GerenciarEventos} />
                <Route exact path="/CadastrarUsuario" component={CadastrarUsuario} />
                <Route exact path="/CadastrarComunidade" component={CadastrarComunidade} />
                <Administrador exact path="/TornarAdministrador" component={TornarAdministrador} />
                <Administrador exact path="/EventosAprovados" component={EventosAprovados} />
                <Route exact path="/SobreNos" component={Sobre_nosso_espaco}/>
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
