import React, { Component } from "react";
import './eventogerais.css'
import Footer from '../../components/footer/Footer';
import HeaderDefault from '../../components/header/default/HeaderDefault';
import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import moment from 'moment';
import 'moment/locale/pt-br';

import axios from "axios";
import { isAuthenticated, parseToken } from '../../services/auth';
import { Link } from "react-router-dom";

class EventosGerais extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
            categorias: [],
            eventoslistaFiltrada: [],
            token: '',
            acesso: '',
            quantidade: 3,
            botao: true,
            idCategoria: ''
        }

    }


    verMais = () => {
        let botao = document.getElementById('egbvm');

        console.log(this.state.botao)
        console.log(this.state.quantidade)
        if (this.state.botao) {
            this.setState({ quantidade: this.state.eventos.length })
            this.setState({ botao: false })
            botao.innerHTML = 'Ver menos'
        } else {
            
            botao.innerHTML = 'Ver mais'
            this.setState({ botao: true })
            this.setState({ quantidade: 3 })
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
                this.setState({ eventoslistaFiltrada: resposta.data });
            }).catch(error => console.log(error))
    }




    filtrarCategorias = (id) => {
        var lisaEventos = this.state.eventos;


        var listaFiltrada = lisaEventos.filter((value, index, arr) => {
            if (lisaEventos[index].categoriaId == id) {
                return lisaEventos[index];
            }

        })

        this.setState({ eventoslistaFiltrada: listaFiltrada })
    }






    atualizaCategoria = (event) => {
        console.log(event.target.value);
        console.log(event.target.value == 0);

        if (event.target.value == 0) {
            this.setState({ eventoslistaFiltrada: this.state.eventos })
        } else {
            var id = [event.target.value]
            setTimeout(() => {
                this.filtrarCategorias(id);
            }, 500);
        }


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


    render() {
        return (
            <div>
                {this.state.token === false ? (<HeaderDefault />) : this.state.acesso === 'Administrador' ? <HeaderAdministrador /> : (< HeaderUsuario />)}

                <main className="EventosGerais__main">






                    <div className="EventosGerais_titulo_select">
                        <h1> Eventos Gerais</h1>
                        <select className='select-categoria' onChange={i => this.atualizaCategoria(i)}>
                            <option value={0}>Todos</option>
                            {
                                this.state.categorias.map(function (categoria) {
                                    return (

                                        <option value={categoria.categoriaId}>{categoria.nome}</option>
                                    )
                                })
                            }
                        </select>
                    </div>


                    <section className="EventosGerais__secao">

                        <div className="EventosGerais__container">

                            {
                               this.state.eventoslistaFiltrada.length === 0 ? <h2>Não há eventos</h2> : this.state.eventoslistaFiltrada.slice(0, this.state.quantidade).map((evento) => {

                                    return (
                                        
                                        <div className="EventosGerais__card">
                                            <Link onClick={() => (console.log("id do card: ", this.props.id))} to={{
                                                pathname: "/Descricao",
                                                id: evento.eventoId
                                            }}>
                                                <div >
                                                    <img className="EventoGerais__foto" alt='' src={'http://localhost:5000/' + evento.foto} />
                                                </div>
                                        </Link>
                                                <div className="EventosGeraos__info">
                                                    <p className="EventoGerais__titulo-info">{evento.nome}</p>
                                                    <p className="EventoGerais__data-info">{moment(evento.eventoData).format('llll')}</p>
                                                    <div className='EventoGerais-container-comu-btn'>
                                                        <p className="EventoGerais__comunidade-info">{evento.comunidade.nome}</p>
                                                        <a className='EventoGerais__link-inscrevase'>Inscreva-se</a>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })
                            }

                        </div>
                    </section>
                </main>

                <div className='EventoGerais-container-button'>
                    <button id='egbvm' className='EventoGerais-button-vermais' type='button' onClick={i => this.verMais()}>
                        Ver mais
                    </button>
                </div>

                <Footer />
            </div>
        )
    }
}
export default EventosGerais;