import React, { Component } from 'react';
import './EventosAprovados.css';

import axios from 'axios';
import Footer from '../../components/footer/Footer';




class EventosAprovados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAprovados: [],
        }
    }

    listarEventosAprovados = (id) => {
        axios.get('http://localhost:5000/api/Evento/Aprovados/' + id)
            .then(resposta => {
                this.setState({ listaAprovados: resposta.data })
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.listarEventosAprovados(2);
    }


    render() {
        return (
            <div>
                <main>
                    <section className="sessao-aprovados">
                        <div className="caixa-titulo-aprovados">
                            <h1>Meus eventos Aprovados</h1>
                        </div>

                        <div className="div-eventos-aprovados">


                            {
                               this.state.listaAprovados.length===0 ? 'Você ainda não aprovou nenhum evento' : this.state.listaAprovados.map(function (evento) {

                                    return (<div className="card-aprovado" >
                                        <div className="foto-aprovado"></div>

                                        <div className="info-evento-aprovado">

                                            <p className="titulo-info">{evento.nome}</p>
                                            <p className="data-info">{evento.eventoData}</p>
                                            <p className="comunidade-info">{evento.comunidade.nome}</p>
                                        </div>

                                        <div className="div-botao-rejeitar"><button class="rejeitar"><i class="fas fa-times"></i></button></div>
                                    </div>)
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
export default EventosAprovados;