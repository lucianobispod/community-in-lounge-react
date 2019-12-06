import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';

// import 'moment-duration-format' ;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventosComunidades: [
                // {
                //     "eventoId": 6,
                //     "nome": "JavaScript para iniciantes",
                //     "eventoData": "2019-08-13T00:00:00",
                //     "horario": "19:00:00",
                //     "descricao": "Evento voltado para mulheres ",
                //     "emailContato": "contato@comunidade.com",
                //     "statusEvento": "Aprovado",
                //     "diversidade": "Sim",
                //     "coffe": "Sim",
                //     "foto": "url.foto",
                //     "urlEvento": "www.evento.com",
                //     "categoriaId": 1,
                //     "salaId": 2,
                //     "comunidadeId": 5,
                //     "categoria": {
                //         "categoriaId": 1,
                //         "nome": "Tec",
                //         "eventoTw": []
                //     },
                //     "comunidade": {
                //         "comunidadeId": 5,
                //         "nome": "{Reprograma}",
                //         "descricao": "Comunidade voltada apenas para mulheres com intesse em ingressar na área de tecnologia",
                //         "emailContato": "reprograma@contato.com",
                //         "telefoneContato": "1197865432",
                //         "foto": "url.foto",
                //         "responsavelUsuarioId": 1
                //     },
                //     "sala": {
                //         "salaId": 2,
                //         "nome": "Lounge ",
                //         "descricao": "Sala com capacidade para 25 pessoas. Contem televisão, sofás e alguns puffs, suficientes para acomodar todos sentados",
                //         "qntdPessoas": "25 participantes",
                //         "evento": [],
                //         "eventoTw": []
                //     },
                //     "responsavelEventoTw": []
                // }
            ],
            eventosThoughtworks: [
                // {
                // "eventoId": 1,
                // "nome": "Python para iniciantes",
                // "eventoData": "2019-12-19T00:00:00",
                // "horario": "19:30:00",
                // "descricao": "Evento direcionado para pessoas que não conhecem nada da linguagem Python",
                // "emailContato": "carla@gmail.com",
                // "publico": "sim",
                // "diversidade": "Não",
                // "coffe": "Sim",
                // "foto": "url",
                // "urlEvento": "url",
                // "categoriaId": 1,
                // "salaId": 1,
                // "categoria": {
                //     "categoriaId": 1,
                //     "nome": "Tec"
                // },
                // "sala": {
                //     "salaId": 1,
                //     "nome": "Sala de Reunião",
                //     "descricao": "Sala com capacidade para até 60 pessoas. Possui mesas, projetor, sofás e cadeiras",
                //     "qntdPessoas": "50 participantes",
                //     "evento": [],
                //     "eventoTw": []
                // }
                // }
            ]

        }
    }

    GetEventosComunidades = () => {

        axios.get('http://localhost:5000/api/evento')
            .then(resposta => {
                // const eventosComunidades = resposta.data;
                console.log("Comunidades", resposta.data)
                this.setState({ eventosComunidades: resposta.data });
            })
            .catch(err => console.log(err));
    }
    GetEventosThoughtworks = () => {

        axios.get('http://localhost:5000/api/EventoTw/public')
            .then(resposta => {
                // const eventosThoughtworks = resposta.data;
                console.log("Eventos Thought Works: ", resposta.data)
                this.setState({ eventosThoughtworks: resposta.data });
            })
            .catch(err => console.log(err));
        console.log(this.state.eventosThoughtworks);

    }

    // SetListaLocal() 
    // {
    //     let listaEventos = [

    //     ]
    // }

    componentDidMount() {
        this.GetEventosComunidades();
        this.GetEventosThoughtworks();
        console.log(this.state.eventosThoughtworks);

        console.log(moment.locale())
        console.log(moment.locale('pt-br'))
        console.log(moment.locale())
    }


    render() {
        return (
            <div>
                <section className="section_banner"></section>

                <main>
                    <section className="section_titulo_index">
                        <div className="mask_titulo">
                            <h1 className="titulo_index" id="titulo_home">Traga sua comunidade, faça seu evento.</h1>
                        </div>
                    </section>

                    <hr className="linha_banner" />

                    <section className="eventos_comunidade">
                        <div className="eventos_container">

                            <h2 className="titulo_eventos">Eventos das comunidades</h2>


                            <div className="list_card">


                                {
                                    this.state.eventosComunidades.map(function (evento) {
                                        return (
                                            <div className="card-main" key={evento.eventoId}>
                                                <div className="data-card-main">
                                                    <p>
                                                        {
                                                            // evento.eventoData
                                                            //  moment(evento.eventoData).format('llll') 
                                                        }
                                                    </p>
                                                </div>

                                                <div className="identificacao-card-main">
                                                    <p className="evento_titulo-card-main">{evento.nome}</p>
                                                    <p className="comuni_evento-card-main">{evento.comunidade.nome}</p>
                                                </div>
                                                <div className="box_parti-bot-card-main">
                                                    <p className="partici-card-main">{evento.sala.qntdPessoas}</p>
                                                    <div className="link-card-main">
                                                        <a href="#">Inscreva-se</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                {/* <div className="card-main">
                                    <div className="data-card-main">
                                        <p>ter, 30 de mar, 16:20</p>
                                    </div>

                                    <div className="identificacao-card-main">
                                        <p className="evento_titulo-card-main">A importância da diversidade </p>
                                        <p className="comuni_evento-card-main">ThoughtWorks</p>
                                    </div>
                                    <div className="box_parti-bot-card-main">
                                        <p className="partici-card-main">25 participantes</p>
                                        <div className="link-card-main">
                                            <a href="#">Inscreva-se</a>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="card-main">
                                    <div className="data-card-main">
                                        <p>ter, 30 de mar, 16:20</p>
                                    </div>

                                    <div className="identificacao-card-main">
                                        <p className="evento_titulo-card-main">A importância da diversidade </p>
                                        <p className="comuni_evento-card-main">ThoughtWorks</p>
                                    </div>
                                    <div className="box_parti-bot-card-main">
                                        <p className="partici-card-main">25 participantes</p>
                                        <div className="link-card-main">
                                            <a href="#">Inscreva-se</a>
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                        </div>
                    </section>

                    <section>

                        <div className="home_laranja">

                            <div className="eventos_container">

                                <div>

                                    <h3 className="home_titulo-tw titulo_eventos">Participe dos eventos ThougtWorks</h3>
                                </div>

                                <div className="list_card">

                                    {
                                        this.state.eventosThoughtworks.map(function (evento) {
                                            return (
                                                <div className="card-main" key={evento.eventoId}>
                                                    <div className="data-card-main">
                                                        <p>
                                                            {
                                                                // evento.eventoData
                                                                //    moment(evento.eventoData).format('llll')
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="identificacao-card-main">
                                                        <p className="evento_titulo-card-main">{evento.nome}</p>
                                                        <p className="comuni_evento-card-main">ThoughtWorks</p>
                                                    </div>
                                                    <div className="box_parti-bot-card-main">
                                                        <p className="partici-card-main">{evento.sala.qntdPessoas}</p>
                                                        <div className="link-card-main">
                                                            <a href="#">Inscreva-se</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {/* 

                                    <div className="card-main">
                                        <div className="data-card-main">
                                            <p>ter, 30 de mar, 16:20</p>
                                        </div>

                                        <div className="identificacao-card-main">
                                            <p className="evento_titulo-card-main">A importância da diversidade </p>
                                            <p className="comuni_evento-card-main">ThoughtWorks</p>
                                        </div>
                                        <div className="box_parti-bot-card-main">
                                            <p className="partici-card-main">25 participantes</p>
                                            <div className="link-card-main">
                                                <a href="#">Inscreva-se</a>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>


                            </div>
                        </div>



                    </section>





                    <section className="section_sobre">

                        <div className="container-geral_sobre">

                            <h2 className="titulo_sobre">Sobre nós</h2>

                            <div className="sobre_texto centro">
                                <p className="texto_p">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laborum similique, ratione beatae accusantium at quis laudantium! Voluptatibus adipisci harum qui atque, officia, quasi placeat non consectetur veniam, iusto facere. Lorem ipsum dolor
                                    sit amet consectetur, adipisicing elit. Repellendus laborum similique, ratione beatae accusantium at quis laudantium.
                                </p>
                            </div>


                            <a href="#" className="call_sobrenos">Saiba mais </a>
                        </div>

                    </section>

                    <hr className="linha-call-evento" />

                    <section className="call_evento">

                        <div className="box_call_evento">
                            <h4>Crie seu evento gratuitamente!</h4>
                            <a className="link_saiba_mais" href="#">Saiba mais</a>
                        </div>

                    </section>

                </main>
            </div>
        );
    }
}
export default Home;