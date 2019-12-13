import React, { Component } from 'react';
import './meus-eventos.css';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import { isAuthenticated, parseToken, getUserIdAuthenticated } from '../../services/auth';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import Footer from '../../components/footer/Footer';

class MeusEventos extends Component {


    constructor(props) {
        super(props);
        this.state = {
            eventosAprovados: [],
            eventosPendentes: [],
            eventosRealizados: [],
            modal: false,
            url: '',
            acesso: '',
            idUsuario: ''
        };
    }



    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    GetEventosAprovados = () => {
        // event.preventDefault();
        axios.get('http://localhost:5000/api/Evento/AprovadosUsuario/' + this.state.idUsuario)
            .then(resposta => {
                const eventosAprovados = resposta.data;
                this.setState({ eventosAprovados });
            }).catch(error => console.log(error));
    }

    GetEventosPendentes = () => {
        // event.preventDefault();
        axios.get('http://localhost:5000/api/Evento/PendentesUsuario/' + this.state.idUsuario)
            .then(resposta => {
                const eventosPendentes = resposta.data;
                this.setState({ eventosPendentes });
            }).catch(error => console.log(error));

    }

    GetEventosRealizados = () => {
        // event.preventDefault();

        axios.get('http://localhost:5000/api/Evento/RealizadosUsuario/' + this.state.idUsuario)
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
        axios.put('http://localhost:5000/api/Evento/' + evento.eventoId, evento)
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

        if (isAuthenticated()) {

            this.setState({ acesso: parseToken().Roles })
            this.setState({ idUsuario: getUserIdAuthenticated().id })

            console.log("acesso " + parseToken().Roles);
            console.log("id suario logado " + getUserIdAuthenticated().id);

        }

        console.log("funcao " + isAuthenticated());
        console.log("state acesso" + this.state.acesso);


        setTimeout(() => {
            this.GetEventosAprovados();
            this.GetEventosPendentes();
            this.GetEventosRealizados();
        }, 250);




    }


    render() {
        return (
            <div>

                {this.state.acesso === 'Administrador' ? <HeaderAdministrador /> : <HeaderUsuario />}

                <section className="me-conteiner_section">

                    <div className="me-box_eventos_aprovados">
                        <h2 className="me-upper me-verde">Eventos aprovados</h2>
                        <div className="me-box_cards_aprovados">

                            <div className="me-linha_card">

                                {
                                    this.state.eventosAprovados.length === 0 ? <h2 className='me-mensagem'>Ainda não há eventos</h2> :
                                        this.state.eventosAprovados.map(function (aprovado) {
                                            return (
                                                <div className="me-card" key={aprovado.eventoId}>
                                                    <div className="me-data">
                                                        <p>
                                                            {
                                                                moment(aprovado.eventoData).format('llll')
                                                            }
                                                        </p>
                                                        <div className="me-dropdown">

                                                            <a className="me-dropbtn">
                                                                <i className="fas fa-sort-down"></i>
                                                            </a>

                                                            <div className="me-dropdown-content">
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

                                                    <div className="me-identificacao">
                                                        <p className="me-evento_titulo">{aprovado.nome}</p>
                                                        <p className="me-comuni_evento">{aprovado.comunidade.nome}</p>
                                                    </div>

                                                    <div className="me-box_parti-bot">
                                                        <span className="me-partici">{aprovado.sala.qntdPessoas}</span>
                                                        <div className="me-circle me-pequeno "></div>
                                                    </div>

                                                </div>
                                            )
                                        }.bind(this))

                                }



                            </div>
                        </div>
                    </div>

                    <div className="me-box_eventos_analise">
                        <h2 className="me-upper laranja">Eventos em análise</h2>
                        <div className="me-box_cards_analise">


                            <div className="me-linha_card">

                                {
                                    this.state.eventosPendentes.length === 0 ? <h2 className='me-mensagem'>Ainda não há eventos</h2> :
                                        this.state.eventosPendentes.map(function (pendentes) {
                                            return (
                                                <div className="me-card" key={pendentes.eventoId}>
                                                    <div className="me-data">
                                                        <p>
                                                            {

                                                                moment(pendentes.eventoData).format('llll')
                                                            }
                                                        </p>
                                                        <div className="me-dropdown">

                                                            <a className="me-dropbtn">
                                                                <i className="fas fa-sort-down"></i>
                                                            </a>

                                                            <div className="me-dropdown-content">
                                                                <button >Editar</button>
                                                                <button type='submit' onClick={i => this.deleteEventosPendentes(pendentes.eventoId)}>Deletar</button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="me-identificacao">
                                                        <p className="me-evento_titulo">{pendentes.nome}</p>
                                                        <p className="me-comuni_evento">{pendentes.comunidade.nome}</p>
                                                    </div>

                                                    <div className="me-box_parti-bot">
                                                        <p className="me-text_italic">{pendentes.sala.qntdPessoas}</p>
                                                        <p className="me-text_italic">{pendentes.statusEvento === 'Pendente' ? 'Aguardando aprovação' : ''}</p>
                                                        <div className="me-circle me-grande"></div>
                                                    </div>

                                                </div>
                                            )
                                        }.bind(this))

                                }

                            </div>

                        </div>
                    </div>
                </section>

                <section className="me-section_realizados">
                    <div className="me-container_realizados">
                        <h2 className="me-upper me-cinza">Eventos realizados</h2>
                        <div className="me-box_cards_realizados">

                            {
                                this.state.eventosRealizados.length === 0 ? <h2 className='me-mensagem'>Ainda não há eventos</h2> :
                                    this.state.eventosRealizados.map(function (realizados) {
                                        return (
                                            <div className="me-card" key={realizados.eventoId}>
                                                <div className="me-data">
                                                    <p>
                                                        {
                                                            moment(realizados.eventoData).format('llll')
                                                        }
                                                    </p>
                                                </div>
                                                <div className="me-identificacao">
                                                    <p className="me-evento_titulo">{realizados.nome}</p>
                                                    <p className="me-comuni_evento">{realizados.comunidade.nome}</p>
                                                </div>
                                                <div className="me-box_parti-bot">
                                                    <p className="me-partici">{realizados.sala.qntdPessoas}</p>
                                                    <div className="me-circle medio"></div>
                                                </div>
                                            </div>
                                        )
                                    }.bind(this))

                            }

                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        );
    }
}

export default MeusEventos;