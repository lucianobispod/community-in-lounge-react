import React, { Component } from 'react';
import './CadastrarUsuario.css' //Importando css

import Axios from 'axios';

class CadastrarUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            telefone: '',
            foto: 'url',
            senha: '',
            genero: '',
            tipo_usuario_id: 1
        }
        this.atualizarEstadoGenero = this.atualizarEstadoGenero.bind(this)
    }

    efetuarCadastro(event) {
        event.preventDefault()

        Axios.post('http://localhost:5000/api/Usuario', {
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            descricao: this.state.descricao,
            foto: this.state.foto,
            senha: this.state.senha,
            genero: this.state.genero,
            tipo_usuario_id:  this.state.tipo_usuario_id
        })
    }

    //Recebe um cadastro de Usuário, e recebe o valor do campo
    atualizaEstadoNome(event) {
        this.setState({ nome: event.target.value });
    }
    atualizaEstadoEmail(event) {
        this.setState({ email: event.target.value });
    }

    atualizaEstadoTelefone(event) {
        this.setState({ telefone: event.target.value });
    }

    atualizaEstadoDescricao(event) {
        this.setState({ descricao: event.target.value });
    }

    atualizaEstadofoto(event) {
        this.setState({ foto: event.target.value });
    }

    atualizarEstadoSenha(event) {
        this.setState({ senha: event.target.value });
    }

    atualizarEstadoGenero(genero) {
        this.setState({genero: genero})
    }


    render() {
        return (
            <div>
                <main>

                    <section className="usuario_section">

                        <div className="text_container_usuario">

                            <div className="circle_usuario alta_usuario"></div>

                            <div className="titulo_usuario">
                                <h2>Cadastro de Usuario </h2>
                            </div>

                            <div className="circulomeio_usuario">
                                <img src="images/Brad-Pitt-premiere-1.jpg" alt="" />
                            </div>

                            <div className="campo_usuario_foto">

                                <i className="fas fa-camera"></i>

                                <label className="campo_foto_usuario_label" for="campo_foto_usuario"> Clicle aqui para adcionar uma foto</label>
                                <input type="file"
                                    name="foto"
                                    id="campo_foto_usuario"
                                   />
                            </div>

                            <div className="circle_usuario baixa_usuario"></div>
                        </div>

                        <div className="usuario_container">

                            <form className="usuario_form" onSubmit={this.efetuarCadastro.bind(this)}>

                                <div className="inpu_div_usuario">

                                    <div className="campo_usuario">

                                        <label for="nome">Nome:</label>

                                        <input type="text"
                                            name="nome"
                                            value={this.state.nome}
                                            onChange={this.atualizaEstadoNome.bind(this)}
                                            placeholder="Douglas dos Santos" />

                                    </div>

                                    <div className="campo_usuario">

                                        <label for="email">Email:</label>

                                        <input type="email"
                                            value={this.state.email}
                                            onChange={this.atualizaEstadoEmail.bind(this)}
                                            name="email"
                                            placeholder="exemplo@email.com" />
                                    </div>

                                    <div className="campo_usuario">

                                        <label for="telefone">Telefone:</label>

                                        <input type="text"
                                            name="telefone"
                                            value={this.state.telefone}
                                            onChange={this.atualizaEstadoTelefone.bind(this)}
                                            placeholder="11 97777-4444" />

                                    </div >

                                    <div className="genero">
                                        <label for="">Genero: </label>
                                        <input className="genero_i"
                                        onClick={() => this.atualizarEstadoGenero("Masculino")}
                                            type="radio"
                                            name="genero"/>Masculino
                                            
                                <input className="genero_i"
                                onClick={() => this.atualizarEstadoGenero("Feminino")}
                                            type="radio"
                                            name="genero"/>Feminino
                                            
                                    </div>


                                    <div className="campo_usuario">
                                        <label for="senha">Senha:</label>
                                        <input type="password" name="senha"
                                         value={this.state.senha } 
                                         onChange={this.atualizarEstadoSenha.bind(this)}/>
                                    </div>

                                </div>

                                <button type="submit">Cadastrar</button>
                            </form>

                        </div>

                    </section>

                </main>
                <script src="./js/maquina-escrever.js"></script>
            </div>
        );
    }
}
export default CadastrarUsuario;