import React, { Component } from 'react';
import './header-default.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imagens/logo.png'

class HeaderDefault extends Component {

    render() {
        return (
            <div>




                <header id="de-header">

                    <div className="de-header_box">
                        <Link to={{
                            pathname: "/"
                        }}>
                            <img className="ad-imagem" src={logo} alt="" />
                        </Link>
                    </div>

                    <nav className="de-header_menu">

                        <div className="de-container_menu_principal">
                            <ul>
                                <li>
                                    <Link className="de-ahover" id="de-li_border" to="/Login">Crie seu evento</Link>
                                </li>
                                <li>
                                    <Link className="de-ahover" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="de-ahover" to="/EventosGerais">Eventos gerais</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="de-container_menu_secundario">
                            <ul>
                                <li>
                                    <Link className="de-ahover" to="/Login">Entre</Link>
                                </li>
                                <span className="de-span_ou">ou</span>
                                <li>
                                    <Link className="de-ahover" to="/CadastrarUsuario">Cadastre-se</Link>
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