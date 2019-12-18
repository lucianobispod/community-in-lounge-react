import React, { Component } from 'react';
import './gerenciar-eventos.css';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';

import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import { getUserIdAuthenticated } from '../../services/auth';
import { Link } from 'react-router-dom';

class MeusEventos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventos: [],
            mes: new Date().getMonth()+1,
        }

    }


    getEventos = () => {
        console.log("MES " + this.state.mes);

        var mes = this.state.mes;
        axios.get('http://localhost:5000/api/Evento/pendenteMes/' + mes)
            .then(respota => {
                this.setState({ eventos: respota.data });
                console.log(this.state.eventos)
            })
            .catch(error => console.error(error));

    }


    atualizaMes = (event) => {
        this.setState({ mes: event.target.value });
        setTimeout(() => {
            console.log(this.state.mes)
            this.getEventos();
        }, 150);
    }



    aceitarEvento = (event, id) => {
        event.preventDefault();

        console.log("ACEITAR EVENTO");
        var usuario = getUserIdAuthenticated().id;
        console.log("ID " + id);
        console.log("usus " + usuario);


        axios.post('http://localhost:5000/api/Evento/aceppt/' + id + '/' + usuario)
            .then(respota => {
                console.log(respota);
                console.log("FOOOOOOOOOOOOOOOI");

                console.log("PASSOU DO GET EVENTOS");
                this.getEventos()

            })
            .catch(error => console.error(error));

    }




    recusarEvento = (event, id) => {
        event.preventDefault();
        alert("recusar");
        var usuario = 2;
        console.log("usuario " + usuario);

        axios.post('http://localhost:5000/api/Evento/rejetc/' + id + '/' + usuario)
            .then(respota => {
                console.log(respota);
                console.log("FOOOOOOOOOOOOOOOiiiiii");
            })
            .then(this.getEventos())
            .catch(error => console.error(error));



    }




    componentDidMount() {
        this.getEventos();
        console.log("MES " + this.state.mes)
    }

    render() {
        return (
            <div>
                <HeaderAdministrador />
                <section class="section-calendario-info">

                    <div class="container-eventos-pendentes">

                        <div class="gerenciar-titulo">
                            <h1>Calendário</h1>
                        </div>

                        <div class="container-lista-data">
                            <div class="calendario-mes">
                                <form action="" >
                                    <select onChange={(e) => this.atualizaMes(e)} value={this.state.mes}>
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
                                    <i class="fas fa-angle-down calendario-seta"></i>
                                </form>

                            </div>


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
                        <h2>Eventos de {this.state.mes}</h2>
                    </div>

                    <div class="lista-eventos-pendentes">



                        {
                            this.state.eventos.length === 0 ? <h2>Não há eventos esse mês</h2> : this.state.eventos.map((evento) => {

                                return (
                                    <div class="card-pendente" key={evento.eventoId}>

                                        <div > <img class="foto-pendente" src={'http://localhost:5000/' + evento.foto} alt="" /> </div>
                                        {/* <Link to={'DescricaoEventoAdm/' + evento.eventoId}> */}

                                        <Link onClick={() => (console.log("id do card: ", this.props.id))} to={{
                                            pathname: "/DescricaoEventoAdm",
                                            id: evento.eventoId
                                        }}>

                                            <div class="info">
                                                <p class="titulo-info">{evento.nome}</p>
                                                <p class="data-info">{moment(evento.eventoData).format('llll')}</p>
                                                <p class="comunidade-info">{evento.comunidade.nome}</p>
                                            </div>
                                        </Link>

                                        <div class="botoes">
                                            <button class="rejeitar" onClick={i => this.recusarEvento(i, evento.eventoId)}>
                                                <i class="fas fa-times"></i>
                                            </button>
                                            <button class="aceitar" onClick={i => this.aceitarEvento(i, evento.eventoId)}>
                                                <i class="fas fa-check"></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>







                </section>
            </div>
        )
    }

}
export default MeusEventos;