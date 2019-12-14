import React, { Component } from "react";
import './eventogerais.css'

class EventosGerais extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <main class="EventosGerais__main">
                    <section class="EventosGerais__secao">
                        <div class="EventosGerais_titulo">
                            <h1> Eventos Gerais</h1>
                        </div>
                        <div class="EventosGerais__container">
                            <div class="EventosGerais__card">
                                <div class="EventoGerais__foto-pendente">Foto</div>
                                <div class="EventosGeraos__info">
                                    <p class="EventoGerais__titulo-info">uihuh</p>
                                    <p class="EventoGerais__data-info">nnon</p>
                                    <p class="EventoGerais__comunidade-info">ubh9bbu</p>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default EventosGerais;