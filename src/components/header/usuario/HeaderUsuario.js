import React, { Component } from 'react';
import './usuario-header.css';
import { Link } from 'react-router-dom';

class HeaderUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    logout = () => {
        localStorage.removeItem('usuario-token');
        window.location.reload(false);
    }

    render() {
        return (
            <div>

                <header id="header">
                    <div class="header_box">
                        <div class="imagem">
                            <img src="images/logo.png" alt="" />
                        </div>
                    </div>

                    <nav class="header_menu">

                        <div class="container_menu_principal">
                            <ul>
                                <li>
                                    <Link className="ahover" id="li_border" href="#">Crie seu evento</Link>
                                </li>
                                <li>
                                    <Link className="ahover" to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link className="ahover" to={'#'}>Eventos gerais</Link>
                                </li>
                                <li>
                                    <Link className="ahover" to={'/Meuseventos'}>Meus eventos</Link>
                                </li>

                            </ul>
                        </div>


                        <div class="menu_info ">

                            <div class=" dropdown">

                                <div class="info_usuario">
                                    <div class="foto"></div>

                                    <div class="nome-usuario">
                                        <p>Luciano Bispo</p>
                                    </div>
                                </div>



                                <div class="dropdown-content">
                                    <Link to={''}>Ver perfil</Link>
                                    <button type="submit" onClick={i => this.logout(i)} >Sair</button>
                                </div>
                            </div>

                        </div>
                    </nav>
                </header>




            </div>
        );
    }
}
export default HeaderUsuario;