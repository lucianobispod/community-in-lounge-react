import React, { Component } from "react";
import './eventogerais.css'
import Footer from '../../components/footer/Footer';
import HeaderDefault from '../../components/header/default/HeaderDefault';
import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';


import axios from "axios";
import { isAuthenticated, parseToken } from '../../services/auth';
import { Link } from "react-router-dom";

class EventosGerais extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
            token: '',
            acesso: ''
        }

    }



    getEventos = () => {
        axios.get('http://localhost:5000/api/Evento')
            .then(resposta => {
                this.setState({ eventos: resposta.data });
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.getEventos();

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

                <main className="EventosGerais__main">
                    <section className="EventosGerais__secao">
                        <div className="EventosGerais_titulo">
                            <h1> Eventos Gerais</h1>
                        </div>
                        <div className="EventosGerais__container">

                            {
                                this.state.eventos.map((evento) => {

                                    return (
                                        <Link to='/Descricao'>

                                            <div className="EventosGerais__card">
                                                <div >
                                                    <img className="EventoGerais__foto-pendente" alt='' src={'http://localhost:5000/' + evento.foto} />
                                                </div>
                                                <div className="EventosGeraos__info">
                                                    <p className="EventoGerais__titulo-info">{evento.nome}</p>
                                                    <p className="EventoGerais__data-info">{evento.eventoData}</p>
                                                    <p className="EventoGerais__comunidade-info">{evento.comunidade.nome}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
export default EventosGerais;