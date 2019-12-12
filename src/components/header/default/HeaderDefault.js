import React, { Component } from 'react';
import './default.css';
import { Link } from 'react-router-dom';

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
                                    <a className="ahover" id="li_border" href="#">Crie seu evento</a>
                                </li>
                                <li>
                                    <a className="ahover" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="ahover" href="#">Sobre nós</a>
                                </li>
                                <li>
                                    <a className="ahover" href="meus-eventos.html">Eventos</a>
                                </li>

                            </ul>
                        </div>

                        <div className="container_menu_secundario">
                            <ul>
                                <li>
                                    {/* <a className="ahover" href=""></a> */}
                                    <Link className="ahover" to="/Login">Entre</Link>
                                </li>
                                <span className="span_ou">ou</span>
                                <li>
                                    <a className="ahover" href="#">Cadastre-se</a>
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