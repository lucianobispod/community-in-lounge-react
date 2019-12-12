import React, { Component } from 'react';
import './eventos-thoughtworks.css';

import axios from 'axios';
import Footer from '../../components/footer/Footer';





class EventosThoughtworks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaThoughtworks: [],
        }
    }
    listarEventosAprovados() {
        axios.get('http://localhost:5000/api/EventoTw')
            .then(resposta => {
                console.log(resposta)
                this.setState({ listaThoughtworks: resposta.data });
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.listarEventosAprovados();
    }


    render() {
        return (
            <div>
                <main>
                    <section className="sessao-aprovados">
                        <div className="caixa-titulo-aprovados">
                            <h1>Eventos ThoughtWorks</h1>
                        </div>

                        <div className="div-eventos-aprovados">

                            {
                                this.state.listaThoughtworks.length === 0 ? 'No momento não há eventos cadastrados' : this.state.listaThoughtworks.map(function (evento) {

                                    return (
                                        <div className="card-aprovado">
                                            <div className="foto-aprovado"></div>

                                            <div className="info-evento-aprovado">

                                                <p className="titulo-info">{evento.nome}</p>
                                                <p className="data-info">{evento.eventoData}</p>
                                                <p className="comunidade-info">{evento.categoria.nome}</p>
                                            </div>
                                            <p className="comunidade-info">ThoughtWorks</p>

                                            <div className="div-botao-rejeitar"><button class="rejeitar"><i class="fas fa-times"></i></button></div>

                                        </div>
                                    )
                                })

                            }







                        </div>
                    </section>
                    <Footer />
                </main>
            </div>
        )
    }

}
export default EventosThoughtworks;