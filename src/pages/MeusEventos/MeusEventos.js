import React, { Component } from 'react';
import './meus-eventos.css';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class MeusEventos extends Component {


    constructor(props) {
        super(props);
        this.state = {
            eventosAprovados: [],
            eventosPendentes: [],
            eventosRealizados: [],
            modal: false,
            url: ''
        };
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    GetEventosAprovados = () => {
        // event.preventDefault();
        axios.get('http://localhost:5000/api/Evento/AprovadosUsuario/2')
            .then(resposta => {
                const eventosAprovados = resposta.data;
                this.setState({ eventosAprovados });
            }).catch(error => console.log(error));
    }

    GetEventosPendentes = () => {
        // event.preventDefault();
        axios.get('http://localhost:5000/api/Evento/PendentesUsuario/2')
            .then(resposta => {
                const eventosPendentes = resposta.data;
                this.setState({ eventosPendentes });
            }).catch(error => console.log(error));

    }

    GetEventosRealizados = () => {
        // event.preventDefault();

        axios.get('http://localhost:5000/api/Evento/RealizadosUsuario/2')
            .then(resposta => {
                const eventosRealizados = resposta.data;
                this.setState({ eventosRealizados });
            }).catch(error => console.log(error));
    }

    deleteEventosPendentes = (id) => {
        // event.preventDefault();

        axios.delete('http://localhost:5000/api/Evento/' + id)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).then(this.GetEventosPendentes.bind(this))
            .catch(error => console.log(error));
    }

    editarEventoAprovado = (evento) => {
        evento.urlEvento = this.state.url;
        alert(evento.urlEvento);
        axios.put('http://localhost:5000/api/Evento/' + evento.eventoId, evento )
            .then(resposta => console.log(resposta.data.urlEvento + " asdasdasdasdasdasdasdasdasdss"))
            .then(
                this.toggle.bind(this),
                this.GetEventosAprovados.bind(this)
                
                )
            .catch(error => console.log(error));
    }

    UpStateUrl = (event) => {
        this.setState({ url: event.target.value });
        console.log(this.state.url);
    }

    componentDidMount() {
        this.GetEventosAprovados();
        this.GetEventosPendentes();
        this.GetEventosRealizados();
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
                                                        <div className="dropdown">

                                                            <a className="dropbtn">
                                                                <i className="fas fa-sort-down"></i>
                                                            </a>

                                                            <div className="dropdown-content">
                                                                <button type='submit' onClick={this.toggle.bind(this)}>Editar</button>
                                                            </div>

                                                            <MDBContainer>
                                                                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                                                    <MDBModalHeader>Editar</MDBModalHeader>
                                                                    <MDBModalBody>

                                                                        <div className="form-group">
                                                                            <label htmlFor="formGroupExampleInput">Url para inscrição</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="formGroupExampleInput"
                                                                                onChange={this.UpStateUrl.bind(this)}
                                                                                value={this.state.url}
                                                                            />
                                                                        </div>
                                                                    </MDBModalBody>
                                                                    <MDBModalFooter>
                                                                        <MDBBtn color="secondary" onClick={this.toggle}>Fechar</MDBBtn>
                                                                        <MDBBtn color="primary" type='submit' onClick={i => this.editarEventoAprovado(aprovado)}>Salvar</MDBBtn>
                                                                    </MDBModalFooter>
                                                                </MDBModal>
                                                            </MDBContainer>
                                                        </div>
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
                                                        <div className="dropdown">

                                                            <a className="dropbtn">
                                                                <i className="fas fa-sort-down"></i>
                                                            </a>

                                                            <div className="dropdown-content">
                                                                <button >Editar</button>
                                                                <button type='submit' onClick={i => this.deleteEventosPendentes(pendentes.eventoId)}>Deletar</button>
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