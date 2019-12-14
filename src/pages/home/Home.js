import React from 'react'
import '../home/home.css'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eventosComunidades: [],
            eventosThoughtworks: []
        }
        this.GetEventosComunidades = this.GetEventosComunidades.bind(this)
        this.GetEventosThoughtworks = this.GetEventosThoughtworks.bind(this)
    }

    GetEventosComunidades(){
        axios.get('http://localhost:5000/api/evento')
            .then(resposta => {
                // const eventosComunidades = resposta.data;
                console.log("Comunidades", resposta.data)
                if(resposta.status === 200)
                this.setState({ eventosComunidades: resposta.data })
            })
            .catch(err => console.log(err))
    }

    GetEventosThoughtworks() {

        axios.get('http://localhost:5000/api/EventoTw/public')
            .then(resposta => {
                // const eventosThoughtworks = resposta.data;
                if(resposta.status === 200){

                    this.setState({ eventosThoughtworks: resposta.data })
                }
            })
            .catch(err => console.log(err))
        console.log(this.state.eventosThoughtworks)

    }

    async componentDidMount() {
        await this.GetEventosComunidades()
        await this.GetEventosThoughtworks()
    }


    render() {
       
        return (
            <div>
                <section className="section_banner"></section>
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
                                    this.state.eventosComunidades.map( (eventos) => {
                                        return (
                                            <div className="card-main" key={eventos.eventoId}>
                                                <div className="data-card-main">
                                                    <p>
                                                        {
                                                            moment(eventos.eventoData).format('llll') 
                                                        }
                                                    </p>
                                                </div>

                                                <div className="identificacao-card-main">
                                                    <p className="evento_titulo-card-main">{eventos.nome}</p>
                                                    <p className="comuni_evento-card-main">{eventos.comunidade.nome}</p>
                                                </div>
                                                <div className="box_parti-bot-card-main">
                                                    <p className="partici-card-main"></p>
                                                    <div className="link-card-main">
                                                        <a href="#">Inscreva-se</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }, this)
                                }

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
                                        this.state.eventosThoughtworks.map( (evento) => {
                                        return(
                                            <div className="card-main" key={evento.eventoId}>
                                                    <div className="data-card-main">
                                                        <p></p>
                                                    </div>

                                                    <div className="identificacao-card-main">
                                                        <p className="evento_titulo-card-main"></p>
                                                        <p className="comuni_evento-card-main">ThoughtWorks</p>
                                                    </div>
                                                    <div className="box_parti-bot-card-main">
                                                        <p className="partici-card-main"></p>
                                                        <div className="link-card-main">
                                                            <a href="#">Inscreva-se</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    })
                                    }

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
            </div>
        )
    }
}
export default Home