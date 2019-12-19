import React, { Component } from 'react';
import "./login.css"
import Axios from 'axios';
import { parseToken } from '../../services/auth';
import { Link } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            emailRecuperarSenha: '',
            erroMessage: ''

        }
    }
    atualizaEstado(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    async efetuaLogin(event) {
        event.preventDefault();

        await Axios.post('http://localhost:5000/api/Login',
            {
                email: this.state.email,
                senha: this.state.senha
            }).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('usuario-token', res.data.token);
                    console.log('Meu token é' + res.data.token);
                    console.log(parseToken().Roles);

                    if (parseToken().Roles === 'Administrador') {
                        this.props.history.push('/GerenciarEventos');
                    } else {
                        this.props.history.push('/Meuseventos');
                    }
                }
            }).catch(erro => {
                this.setState({ erroMessage: 'Email ou Senha invalido!' });
                console.log(erro);

            });

    }

    typeWrite = () => {

        const titulo = document.getElementById('titulo_home');
        const textoArray = titulo.innerHTML.split('');
        titulo.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(function () {
                titulo.innerHTML += letra
            }, 75 * i)
        });
    }


    atualizaEmailRecuperarSenha = () => {
        this.setState({ emailRecuperarSenha: this.state.emailRecuperarSenha })
    }


    recuperarSenha = () => {
        Axios.put('http://localhost:5000/api/Usuario/ResetPassword', this.state.emailRecuperarSenha)
            .then(res => {
                console.log(res);
                if (res.status === 200) {

                    this.setState({ erroMessage: 'Email Enviado com sucesso!' });
                }
            }).catch(erro => {
                this.setState({ erroMessage: 'Não foi possivel enviar email, tente mais tarde!' });
                console.log(erro);

            });
    }








    componentDidMount() {
        this.typeWrite();
    }

    render() {
        return (
            <div>
                <section className="login_section">
                    <div className="text_container">
                        <div className="circle_login alta"></div>
                        <div className="texto-amigo-login">
                            <h2 className="cor letra_grande titulo_h2_login" id="titulo_home">Olá, seja bem vindo amigo!</h2>
                            <h2 className="cor  letra_media">Entre para fazer seu evento conosco.</h2>
                        </div>
                        <div className="circle_login baixa"></div>
                    </div>
                    <div className="login_container">
                        <Link onClick={() => this.props.history.go(-1)} className="link-icone"  >
                            <i className="fas fa-times fechar-login"></i>
                        </Link>

                        <div className="titulo_login">
                            <h1>Login</h1>
                        </div>
                        <form className="login_form" action="" method="POST" onSubmit={this.efetuaLogin.bind(this)}>
                            <div className="inpu_div">

                                <div className="campo">
                                    <label for="email_user"><i className="far fa-user"></i></label>
                                    <input
                                        className="input_login"
                                        value={this.state.email}
                                        onChange={this.atualizaEstado.bind(this)}
                                        type="email"
                                        name="email"
                                        id="login_email"
                                        placeholder="Email" />
                                </div>

                                <div className="campo">
                                    <label for="password_user"><i className="fas fa-unlock"></i></label>
                                    <input
                                        className="input_login"
                                        value={this.state.senha}
                                        onChange={this.atualizaEstado.bind(this)}
                                        type="password"
                                        name="senha"
                                        id="login_password"
                                        placeholder="Senha" />
                                </div>

                                <div>
                                    <p>{this.state.erroMessage}</p>
                                </div>

                            </div>
                            <button type="submit">Enviar</button>
                        </form>


                        <div className="login_reset_senha">
                            <Link to={'/EsqueceuSenha'} >
                                Esqueceu a senha ?
                                <button className="call_recuperar-senha swing">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Login;