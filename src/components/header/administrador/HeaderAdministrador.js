import React, { Component } from 'react';
import './administrador-header.css';
import { Link } from 'react-router-dom';

class HeaderAdministrador extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    logout = () => {
        localStorage.removeItem('usuario-token');
        window.location.reload(false)
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
                                    <a class="ahover" id="li_border" href="#">Crie seu evento</a>
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
                                <li>
                                    <Link className="ahover" to={'/Gerenciareventos'}>Gerenciar eventos</Link>
                                </li>

                            </ul>
                        </div>


                        <div class="menu_info ">

                            <div class=" dropdown">

                                <div class="info_usuario">
                                    <div class="foto"></div>

                                    <div class="nome-usuario">
                                        <p>Administrador</p>
                                    </div>
                                </div>



                                <div class="dropdown-content">
                                    <Link to={'/MeuPerfil'} >Ver perfil</Link>
                                    <Link to={'/Categoria'} >Gerenciar categorias</Link>
                                    <Link to={'/TornarAdministrador'}>Adicionar colaborador</Link>
                                    <Link to={'/EventosAprovados'} >Eventos aprovados por mim</Link>
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

export default HeaderAdministrador;