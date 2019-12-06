import React, { Component } from 'react';
import './default.css'

class HeaderDefault extends Component {

    
    render() {
        return (
            <div>
                <header id="header">
                    <div class="header_box">
                        <div class="imagem">
                            <img src="images/logo.png" alt=""/>
                        </div>
                    </div>

                        <nav class="header_menu">

                            <div class="container_menu_principal">
                                <ul>
                                    <li>
                                        <a class="ahover" id="li_border" href="#">Crie seu evento</a>
                                    </li>
                                    <li>
                                        <a class="ahover" href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a class="ahover" href="#">Sobre nós</a>
                                    </li>
                                    <li>
                                        <a class="ahover" href="meus-eventos.html">Eventos</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="container_menu_secundario">
                                <ul>
                                    <li>
                                        <a class="ahover" href="login.html">Entre</a>
                                    </li>
                                    <span class="span_ou">ou</span>
                                    <li>
                                        <a class="ahover" href="#">Cadastre-se</a>
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