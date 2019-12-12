import React, { Component } from 'react';
import './TornarAdministrador.css' //Importando css
import icon from '../../assets/images/iconn.jpeg';

import Footer from '../../components/footer/Footer';


import Axios from 'axios';



class TornarAdministrador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            administradores: [],
            email: ''
        }
    }

    alterarAdministrador(id) {
        Axios.put('http://localhost:5000/api/Usuario/' + id + '/ToFun', { tipoUsuarioId: 2 })
            .then(
                this.listarAdministradores.bind(this)
            )
    }

    UpStateEmail = (event) => {
        this.setState({ email: event.target.value })
        console.log(this.state.email);
    }



    efetuarTransicao = (event) => {
        event.preventDefault();
        Axios.put('http://localhost:5000/api/Usuario/ToAd', { email: this.state.email })
            .then(resposta => console.log(resposta))
            .then(this.listarAdministradores.bind(this))
            .catch(error => console.log(error))
    }

    listarAdministradores() {
        Axios.get('http://localhost:5000/api/Usuario/Adm')
            .then(resposta => {
                const administradores = resposta.data
                this.setState({ administradores });
            }).catch(error => console.log(error));
    }

    componentDidMount() {
        this.listarAdministradores();
    }

    render() {
        return (

            <div>

                <main>

                    <section className="sessao_tornar_funcionario_ADM">

                        <div>
                            <img className="banner-tornar-adm" src={icon} />
                        </div>



                        <div className="caixa_tornar_funcionario_ADM">

                            <div className="div-titulo-tornar-adm">

                                <h1>Cadastre um novo integrante para o nosso time</h1>

                            </div>

                            <form className="form_tornar_adm" >

                                <div className="div_cadastrar_fun">
                                    <label>E-mail:</label>
                                    <form
                                        onSubmit={this.efetuarTransicao.bind(this)}>
                                        <input onChange={this.UpStateEmail.bind(this)} value={this.state.email} className="input_email" type="email" placeholder="exemplo@gmail.com" />
                                        <button type='submit' className="botao_cadastrar_fun">Cadastrar</button>
                                    </form>

                                </div>

                            </form>

                        </div>


                        <div className="div_cards_tornar_adm">

                            {
                                this.state.administradores.map(function (adm) {
                                    return (
                                        <div className="card_tonar_adm" key={adm.usuarioId} >

                                            <div className="imagem_fun">
                                            </div>

                                            <div className="div_info_user">

                                                <div>
                                                    <h2>{adm.nome}</h2>
                                                    <p>{adm.email}</p>
                                                </div>

                                            </div>
                                            <button onClick={i => this.alterarAdministrador(adm.usuarioId)}> <i className="fas fa-times excluir-card" /></button>
                                            {/* <button onClick={i => console.log(adm)}> <i className="fas fa-times excluir-card"  /></button> */}

                                        </div>
                                    )

                                }.bind(this))

                            }

                        </div>

                        <div />

                        <div />
                    </section>
                </main>

                <Footer />

            </div>
        )
    }
}
export default TornarAdministrador;
