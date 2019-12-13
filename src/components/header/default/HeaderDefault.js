import React, { Component } from 'react';
import './header-default.css';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../../services/auth'

class HeaderDefault extends Component {

    render() {
        return (
            <div>




                <header id="header">
                    <div className="header_box">
                        <div className="imagem">
                            <img src="images/logo.png" alt="" />
                        </div>
                    </div>

                    <nav className="header_menu">

                        <div className="container_menu_principal">
                            <ul>
                                <li>
                                    <Link className="ahover" id="li_border" to="/Login">Crie seu evento</Link>
                                </li>
                                <li>
                                    <Link className="ahover" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="ahover" to="/Login">Eventos gerais</Link>
                                </li>
                                <li>
                                    <Link className="ahover" to="/Login">Meus eventos</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="container_menu_secundario">
                            <ul>
                                <li>
                                    <Link className="ahover" to="/Login">Entre</Link>
                                </li>
                                <span className="span_ou">ou</span>
                                <li>
                                    <Link className="ahover" to="/CadastrarUsuario">Cadastre-se</Link>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </header>







            </div>
        );
    }
}
export default HeaderDefault;