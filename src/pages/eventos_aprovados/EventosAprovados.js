import React, { Component } from 'react';
import './EventosAprovados.css';

import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import axios from 'axios';
import { getUserIdAuthenticated } from '../../services/auth';

import moment from 'moment';
import 'moment/locale/pt-br';

class EventosAprovados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaaprovados: [],
            id: ''
        }
    }

    getEventosAprovados() {
        axios.get('http://localhost:5000/api/Evento/Aprovados/' + this.state.id)
            .then(resposta => {
                this.setState({ listaaprovados: resposta.data });
                console.log(this.state.listaaprovados);
            })
            .catch(error => console.log(error))
    }


    componentDidMount() {

        this.setState({ id: getUserIdAuthenticated().id })

        setTimeout(() => {
            this.getEventosAprovados();
        }, 250);
    }

    render() {
        return (
            <div>
                <HeaderAdministrador />
                <main>
                    <section className="sessao-aprovados">
                        <div className="caixa-titulo-aprovados">
                            <h1 className='titulo'>Meus eventos Aprovados</h1>
                        </div>

                        <div className="container-eventos-aprovados">

                            {
                                this.state.listaaprovados.map(function (evento) {
                                    return (
                                        <div className="card-aprovado">
                                            <div>
                                                <img className="foto-aprovado" alt='Foto da comunidade' />
                                            </div>

                                            <div className="info-evento-aprovado">

                                                <p className="titulo-info">{evento.nome}</p>
                                                <p className="data-info">{moment(evento.eventoData).format('llll')}</p>
                                                <p className="comunidade-info">{evento.comunidade.nome}</p>

                                            </div>

                                        </div>
                                    );
                                })
                            }

                        </div>
                    </section>
                </main>
            </div>
        )
    }


}
export default EventosAprovados;