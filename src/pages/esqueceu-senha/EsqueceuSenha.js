import React, { Component } from 'react';
import "./esqueceu-senha.css";
import Axios from 'axios';
import { parseToken } from '../../services/auth';
import { Link } from 'react-router-dom';


class EsqueceuSenha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailRecuperarSenha: '',
            erroMessage: ''

        }
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


    atualizaEmailRecuperarSenha = (event) => {
        this.setState({ emailRecuperarSenha: event.target.value })
        console.log( this.state.emailRecuperarSenha )
    }
    
    
    recuperarSenha = (event) => {
        event.preventDefault();
        console.log( this.state.emailRecuperarSenha )
        Axios.put('http://localhost:5000/api/Usuario/ResetPassword', {Email: this.state.emailRecuperarSenha})
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
                        <div className="texto-amigo-login-esqueceu">
                            <h2 className="cor letra_grande titulo_h2_login" id="titulo_home">Tenha calma, vamos ajuda-lo!</h2>
                            <h2 className="cor  letra_media">Entre para fazer seu evento conosco.</h2>
                        </div>
                        <div className="circle_login baixa"></div>
                    </div>
                    <div className="login_container">
                        <Link to={() => this.props.history.go(-1)} className="link-icone"  >
                            <i className="fas fa-times fechar-login"></i>
                        </Link>

                        <div className="titulo_login">
                            <h1>Recuperar Senha </h1>
                        </div>
                        <form className="login_form" onSubmit={(i) => this.recuperarSenha(i)}>
                            <div className="inpu_div">

                                <div className="campo">
                                    <label for="email_user"><i className="far fa-user"></i></label>
                                    <input
                                        className="input_login"
                                        value={this.state.emailRecuperarSenha}
                                        onChange={(i) => this.atualizaEmailRecuperarSenha(i)}
                                        type="email"
                                        id="login_email"
                                        placeholder="Email" />
                                </div>

                                

                                <div>
                                    <p>{this.state.erroMessage}</p>
                                </div>

                            </div>
                            <button type="submit">Enviar</button>
                        </form>


                        
                    </div>
                </section>
            </div>
        );
    }
}
export default EsqueceuSenha;