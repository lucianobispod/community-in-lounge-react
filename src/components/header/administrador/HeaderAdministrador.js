import React, { Component } from 'react';
import './administrador-header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated, getUserIdAuthenticated } from '../../../services/auth';

class HeaderAdministrador extends Component {
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
        window.location.reload(false)
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
            }, 250);
        }

    }

    render() {
        return (
            <div>
                <header id="ad-header">
                    <div class="ad-header_box">
                        <img className="ad-imagem" src="" alt="" />
                    </div>

                    <nav class="ad-header_menu">

                        <div class="ad-container_menu_principal">
                            <ul>
                                <li>
                                    <Link className="ad-ahover" id="ad-li_border" href="#">Crie seu evento</Link>
                                </li>
                                <li>
                                    <Link className="ad-ahover" to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link className="ad-ahover" to={'/EventosGerais'}>Eventos gerais</Link>
                                </li>
                                <li>
                                    <Link className="ad-ahover" to={'/Meuseventos'}>Meus eventos</Link>
                                </li>
                                <li>
                                    <Link className="ad-ahover" to={'/Gerenciareventos'}>Gerenciar eventos</Link>
                                </li>

                            </ul>
                        </div>


                        <div className="ad-menu_info ">

                            <div className="ad-dropdown">

                                <div className="ad-info_usuario">
                                    <div>
                                        <img className="ad-foto" src={'http://localhost:5000/' + this.state.user.foto} />
                                    </div>

                                    <div className="ad-nome-usuario">
                                        {this.state.user.nome}
                                    </div>
                                </div>

                                <div class="ad-dropdown-content">
                                    <Link className='ad-link' to={'/MeuPerfil'} >Ver perfil</Link>
                                    <Link className='ad-link' to={'/Categoria'} >Gerenciar categorias</Link>
                                    <Link className='ad-link' to={'/TornarAdministrador'}>Adicionar colaborador</Link>
                                    <Link className='ad-link' to={'/EventosAprovados'} >Eventos aprovados</Link>
                                    <Link className='ad-link' onClick={i => this.logout(i)} >Sair</Link>
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