import React, { Component } from 'react';
import './gerenciar-eventos.css';

class MeusEventos extends Component {
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
                                    <select name="" id="">
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

                            <div class="linha">

                                <div class="data-dia border-amarelo">1</div>
                                <div class="data-dia border-azul">2</div>
                                <div class="data-dia border-cinza">3</div>
                                <div class="data-dia border-laranja">4</div>
                                <div class="data-dia border-vermelho">5</div>
                                <div class="data-dia border-cinza">6</div>
                                <div class="data-dia border-cinza">7</div>
                                <div class="data-dia border-cinza">8</div>
                            </div>
                            <div class="linha">

                                <div class="data-dia border-cinza">9</div>
                                <div class="data-dia border-cinza">10</div>
                                <div class="data-dia border-cinza">11</div>
                                <div class="data-dia border-cinza">12</div>
                                <div class="data-dia border-cinza">13</div>
                                <div class="data-dia border-cinza">14</div>
                                <div class="data-dia border-cinza">15</div>
                                <div class="data-dia border-cinza">16</div>
                            </div>
                            <div class="linha">

                                <div class="data-dia border-cinza">17</div>
                                <div class="data-dia border-cinza">18</div>
                                <div class="data-dia border-cinza">19</div>
                                <div class="data-dia border-cinza">20</div>
                                <div class="data-dia border-cinza">21</div>
                                <div class="data-dia border-cinza">22</div>
                                <div class="data-dia border-cinza">23</div>
                                <div class="data-dia border-cinza">24</div>
                            </div>
                            <div class="linha">

                                <div class="data-dia border-cinza">25</div>
                                <div class="data-dia border-cinza">26</div>
                                <div class="data-dia border-cinza">27</div>
                                <div class="data-dia border-cinza">28</div>
                                <div class="data-dia border-cinza">29</div>
                                <div class="data-dia border-cinza">30</div>
                                <div class="data-dia border-cinza">31</div>
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