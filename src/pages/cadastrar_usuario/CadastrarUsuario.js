import React, { Component } from 'react';
import './CadastrarUsuario.css' //Importando css

import axios from 'axios';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import { parseToken } from '../../services/auth'

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

    atualizaState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }






    loginAutomatic = (email, senha) => {

        axios.post('http://localhost:5000/api/Login',
            {
                email: email,
                senha: senha
            }).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('usuario-token', res.data.token);
                    this.props.history.push('/Meuseventos');
                }
            }).catch(erro => {
                this.setState({ erroMessage: 'Email ou Senha invalido!' });
                console.log(erro);

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

        // headers: {
        //     "Authorization" : "Bearer" + localStorage.getItem("usuario-community")
        // }
        axios.post('http://localhost:5000/api/Usuario', {
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            descricao: this.state.descricao,
            foto: 'url',
            senha: this.state.senha,
            genero: this.state.genero,
            tipoUsuarioId: this.state.tipo_usuario_id
        })
            .then(resposta => {
                console.log(resposta);
                console.log(resposta.data.usuarioId);
                if (resposta.status === 200) {
                    console.log('FOOOI');
                    this.uploadFoto(resposta.data.usuarioId);

                    this.loginAutomatic(resposta.data.email, resposta.data.senha)
                } else {

                    window.location.href = '/Login';
                }
            }).catch(error => { console.log(error) });
    }

    previwImage = () => {

        var input = document.getElementById('campo_foto_usuario').files[0];

        var imagem = document.getElementById('img');

        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            imagem.setAttribute('src', fileReader.result);
        }

        fileReader.readAsDataURL(input);

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

                            <div id='img'>
                                {/* <img id='img' /> */}
                                <h4 className="img_h4"> Foto </h4>
                            </div>

                            <div className="campo_usuario_foto">
                                
                                <input type="file"
                                    id="campo_foto_usuario"
                                    onChange={this.previwImage}
                                    ref={this.state.foto}
                                />
                            </div>

                            <div className="circle_usuario baixa_usuario"></div>
                        </div>

                        <div className="usuario_container">
                            <Link onClick={() => this.props.history.go(-1)} className="link_icon_cadastrousuario"  >
                                <i className="fas fa-times fechar-login"></i>
                            </Link>
                            <form className="usuario_form" onSubmit={this.efetuarCadastro}>

                                <div className="inpu_div_usuario">

                                    <div className="campo_usuario">
                                        <label for="nome">Nome</label>
                                        <input type="text" className="inpu-dado-usuario" name="nome" value={this.state.nome} onChange={this.atualizaState} />
                                    </div>


                                    <div className="campo_usuario">
                                        <label for="telefone">Telefone</label>
                                        <input type="text" className="inpu-dado-usuario" name="telefone" value={this.telefone} onChange={this.atualizaState} />

                                    </div>



                                    <div className="campo_usuario">
                                        <label for="email">Email</label>
                                        <input type="email" className="inpu-dado-usuario" value={this.email} onChange={this.atualizaState} name="email" />

                                    </div>

                                    <div className="campo_usuario">
                                        <label for="senha">Senha</label>
                                        <input type="password" className="inpu-dado-usuario" name="senha" value={this.senha} onChange={this.atualizaState} />
                                    </div>

                                    <div className="genero">
                                        <label>Gênero</label>
                                        <div className="div-input-radio">


                                            <div className='div-radio-genero'>
                                                <label for=''>Masculino</label>
                                                <input type="radio" name="genero" value="Masculino" checked={this.state.genero === 'Masculino'} onChange={this.atualizaState} />
                                            </div>

                                            <div className='div-radio'>
                                                <label for=''>Feminino</label>
                                                <input type="radio" name="genero" value="Feminino" checked={this.state.genero === 'Feminino'} onChange={this.atualizaState} />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <button className="button-cadastrar-usuario" type="submit">Cadastrar</button>
                            </form>
                        </div>

                    </section>

                </main>

            </div>
        );
    }
}

export default CadastrarUsuario;