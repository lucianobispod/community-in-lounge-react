import React, { Component } from 'react';
import './CadastrarUsuario.css' //Importando css

import axios from 'axios';
import Footer from '../../components/footer/Footer';

class CadastrarUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
                nome: '',
                email: '',
                telefone: '',
                senha: '',
                genero: 'Masculino',
                tipo_usuario_id: 3,
                foto: React.createRef(),
            
        }
    }

    atualizaState = (event) =>{
        this.setState({
        [event.target.name] : event.target.value
        });
    }

    efetuarCadastro = (event) => {
        event.preventDefault()
        
        console.log(this.state.nome);
        console.log(this.state.senha);
        console.log(this.state.telefone);
        console.log(this.state.tipo_usuario_id);
        console.log(this.state.email);
        console.log(this.state.genero);
        console.log(this.state.foto);

        axios.post('http://localhost:5000/api/Usuario', {
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            descricao: this.state.descricao,
            foto: 'url',
            senha: this.state.senha,
            genero: this.state.genero,
            tipoUsuarioId:  this.state.tipo_usuario_id
        })
        .then(resposta => {
            console.log(resposta);
            console.log(resposta.data.usuarioId);
            if (resposta.status == 200) {
                console.log('FOOOI');
                this.uploadFoto(resposta.data.usuarioId);
            }
        }).catch(error => {console.log(error)});
    }


    uploadFoto = (id) => {
        let evento = new FormData();
        evento.set("imagem", this.state.foto.current.files[0]);

        axios({
            method: 'put',
            url: 'http://localhost:5000/api/Usuario/' + id + '/uploadFoto',
            data: evento,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(resposta => {
                console.log("RESPOSTA " + resposta);
            }).catch(error => console.log(error));
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
                                <img/>
                            </div>

                            <div className="campo_usuario_foto">

                                <i className="fas fa-camera"></i>

                                <label className="campo_foto_usuario_label" for="campo_foto_usuario"> Clicle aqui para adcionar uma foto</label>
                                <input type="file"
                                    id="campo_foto_usuario"
                                    ref={this.state.foto}
                                   />
                            </div>

                            <div className="circle_usuario baixa_usuario"></div>
                        </div>

                        <div className="usuario_container">

                            <form className="usuario_form" onSubmit={this.efetuarCadastro}>

                                <div className="inpu_div_usuario">

                                    <div className="campo_usuario">

                                        <label for="nome">Nome:</label>

                                        <input type="text"
                                            name="nome"
                                            value={this.state.nome}
                                            onChange={this.atualizaState}
                                            placeholder="Digite seu nome"/>

                                    </div>

                                    <div className="campo_usuario">

                                        <label for="email">Email:</label>

                                        <input type="email"
                                            value={this.email}
                                            onChange={this.atualizaState}
                                            name="email"
                                            placeholder="exemplo@email.com" />
                                    </div>

                                    <div className="campo_usuario">

                                        <label for="telefone">Telefone:</label>

                                        <input type="text"
                                            name="telefone"
                                            value={this.telefone}
                                            onChange={this.atualizaState}
                                            placeholder="11 97777-4444" />

                                    </div>

                                    <div className="genero">
                                        <label for="">Genero: </label>
                                        <input className="genero_i"
                                            value="Masculino"
                                            type="radio"
                                            name="genero"
                                            checked={this.state.genero === 'Masculino'}
                                            onChange={this.atualizaState}
                                            />Masculino
                                        
                                        <input className="genero_i"
                                            value="Feminino"
                                            type="radio"
                                            name="genero"
                                            checked={this.state.genero === 'Feminino'}
                                            onChange={this.atualizaState}
                                            />Feminino
                                            
                                    </div>


                                    <div className="campo_usuario">
                                        <label for="senha">Senha:</label>
                                        <input type="password" 
                                        name="senha"
                                        value={this.senha} 
                                        onChange={this.atualizaState}/>
                                    </div>

                                </div>

                                <button type="submit">Cadastrar</button>
                            </form>
                        </div>

                    </section>

                <Footer />
                </main>
                <script src="./js/maquina-escrever.js"></script>
            </div>
        );
    }}

export default CadastrarUsuario;