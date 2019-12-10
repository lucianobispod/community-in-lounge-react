import React, { Component } from 'react';
import './default.css'

class HeaderUsuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuarioId: '',
            nome: '',
            foto: '',
            tipoUsuarioId: '',
                comunidade: {
                    comunidadeId: '',
                    responsavelUsuarioId: '',
                    evento: []
                }


        }
        this.GetUsuario = this.GetUsuario.bind(this)
    }
    GetUsuario(){
        axios.get('http://localhost:5000/api/Usuario/' + id)
            .then(resposta => {
                // const eventosComunidades = resposta.data;
                console.log("Comunidades", resposta.data)
                if(resposta.status === 200)
                this.setState({ eventosComunidades: resposta.data })
            })
            .catch(err => console.log(err))
    }

    

render(){
     (

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
                        <a class="ahover" href="meus-eventos.html">Gerenciar meus ventos</a>
                    </li>

                </ul>
            </div>


            <div class="menu_info ">

                <div class=" dropdown">

                    <div class="info_usuario">
                        <div class="foto"></div>
                        
                        <div class="nome-usuario">
                            <p> </p>
                        </div>
                    </div>

                    

                    <div class="dropdown-content">
                        <button href="#">Ver perfil</button>
                        <button href="#">Ver comunidade</button>
                        <button href="#">Sair</button>
                      </div>
                </div>

            </div>
            {/* <div class="container_menu_secundario">
                        <ul>
                            <li>
                                <a class="ahover" href="login.html">Entre</a>
                            </li>
                            <span class="span_ou">ou</span>
                            <li>
                                <a class="ahover" href="#">Cadastre-se</a>
                            </li>
                        </ul>
            </div>  */}

        </nav>
    </header>
    );
}
}
export default HeaderUsuario;