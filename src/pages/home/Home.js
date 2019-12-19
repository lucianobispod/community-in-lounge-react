import React, { Component } from 'react';
import './home.css';

import axios from 'axios';

import moment from 'moment';
import 'moment/locale/pt-br';

import Footer from '../../components/footer/Footer';
import HeaderDefault from '../../components/header/default/HeaderDefault';
import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';

import { isAuthenticated, parseToken } from '../../services/auth';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventosComunidades: [],
            eventosThoughtworks: [],
            token: '',
            acesso: ''

        }
    }

    async GetEventosComunidades() {

        await axios.get('http://localhost:5000/api/evento')
            .then(resposta => {
                const eventosComunidades = resposta.data;
                console.log(eventosComunidades)
                this.setState({ eventosComunidades });
            })
            .catch(err => console.log(err));
    }
    async GetEventosThoughtworks() {

        await axios.get('http://localhost:5000/api/EventoTw/public')
            .then(resposta => {
                const eventosThoughtworks = resposta.data;
                this.setState({ eventosThoughtworks });
            })
            .catch(err => console.log(err));
        console.log(this.state.eventosThoughtworks);

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


    componentDidMount() {
        this.GetEventosComunidades();
        this.GetEventosThoughtworks();

        this.typeWrite();

        this.setState({ token: isAuthenticated() })

        if (isAuthenticated()) {

            this.setState({ acesso: parseToken().Roles })
            console.log("acesso " + parseToken().Roles);
        }
    }



    render() {
        return (
            <div>

                {this.state.token === false ? (<HeaderDefault />) : this.state.acesso === 'Administrador' ? <HeaderAdministrador /> : (< HeaderUsuario />)}

                <section className="section_banner">
                </section>

                <main>
                    <section className="section_titulo_index">
                        <div className="mask_titulo">
                            <h1 className="titulo_index" id="titulo_home">Traga sua comunidade, faça seu evento.</h1>
                        </div>
                    </section>

                    <hr className="linha_banner" />

                    <section className="eventos_comunidade">
                        <div className="eventos_container">

                            <h2 className="titulo_eventos">Eventos das comunidades</h2>


                            <div className="list_card-main">


                                {
                                    this.state.eventosComunidades.map(function (evento) {
                                        return (
                                            <div className="card-main" key={evento.eventoId}>
                                                <Link to={{
                                                    pathname: "/Descricao",
                                                    id: evento.eventoId
                                                }}>
                                                    <div className="data-card-main">
                                                        <p className='p'>
                                                            {
                                                                moment(evento.eventoData.split('T')[0] + 'T' + evento.horario).format('llll')
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="identificacao-card-main">
                                                        <p className="evento_titulo-card-main">{evento.nome}</p>
                                                        <p className="comuni_evento-card-main">{evento.comunidade.nome}</p>
                                                    </div>
                                                </Link>
                                                <div className="box_parti-bot-card-main">
                                                    <p className="partici-card-main">{evento.sala.qntdPessoas}</p>
                                                    <div className="link-card-main">
                                                        <a className='link-inscreverse-main' href={'http://' + evento.urlEvento} target="_blank" >Inscreva-se</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>

                        </div>
                    </section>

                    <section>

                        <div className="home_laranja">

                            <div className="eventos_container">

                                <div>

                                    <h3 className="home_titulo-tw titulo_eventos">Participe dos eventos ThoughtWorks</h3>
                                </div>

                                <div className="list_card-main">

                                    {
                                        this.state.eventosThoughtworks.map(function (evento) {
                                            return (

                                                <div className="card-main" key={evento.eventoId}>

                                                    <div className="data-card-main">
                                                        <p className='p'>
                                                            {
                                                                moment(evento.eventoData.split('T')[0] + 'T' + evento.horario).format('llll')
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="identificacao-card-main">
                                                        <p className="evento_titulo-card-main">{evento.nome}</p>
                                                        <p className="comuni_evento-card-main">ThoughtWorks</p>
                                                    </div>
                                                    <div className="box_parti-bot-card-main">
                                                        <p className="partici-card-main">{evento.sala.qntdPessoas}</p>
                                                        <div className="link-card-main">
                                                            <a className='link-inscreverse-main' href="#">Inscreva-se</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }



                                </div>


                            </div>
                        </div>



                    </section>





                    <section className="section_sobre">

                        <div className="container-geral_sobre">

                            <h2 className="titulo_sobre">Sobre nós</h2>

                            <div className="sobre_texto centro">
                                <p className="texto_p">
                                    Nós somos no trabalho as mesmas pessoas que somos na vida. Nós encorajamos e apoiamos colegas. Valorizamos a honestidade e a transparência. Boas ideias e vontade de fazer a coisa certa são mais importantes que títulos e credenciais. Abominamos e rejeitamos a discriminação e a desigualdade e promovemos a diversidade em todas as suas formas. Orgulhosamente, apaixonadamente e ativamente nos esforçamos para tornar a ThoughtWorks e nossa indústria mais reflexivas e representativas da sociedade que servimos. Nosso Código de Conduta reflete nossos valores e descreve como nos comportamos e nos tratamos.
                                </p>
                            </div>
                            <div>
                                <Link className="call_sobrenos" to={{
                                    pathname: "SobreNos"
                                }}>
                            Saiba mais
                                </Link>
                                </div>
                        </div>

                    </section>

                    <hr className="linha-call-evento" />

                    <section className="call_evento">

                        <div className="box_call_evento">
                            <h4>Crie seu evento gratuitamente!</h4>
                            <a className="link_saiba_mais-home" href="#">Saiba mais</a>
                        </div>

                    </section>

                </main>

                <Footer />

            </div>
        );
    }
}
export default Home;