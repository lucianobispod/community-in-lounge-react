import React, { Component } from 'react';
import './usuario-header.css';
import { Link } from 'react-router-dom';
import { isAuthenticated, getUserIdAuthenticated } from '../../../services/auth';
import axios from 'axios';


class HeaderUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {

            },
            id: ''
        }
    }

    logout = () => {
        localStorage.removeItem('usuario-token');
        window.location.reload(false);
    }


    getUsuario = () => {
        axios.get('https://localhost:5001/api/Usuario/Header/' + this.state.id)
            .then(resposta => {
                this.setState({ user: resposta.data })
                console.log(resposta);
            }).catch(error => console.log(error))
    }



    componentDidMount() {

        if (isAuthenticated()) {
            this.setState({ id: getUserIdAuthenticated().id })
            console.log('state ' + this.state.id);
            setTimeout(() => {
                this.getUsuario();
            }, 150);
        }

    }

    render() {
        return (
            <div>

                <header id="usu-header">

                    <div class="usu-header_box">
                        <img class="usu-imagem" src="" alt="" />
                    </div>

                    <nav class="usu-header_menu">

                        <div class="usu-container_menu_principal">
                            <ul className='usu-lista'>
                                <li>
                                    <Link className="usu-ahover" id="li_border" to={'/Evento'}>Crie seu evento</Link>
                                </li>
                                <li>
                                    <Link className="usu-ahover" to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link className="usu-ahover" to={'/EventosGerais'}>Eventos gerais</Link>
                                </li>
                                <li>
                                    <Link className="usu-ahover" to={'/Meuseventos'}>Meus eventos</Link>
                                </li>

                            </ul>
                        </div>


                        <div class="usu-menu_info ">

                            <div class="usu-dropdown">

                                <div class="usu-info_usuario">
                                    <div>
                                        <img class="usu-foto" src={'http://localhost:5000/' + this.state.user.foto} />
                                    </div>

                                    <div class="usu-nome-usuario">
                                        {this.state.user.nome}
                                    </div>
                                </div>
                                
                                <div class="usu-dropdown-content">
                                    <Link className='usu-link' to={'/MeuPerfil'}>Ver perfil</Link>
                                    <Link className='usu-link' onClick={i => this.logout(i)} >Sair</Link>
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