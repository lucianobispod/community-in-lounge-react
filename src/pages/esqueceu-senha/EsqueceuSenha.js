import React, { Component } from 'react';
import "./esqueceu-senha.css";
import Axios from 'axios';
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

        const titulo = document.getElementById('titulo_esqueceu-senha');
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
                <section className="esqueceusenha_section">
                    
                    <div className="esqueceusenha-text_container">

                        <div className="circle_esqueceusenha esqueceusenha-alta"></div>
                        
                        <div className="texto-amigo-login-esqueceu">
                            <h2 className="cor letra_grande-esqueceusenha titulo_h2_esqueceu" id="titulo_esqueceu-senha">Tenha calma, vamos ajuda-lo!</h2>
                            <h2 className="cor letra_media-esqueceusenha">Siga nossas instruções</h2>
                        </div>

                        <div className="circle_esqueceusenha esqueceusenha-baixa"></div>
                    
                    </div>


                    <div className="esqueceusenha_container">
                        <Link onClick={() => this.props.history.go(-1)} className="link-icone"  >
                            <i className="fas fa-times fechar-login"></i>
                        </Link>

                        <div className="titulo_esqueceusenha">
                            <h1 className='h1-eqs'>Recuperar Senha</h1>
                        </div>
                        <form className="esqueceusenha_form" onSubmit={(i) => this.recuperarSenha(i)}>
                            <div className="inpu_div-esqueceusenha">

                                <div className="esqueceusenha-campo">
                                    <label for="email_user"><i className="far fa-user"></i></label>
                                    <input
                                        value={this.state.emailRecuperarSenha}
                                        onChange={(i) => this.atualizaEmailRecuperarSenha(i)}
                                        type="email"
                                        name='email_user'
                                        placeholder="Email" />
                                </div>

                                <div>
                                    <p>{this.state.erroMessage}</p>
                                </div>

                            </div>
                            <button className='button-esqueceusenha' type="submit">Enviar</button>
                        </form>


                        
                    </div>
                </section>
            </div>
        );
    }
}
export default EsqueceuSenha;