import React, { Component } from 'react';
import './TornarAdministrador.css' //Importando css
import icon from '../../assets/images/iconn.jpeg';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import Footer from '../../components/footer/Footer';


import Axios from 'axios';



class TornarAdministrador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            administradores: [],
            email: '',
            errorMessage: ''
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

        console.log('fodasse')
        Axios.put('http://localhost:5000/api/Usuario/ToAd', { email: this.state.email })
            .then(resposta => {

                this.setState({ errorMessage: resposta.data })
                console.log('setou erro')
                console.log(resposta)
            })
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

                <HeaderAdministrador />
                <main>


                        <section>
                            <img className="banner-tornar-adm" src={icon} />
                        </section>


                    <section className="sessao_tornar_funcionario_ADM">

                        <div className="caixa_tornar_funcionario_ADM">

                            <div className="div-titulo-tornar-adm">

                                <h1>Cadastre um novo integrante para o nosso time</h1>

                            </div>

                            <div className="container_tornar_adm" >

                                <form onSubmit={i => this.efetuarTransicao(i)}>


                                    <div className='div-input'>
                                        <label>E-mail:</label>
                                        <input onChange={this.UpStateEmail.bind(this)} value={this.state.email} className="input_email" type="email" placeholder="exemplo@gmail.com" />
                                    </div>

                                    <button type='submit' className="botao_cadastrar_fun">Cadastrar</button>


                                </form>

                                <h2>{this.state.errorMessage}</h2>
                            </div>

                        </div>



                        <div />

                        <div />
                    </section>



                    <section className ='section-lista-adm'> 

                        <div className="div_cards_tornar_adm">

                            {
                                this.state.administradores.map(function (adm) {
                                    return (
                                        <div className="card_tonar_adm" key={adm.usuarioId} >

                                            <div >
                                                <img className="imagem_fun" src={'http://localhost:5000/'+adm.foto}/>
                                            </div>

                                            <div className="div_info_user">
                                                <p className='ta-upper'>{adm.nome}</p>
                                                <p className='ta-upper'>{adm.email}</p>
                                            </div>

                                            <button className='excluir-card' onClick={i => this.alterarAdministrador(adm.usuarioId)}>
                                                <i className="fas fa-times " />
                                            </button>

                                        </div>
                                    )

                                }.bind(this))

                            }

                        </div>

                    </section>







                </main>

                <Footer />

            </div>
        )
    }
}
export default TornarAdministrador;
