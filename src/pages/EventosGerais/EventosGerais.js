import React, { Component } from "react";
import './eventogerais.css'
import Footer from '../../components/footer/Footer';
import HeaderDefault from '../../components/header/default/HeaderDefault';
import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';


import axios from "axios";
import { isAuthenticated, parseToken } from '../../services/auth';
import { Link } from "react-router-dom";

class EventosGerais extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
            categorias: [],
            token: '',
            acesso: '',
            quantidade: 1,
            botao: true,
            idCategoria: ''
        }

    }
    verMais = () => {
        console.log(this.state.botao)
        console.log(this.state.quantidade)
        if (this.state.botao) {

            this.setState({ quantidade: this.state.eventos.length })
            this.setState({ botao: false })
        } else {

            this.setState({ botao: true })
            this.setState({ quantidade: 1 })
        }

    }



    getCategoria = () => {
        axios.get('http://localhost:5000/api/Categoria')
            .then(resposta => {
                this.setState({ categorias: resposta.data })
                console.log("CATEGORIAs " + resposta.data);
            })
            .catch(error => { console.log(error) });
    }

    getEventos = () => {
        axios.get('http://localhost:5000/api/Evento')
            .then(resposta => {
                this.setState({ eventos: resposta.data });
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.getEventos();
        this.getCategoria();

        this.setState({ token: isAuthenticated() })

        if (isAuthenticated()) {

            this.setState({ acesso: parseToken().Roles })
            console.log("acesso " + parseToken().Roles);
        }
    }


    atualizaCategoria = (event) => {
        this.setState({ idCategoria: event.target.value })

        console.log(this.state.idCategoria);
    }

    render() {
        return (
            <div>
                {this.state.token === false ? (<HeaderDefault />) : this.state.acesso === 'Administrador' ? <HeaderAdministrador /> : (< HeaderUsuario />)}

                <main className="EventosGerais__main">


                    <select onChange={i => this.atualizaCategoria(i)}>
                        <option>Selecione</option>
                        {
                            this.state.categorias.map(function (categoria) {
                                return (

                                    <option value={categoria.categoriaId}>{categoria.nome}</option>
                                )
                            })
                        }
                    </select>



                    <section className="EventosGerais__secao">
                        <div className="EventosGerais_titulo">
                            <h1> Eventos Gerais</h1>
                        </div>
                        <div className="EventosGerais__container">

                            {
                                this.state.eventos.slice(0, this.state.quantidade).map((evento) => {

                                    return (
                                        <Link onClick={() => (console.log("id do card: ", this.props.id))} to={{
                                            pathname: "/Descricao",
                                            id: evento.eventoId
                                        }}>

                                            <div className="EventosGerais__card">
                                                <div >
                                                    <img className="EventoGerais__foto-pendente" alt='' src={'http://localhost:5000/' + evento.foto} />
                                                </div>
                                                <div className="EventosGeraos__info">
                                                    <p className="EventoGerais__titulo-info">{evento.nome}</p>
                                                    <p className="EventoGerais__data-info">{evento.eventoData}</p>
                                                    <p className="EventoGerais__comunidade-info">{evento.comunidade.nome}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </section>
                    <button type='button' onClick={i => this.verMais()}>Ver Mais</button>

                </main>
                <Footer />
            </div>
        )
    }
}
export default EventosGerais;