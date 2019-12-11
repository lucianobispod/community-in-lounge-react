import React, { Component } from 'react';
import './EventosAprovados.css';






class EventosAprovados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaaprovados: [],
        }
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

                            </div>

                            <div className="card-aprovado">
                                <div className="foto-aprovado"></div>

                                <div className="info-evento-aprovado">

                                    <p className="titulo-info">A impotacia da diversidade</p>
                                    <p className="data-info">ter, 30 de mar, 16:20</p>
                                    <p className="comunidade-info">ThoughtWorks</p>

                                </div>

                            </div>

                                <div className="card-aprovado">
                                    <div className="foto-aprovado"></div>

                                    <div className="info-evento-aprovado">

                                        <p className="titulo-info">A impotacia da diversidade</p>
                                        <p className="data-info">ter, 30 de mar, 16:20</p>
                                        <p className="comunidade-info">ThoughtWorks</p>

                                    </div>

                                </div>
                                
            

                        </div>
                    </section>
                </main>
            </div>
        )
    }


}
export default EventosAprovados;