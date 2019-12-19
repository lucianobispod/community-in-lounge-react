import React, { Component } from 'react';
import "./editar-url.css"
import axios from 'axios';


class EditarUrl extends Component {

    constructor(props) {
        super(props);
        this.state = {

            evento: this.props.location.evento,
            url: '',
            errorMessage: ''
        }

    }

    UpStateUrl = (event) => {
        this.setState({ url: event.target.value });
        console.log(this.state.url);
        console.log(this.props);

    }

    editarEventoAprovado = (event) => {
        event.preventDefault();

        setTimeout(() => {
            if (this.state.evento == null) {
                this.setState({ errorMessage: 'Não foi possivel atualizar, tente mais tarde' })
            } else {

                axios.put('http://localhost:5000/api/Evento/' + this.state.evento.eventoId, {
                    eventoId: this.state.evento.eventoId,
                    nome: this.state.evento.nome,
                    eventoData: this.state.evento.eventoData,
                    horario: this.state.evento.horario,
                    descricao: this.state.evento.descricao,
                    emailContato: this.state.evento.emailContato,
                    statusEvento: this.state.evento.statusEvento,
                    diversidade: this.state.evento.diversidade,
                    coffe: this.state.evento.coffe,
                    foto: this.state.evento.foto,
                    urlEvento: this.state.url,
                    categoriaId: this.state.evento.categoriaId,
                    salaId: this.state.evento.salaId,
                    comunidadeId: this.state.evento.comunidadeId,
                })
                    .then(resposta => {
                        console.log(resposta, " asdasdasdasdasdasdasdasdasdss")
                        if (resposta.status === 200) {

                            window.location.href = '/Meuseventos';
                        }
                    })
                    .catch(error => console.log(error));
            }
        }, 250);
    }

    render() {
        return (
            <div className='section-editar-url'>
                <div className='container-titulo-url-evento'>
                    <h1>Editar evento</h1>
                </div>

                <div className='container-div-form-editar-url'>
                    <form className='form-editar-url' onSubmit={i => this.editarEventoAprovado(i)}>
                        <label>Url do evento</label>
                        <input className='input-editar-url' onChange={i => this.UpStateUrl(i)} type='text' />
                        <button
                            className='btn-editar-evento'
                            type='submit'>
                            Salvar
                        </button>
                    </form>
                </div>
                    {this.state.errorMessage}

                <button className='editar-url-btn-voltar' onClick={() => this.props.history.go(-1)}>
                    <i class="fas fa-times"></i>
                </button>

            </div>
        )
    }
}
export default EditarUrl;