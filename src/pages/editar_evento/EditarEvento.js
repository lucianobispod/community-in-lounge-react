import React, { Component } from 'react'; //importando objeto React
import '../../assets/imagens/banner.png';
import './EditarEvento.css'
import Axios from 'axios';

import { getUserIdAuthenticated } from '../../services/auth'
import { Redirect } from "react-router-dom";
import Evento from '../evento/Evento';


class EditarEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nome: '',
            Email_contato: '',
            Sala_id: null,
            Categoria_id: null,
            Coffe: '',
            Diversidade: '',
            Status: 'Pendente',
            Evento_data: '',
            Horario: '',
            Foto: React.createRef(),
            comunidadeId: '',
            Descricao: '',
            Url_evento: '',
            Lista_de_sala: [],
            Lista_de_Categoria: [],
            evento: this.props.location.evento
        }

    }

    //Atulizar o estado
    alteraEstado = (event) => {
        this.setState({
            evento: {
                ...this.state.evento,
                [event.target.name]: event.target.value
            }
        })

    }
    //Alterar os atributos do evento e foto
    alterarEvento = () => {
        Axios.put('http://localhost:5000/api/evento/' + this.state.evento.eventoId,
            this.evento
        ).then(resposta => {
            console.log("PUT " + resposta);
            if (resposta.status === 200) {

                this.uploadFoto(this.state.evento.eventoId);
            }
        })
            .catch(error => { console.log(error) })
    }


    uploadFoto = (id) => {
        let evento = new FormData();

        evento.set("imagem", this.state.fotoupdate.current.files[0]);

        Axios({
            method: 'put',
            url: 'http://localhost:5000/api/evento/' + id + '/uploadFoto',
            data: evento,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(resposta => {
                console.log("RESPOSTA DATA " + resposta.data);
                console.log("RESPOSTA STATUS " + resposta.status);
                if (resposta.status === 200) {

                    this.setState({
                        evento:
                        {
                            ...this.state.evento,
                            foto: resposta.data.foto
                        }
                    })
                }
            }).catch(error => console.log(error));
    }

    // previwImage = () => {

    //     var input = document.getElementById('per-img-input').files[0];

    //     var imagem = document.getElementById('com-img');

    //     const fileReader = new FileReader();

    //     fileReader.onloadend = () => {
    //         imagem.setAttribute('src', fileReader.result);
    //     }

    //     fileReader.readAsDataURL(input);

    // }


    getSala = () => {
        Axios.get('http://localhost:5000/api/Sala')
            .then(resposta => {
                this.setState({ Lista_de_sala: resposta.data });
                console.log("SALAs" + resposta);
                console.log(this.state.Lista_de_sala);

            })
            .catch(error => { console.log(error) });
    }


    getCategoria = () => {
        Axios.get('http://localhost:5000/api/Categoria')
            .then(resposta => {
                this.setState({ Lista_de_Categoria: resposta.data })
                console.log("CATEGORIA " + resposta);
                console.log(this.state.Lista_de_Categoria)
            })
            .catch(error => { console.log(error) });
    }

    atualizarEstadoNome = (event) => {
        this.setState({ Nome: event.target.value })
        console.log(this.state.Url_evento);
    }

    atualizarEstadoEmail_Contato = (event) => {
        this.setState({ Email_contato: event.target.value })
        console.log(this.state.Email_contato);
    }

    atualizarEstadoSala_id = (event) => {
        this.setState({ Sala_id: event.target.value })
        console.log(this.state.Sala_id);
    }

    atualizarEstadoCategoria_id = (event) =>{
        this.setState({ Categoria_id: event.target.value })
        console.log(this.state.Categoria_id)
    }

    atualizarEstadoCoffe = (event) => {
        this.setState({ Coffe: event.target.value })
        console.log(this.state.Coffe)
    }

    atualizarEstadoDiversidade = (event) =>{
        this.setState({ Diversidade: event.target.value })
        console.log(this.state.Diversidade)
    }

    atualizarEstadoEvento_Data = (event) => {
        this.setState({ Evento_data: event.target.value })
        console.log(this.state.Evento_data)
    }

    atualizarEstadoHorario = (event) => {
        this.setState({ Horario: event.target.value })
        console.log(this.state.Horario)
    }

    atualizarEstadoDescricao = (event) => {
        this.setState({ Descricao: event.target.value })
        console.log(this.state.Descricao)
    }
    atualizarEstadoUrl_evento = (event) => {
        this.setState({ Url_evento: event.target.value })
        console.log(this.state.Url_evento)
    }
    atualizarEstadoPublico = (event) => {
        this.setState({ Publico: event.target.value })
        console.log(this.state.Publico)
    }

    componentDidMount() {
        // this.getComunidade();
        this.getSala();
        this.getCategoria();

    }

    render() {
        return (
            <div>
                <main className="cad_even_main">
                    <section className="cad_even_section">

                        <div className="cad_container_color">
                            <div className="circle_cad top"></div>
                            <div className="circle_cad bottom"></div>
                        </div>
                        <div className="cad_container_form">
                            <div className="titulo_cad_evento">
                                <h1>Editar evento</h1>
                            </div>

                            <form className="cad_form" onSubmit={this.alterarEvento}>

                                <div className="campo_dados">
                                    <div>
                                        <label for="nome">Nome:</label>
                                        <input name="Nome" value={this.state.Nome} onChange={this.atualizarEstadoNome} className="cad_nome_usu" type="text" name="" id="nome" placeholder="Digite o nome do evento..." />
                                    </div>
                                    <div>
                                        <label for="email">Email:</label>
                                        <input name="Email_contato" value={this.state.Email_contato} onChange={this.atualizarEstadoEmail_Contato} className="cad_email" type="text" name="" id="email" placeholder="Email de contato com o responsável pelo evento" />
                                    </div>

                                </div>


                                <div className="campo_dados">
                                    <div>
                                        <label for="cad-participantes">Quantidade de participantes:</label>
                                        <select className="select_quant" name="participantes" id="cad-participantes">
                                            <option value=''>Selecione</option>

                                            {
                                                this.state.Lista_de_sala.map(function (sala) {
                                                    return (

                                                        <option key={sala.salaId} value={sala.salaId}>{sala.qntdPessoas}</option>
                                                    );

                                                }.bind(this))
                                            }
                                        </select>
                                    </div>

                                    <div>
                                        <label for="categorias">Selecione a categoria do evento:</label>
                                        <select className="select_cat" name="categorias" id="categorias">
                                            <option value=''>Selecione</option>
                                            {
                                                this.state.Lista_de_Categoria.map(function (categoria) {
                                                    return (
                                                        <option key={categoria.salaId} value={categoria.categoriaId}>{categoria.nome}</option>
                                                    );
                                                }.bind(this))
                                            }

                                        </select>

                                    </div>

                                </div>


                                <div className="campo_dados">
                                    <div>
                                        <label for="">O evento terá coffe?</label>
                                        <select className="select_coffe" name="coffe" id="cad-coffe">
                                            <option value="sel">Selecione</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>

                                    </div>


                                    <div>
                                        <label for="">Evento focado em diversidade?</label>
                                        <select  className="select_diversi" name="diversidade" id="cad-diversidada">
                                            <option value="sel">Selecione</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>
                                    </div>

                                </div>


                                <div className="campo_dados">
                                    <div>
                                        <label className="cad-label-date" for="select-data">Data:</label>
                                        <input value={this.state.Evento_data} onChange={this.atualizarEstadoEvento_Data}  name="Evento_Data"  className="cad-select-data" type="date" name="" id="appt_horario" />
                                    </div>

                                    <div>
                                        <label className="cad-label-hora" for="horario">Selecione o horário do evento:</label>
                                        <input value={this.state.Horario} onChange={this.atualizarEstadoHorario} name="Horario"  className="cad-select-hora" id="horario" type="time" name="appt" min="19:00" max="22:00" />
                                    </div>

                                </div>

                                <div className="campo_dados">
                                    <div>

                                        <label className="imagem-evento">Insira uma Imagem de capa para seu evento:</label>

                                        <input name="Foto" ref={this.state.Foto} className="cad_select_img" type="file" name="Foto" />

                                    </div>

                                    <div className="div_small_url">
                                        <div>
                                            <label for="url_cad">Url de cadastro:</label>
                                        </div>
                                        <input className="url_cad_input" value={this.state.Url_evento} onChange={this.atualizarEstadoUrl_evento} name="Url_evento"  className="cad_input_url" type="text" name="" id="url_cad" placeholder="URL para cadastro" />
                                        <small className="small_url">Se já tiver um link de inscrição, insira aqui. Se não tiver, você pode incluir depois que evento for aprovado também.</small>
                                    </div>

                                    {/* <div>
                                        <label for="">Evento privado?</label>
                                        <select onChange={i => this.atualizarEstadoPublico(i)} className="select_diversi" name="privado" id="cad-privado">
                                            <option value="sel">Selecione</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>
                                    </div> */}

                                </div>


                                <div className="campo_dados">
                                    <div className="campo_miniblock1">
                                        <label className="cad-label-descricao">Faça uma breve descrição sobre o evento:</label>
                                        <textarea value={this.state.Descricao} onChange={this.atualizarEstadoDescricao}  className="cad-textarea" name="descricao-evento" id="desc-eve" cols="45" rows="10"
                                        ></textarea>
                                    </div>
                                </div>


                                <div className="campo_dados">

                                    <div className="div_botao">
                                        <button type="submit" className="cad-btn-cadastrar-evento">Salvar</button>
                                    </div>
                                </div>


                            </form>

                        </div>
                    </section>
                </main>

            </div>


        )

    }
}

export default EditarEvento;