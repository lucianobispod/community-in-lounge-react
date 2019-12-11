import React, { Component } from 'react';
import './EventosAprovados.css';

import axios from 'axios';
import Footer from '../../components/footer/Footer';




class EventosAprovados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaaprovados: [],
        }
    }

    listarEventosAprovados(id){
        axios.get('http://localhost:5000/api/Aprovados'+ id,
       
        )
    }

    componentDidMount(id){
        
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


                            <div className="card-aprovado">
                                <div className="foto-aprovado"></div>

                                <div className="info-evento-aprovado">

                                    <p className="titulo-info">A impotacia da diversidade</p>
                                    <p className="data-info">ter, 30 de mar, 16:20</p>
                                    <p className="comunidade-info">ThoughtWorks</p>
                                </div>

                                    <div className="div-botao-rejeitar"><button class="rejeitar"><i class="fas fa-times"></i></button></div>

                            </div>

                           
                            <div className="card-aprovado">
                                <div className="foto-aprovado"></div>

                                <div className="info-evento-aprovado">

                                    <p className="titulo-info">A impotacia da diversidade</p>
                                    <p className="data-info">ter, 30 de mar, 16:20</p>
                                    <p className="comunidade-info">ThoughtWorks</p>
                                </div>

                                    <div className="div-botao-rejeitar"><button class="rejeitar"><i class="fas fa-times"></i></button></div>

                            </div>

                               
                            <div className="card-aprovado">
                                <div className="foto-aprovado"></div>

                                <div className="info-evento-aprovado">

                                    <p className="titulo-info">A impotacia da diversidade</p>
                                    <p className="data-info">ter, 30 de mar, 16:20</p>
                                    <p className="comunidade-info">ThoughtWorks</p>
                                </div>

                                    <div className="div-botao-rejeitar"><button class="rejeitar"><i class="fas fa-times"></i></button></div>

                            </div>
                                
            

                        </div>
                    </section>
                    <Footer />
                </main>
            </div>
        )
    }


}
export default EventosAprovados;