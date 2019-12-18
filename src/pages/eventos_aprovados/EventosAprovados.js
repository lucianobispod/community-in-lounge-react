import React, { Component } from 'react';
import './EventosAprovados.css';

import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import axios from 'axios';
import { getUserIdAuthenticated } from '../../services/auth';

import moment from 'moment';
import 'moment/locale/pt-br';

class EventosAprovados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaaprovados: [],
            id: '',
            quantidade: 1,
            botao: true
        }
    }

    getEventosAprovados() {
        axios.get('http://localhost:5000/api/Evento/Aprovados/' + this.state.id)
            .then(resposta => {
                this.setState({ listaaprovados: resposta.data });
                console.log(this.state.listaaprovados);
            })
            .catch(error => console.log(error))
    }



    excluirEvento  = (event, id) => {
        axios.delete('http://localhost:5000/api/Evento/'+ id +'/DeleteByAdministrador')
        .then(resposta => {
            console.log(resposta);
            this.getEventosAprovados();
        })
        .catch(error => console.log(error))
    }

    verMais=() => {
        console.log(this.state.botao)
        console.log(this.state.quantidade)
        if (this.state.botao) {
            
            this.setState({quantidade: this.state.listaaprovados.length})
            this.setState({botao: false})
        }else{
            
            this.setState({botao: true})
            this.setState({quantidade: 1})
        }
    
    }


    componentDidMount() {

        this.setState({ id: getUserIdAuthenticated().id })

        setTimeout(() => {
            this.getEventosAprovados();
        }, 250);
    }

    render() {
        return (
            <div>
                <HeaderAdministrador />
                <main>
                    <section className="sessao-aprovados">
                        <div className="caixa-titulo-aprovados">
                            <h1 className='titulo'>Meus eventos Aprovados</h1>
                        </div>

                        <div className="container-eventos-aprovados">

                            {
                                this.state.listaaprovados.slice(0,this.state.quantidade).map(function (evento) {
                                    return (
                                        <div className="card-aprovado">
                                            <div>
                                                <img className="foto-aprovado" alt='Foto da comunidade' src={'http://localhost:5000/' + evento.foto}/>
                                            </div>

                                            <div className="info-evento-aprovado">

                                                <p className="titulo-info">{evento.nome}</p>
                                                <p className="data-info">{moment(evento.eventoData).format('llll')}</p>
                                                <p className="comunidade-info">{evento.comunidade.nome}</p>
                                                
                                            </div>
                                            <button className="button-excluir" type='button' onClick={i=> this.excluirEvento(i,evento.nome)}>
                                            <i className="fas fa-times ev-apr-excluir"></i>
                                            </button>
                                        </div>
                                    );
                                })
                            }

                            <button type='button' onClick={i => this.verMais()}>Ver Mais</button>


                        </div>
                    </section>
                </main>
            </div>
        )
    }


}
export default EventosAprovados;