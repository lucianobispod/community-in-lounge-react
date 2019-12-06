import React, { Component } from 'react';
import './gerenciar-eventos.css';
import axios from 'axios';


class MeusEventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
            mes: 0
            // , listaDias: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }




    }


    getEventos = async () => {
        console.log(this.state.mes);
        var mes = this.state.mes;
        axios.get('http://localhost:5000/api/evento/calendario/' + mes)
            .then(respota => {
                const eventos = respota.data;
                this.setState({ eventos }, () => console.log(this.state.eventos));
            })
            .catch(error => console.error(error));

    }

    atualizaMes = (event) => {
        this.setState({ mes: event.target.value });
        console.log(this.state.mes)
        this.getEventos();
    }



    render() {
        return (
            <div>
                <section class="section-calendario-info">

                    <div class="container-eventos-pendentes">

                        <div class="gerenciar-titulo">
                            <h1>Calendário</h1>
                        </div>

                        <div class="container-lista-data">
                        <div class="calendario-mes">
                            <form action="" method="get">
                                <select onChange={this.atualizaMes.bind(this)} name="" id="">
                                    <option value="1">Janeiro</option>
                                    <option value="2">Fevereiro</option>
                                    <option value="3">Março</option>
                                    <option value="4">Abril</option>
                                    <option value="5">Maio</option>
                                    <option value="6">Junho</option>
                                    <option value="7">Julho</option>
                                    <option value="8">Agosto</option>
                                    <option value="9">Setembro</option>
                                    <option value="10">Outubro</option>
                                    <option value="11">Novembro</option>
                                    <option value="12">Dezembro</option>
                                </select>
                            </form>

                        </div>

{/* 
                            {this.state.listaDias.map(dia => {
                                return (
                                    
                                    this.state.eventos.map(function (e) {
                                        if (e.data.indexOf(dia) !== -1) {
                                            if (e.thoughtworks === true) {
                                                return (
                                                    <div className="data-dia border-azul" >{dia}</div>
                                                )
                                            } else {
                                                return (
                                                    <div className="data-dia border-vermelho" >{dia}</div>
                                                )
                                            }

                                        } else {
                                            return (
                                                <div className="data-dia border-cinza" >{dia}</div>
                                                )
                                            }
                                    })
                                );
                            }
                            )} */}



                             <div class="linha">
                                <div id="1" class="data-dia border-amarelo">1</div>
                                <div id="2" class="data-dia border-azul">2</div>
                                <div id="3" class="data-dia border-cinza">3</div>
                                <div id="4" class="data-dia border-laranja">4</div>
                                <div id="5" class="data-dia border-vermelho">5</div>
                                <div id="6" class="data-dia border-cinza">6</div>
                                <div id="7" class="data-dia border-cinza">7</div>
                                <div id="8" class="data-dia border-cinza">8</div>
                            </div>
                            <div class="linha">

                                <div id="9" class="data-dia border-cinza">9</div>
                                <div id="10" class="data-dia border-cinza">10</div>
                                <div id="12" class="data-dia border-cinza">11</div>
                                <div id="13" class="data-dia border-cinza">12</div>
                                <div id="14" class="data-dia border-cinza">13</div>
                                <div id="15" class="data-dia border-cinza">14</div>
                                <div id="16" class="data-dia border-cinza">15</div>
                                <div id="17" class="data-dia border-cinza">16</div>
                            </div>
                            <div class="linha">

                                <div id="18" class="data-dia border-cinza">17</div>
                                <div id="19" class="data-dia border-cinza">18</div>
                                <div id="20" class="data-dia border-cinza">19</div>
                                <div id="21" class="data-dia border-cinza">20</div>
                                <div id="22" class="data-dia border-cinza">21</div>
                                <div id="23" class="data-dia border-cinza">22</div>
                                <div id="24" class="data-dia border-cinza">23</div>
                                <div id="25" class="data-dia border-cinza">24</div>
                            </div>
                            <div class="linha">

                                <div id="26" class="data-dia border-cinza">25</div>
                                <div id="27" class="data-dia border-cinza">26</div>
                                <div id="28" class="data-dia border-cinza">27</div>
                                <div id="29" class="data-dia border-cinza">28</div>
                                <div id="30" class="data-dia border-cinza">29</div>
                                <div id="31" class="data-dia border-cinza">30</div>
                                <div id="32" class="data-dia border-cinza">31</div>
                                <div class="data-dia border-cinza"></div>
                            </div> 

                        </div>

                    </div>

                    <div class="container-legenda-calendario">

                        <div class="legenda-calendario-pendente">
                            <h3>Legenda calendário</h3>

                            <div class="linha-legenda">
                                <div class="cor-leg back-azul"></div>
                                <p>Eventos ThoughtWoks</p>
                            </div>

                            <div class="linha-legenda">
                                <div class="cor-leg back-laranja"></div>
                                <p>Laranja</p>
                            </div>

                            <div class="linha-legenda">
                                <div class="cor-leg back-vermelho"></div>
                                <p>Vermelho</p>
                            </div>

                            <div class="linha-legenda">
                                <div class="cor-leg back-amarelo"></div>
                                <p>Amarelo</p>
                            </div>

                            <div class="linha-legenda">
                                Clique no mês para troca-lo.
        </div>

                        </div>



                    </div>

                </section>

                <section class="section-lista-eventos-pendentes">

                    <div class="tiulo-lista-eventos">
                        <h2>Eventos do dia 30 de mar, ter</h2>
                    </div>

                    <div class="lista-eventos-pendentes">

                        <div class="card-pendente">
                            <div class="foto-pendente"></div>
                            <div class="info">
                                <p class="titulo-info">A impotacia da diversidade</p>
                                <p class="data-info">ter, 30 de mar, 16:20</p>
                                <p class="comunidade-info">ThoughtWorks</p>
                            </div>

                            <div class="botoes">
                                <button class="rejeitar">
                                    <i class="fas fa-times"></i>
                                </button>
                                <button class="aceitar">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-pendente">
                            <div class="foto-pendente"></div>
                            <div class="info">
                                <p class="titulo-info">A impotacia da diversidade</p>
                                <p class="data-info">ter, 30 de mar, 16:20</p>
                                <p class="comunidade-info">ThoughtWorks</p>
                            </div>

                            <div class="botoes">
                                <button class="rejeitar">
                                    <i class="fas fa-times"></i>
                                </button>
                                <button class="aceitar">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-pendente">
                            <div class="foto-pendente"></div>
                            <div class="info">
                                <p class="titulo-info">A impotacia da diversidade</p>
                                <p class="data-info">ter, 30 de mar, 16:20</p>
                                <p class="comunidade-info">ThoughtWorks</p>
                            </div>

                            <div class="botoes">
                                <button>
                                    <i class="rejeitar fas fa-times"></i>
                                </button>
                                <button>
                                    <i class="aceitar fas fa-check"></i>
                                </button>
                            </div>
                        </div>






                    </div>

                </section>
            </div>
        );
    }

}
export default MeusEventos;