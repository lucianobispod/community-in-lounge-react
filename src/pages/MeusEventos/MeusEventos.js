import React, { Component } from 'react';
import './meus-eventos.css';
import axios from 'axios';
import moment from 'moment';

class MeusEventos extends Component {


    constructor(props) {
        super(props);
        this.state = {
            eventosAprovados: [],
            eventosPendentes: [],
            eventosRealizados: []
        };
    }

    GetEventosAprovados() {
        axios.get('http://localhost:5000/api/Evento/AprovadosUsuario/1')
            .then(resposta => {
                const eventosAprovados = resposta.data;
                this.setState({ eventosAprovados });
            }).catch(error => console.log(error));
    }

    GetEventosPendentes() {
        axios.get('http://localhost:5000/api/Evento/PendentesUsuario/1')
            .then(resposta => {
                const eventosPendentes = resposta.data;
                    this.setState({ eventosPendentes });
            }).catch(error => console.log(error));

    }

    GetEventosRealizados() {
        axios.get('http://localhost:5000/api/Evento/RealizadosUsuario/1')
            .then(resposta => {
                const eventosRealizados = resposta.data;
                this.setState({ eventosRealizados });
            }).catch(error => console.log(error));
    }

    deleteEventosPendentes = () => {
        console.log('oi');
        axios.delete('http://localhost:5000/api/Evento/8')
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).then(this.GetEventosPendentes)
            .catch(error => console.log(error))
    }


    componentDidMount() {
        this.GetEventosAprovados();
        this.GetEventosPendentes();
        this.GetEventosRealizados();
        moment.locale('es')
    }


    render() {
        return (
            <div>

                <section className="conteiner_section">

                    <div className=" box_eventos_aprovados">
                        <h2 className="upper verde">Eventos aprovados</h2>
                        <div className="box_cards_aprovados">

                            <div className="linha_card">

                                {
                                    this.state.eventosAprovados.length === 0 ? <h2>Funcionou</h2> :
                                        this.state.eventosAprovados.map(function (aprovado) {
                                            return (
                                                <div className="card" key={aprovado.eventoId}>
                                                    <div className="data">
                                                        <p>
                                                            {
                                                                moment(aprovado.eventoData).format('llll')
                                                            }
                                                        </p>
                                                        <button>
                                                            <i className="fas fa-sort-down"></i>
                                                        </button>
                                                    </div>

                                                    <div className="identificacao">
                                                        <p className="evento_titulo">{aprovado.nome}</p>
                                                        <p className="comuni_evento">{aprovado.comunidade.nome}</p>
                                                    </div>

                                                    <div className="box_parti-bot">
                                                        <span className="partici">{aprovado.sala.qntdPessoas}</span>
                                                        <div className="circle pequeno "></div>
                                                    </div>

                                                </div>
                                            )
                                        }.bind(this))

                                }



                            </div>
                        </div>
                    </div>

                    <div className=" box_eventos_analise">
                        <h2 className="upper laranja">Eventos em análise</h2>
                        <div className="box_cards_analise">


                            <div className="linha_card">

                                {
                                    this.state.eventosPendentes.length === 0 ? <h2>Funcionou</h2> :
                                        this.state.eventosPendentes.map(function (pendentes) {
                                            return (
                                                <div className="card" key={pendentes.eventoId}>
                                                    <div className="data">
                                                        <p>
                                                            {

                                                                moment(pendentes.eventoData).format('llll')
                                                            }
                                                        </p>
                                                        <div class="dropdown">

                                                            <a class="dropbtn">
                                                                <i className="fas fa-sort-down"></i>
                                                            </a>

                                                            <div class="dropdown-content">
                                                                <button >Editar</button>
                                                                <button type='submit' onClick={this.deleteEventosPendentes.bind(this)}>Deletar</button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="identificacao">
                                                        <p className="evento_titulo">{pendentes.nome}</p>
                                                        <p className="comuni_evento">{pendentes.comunidade.nome}</p>
                                                    </div>

                                                    <div className="box_parti-bot">
                                                        <p className="text_italic">{pendentes.sala.qntdPessoas}</p>
                                                        <div className="circle grande"></div>
                                                    </div>

                                                </div>
                                            )
                                        }.bind(this))

                                }

                            </div>

                        </div>
                    </div>
                </section>

                <section className="section_realizados">
                    <div className="container_realizados">
                        <h2 className="upper cinza">Eventos realizados</h2>
                        <div className="box_cards_realizados">

                            {
                                this.state.eventosRealizados.length === 0 ? <h2>Funcionou</h2> :
                                    this.state.eventosRealizados.map(function (realizados) {
                                        return (
                                            <div className="card" key={realizados.eventoId}>
                                                <div className="data">
                                                    <p>
                                                        {
                                                            moment(realizados.eventoData).format('llll')
                                                        }
                                                    </p>
                                                </div>
                                                <div className="identificacao">
                                                    <p className="evento_titulo">{realizados.nome}</p>
                                                    <p className="comuni_evento">{realizados.comunidade.nome}</p>
                                                </div>
                                                <div className="box_parti-bot">
                                                    <p className="partici">{realizados.sala.qntdPessoas}</p>
                                                    <div className="circle medio"></div>
                                                </div>
                                            </div>
                                        )
                                    }.bind(this))

                            }

                        </div>
                    </div>
                </section>

            </div>

        );
    }
}

export default MeusEventos;