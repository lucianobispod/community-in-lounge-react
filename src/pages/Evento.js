import React, { Component } from 'react'; //importando objeto React 
import img from '../assets/imagens/banner.png';
import '../assets/css/style.css'

import Axios from 'axios';


class Evento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nome: '',
            Email_contato: '',
            Sala_id: '',
            Categoria_id: '',
            Coffe: '',
            Diversidade: '',
            Evento_data: '',
            Horario: '',
            Foto: '',
            Publico: '',
            // Descricao: ''
            Url_evento: '',
            Lista_de_sala: [],
            Lista_de_Categoria: []
        }


    }

    efetuarCadastro(event) {
        event.preventDefault()

        Axios.post('http://localhost:5000/api/Evento', {
            Nome: this.state.nome,
            Email_contato: this.state.Email_contato,
            Sala_id: this.state.Sala_id,
            Categoria_id: this.state.Categoria_id,
            Coffe: this.state.Coffe,
            Diversidade: this.state.Diversidade,
            Evento_data: this.state.Evento_data,
            Horario: this.state.Horario,
            Foto: this.state.Foto,
            Publico: this.state.Publico,
            Descricao: this.state.Descricao,
            Url_evento: this.state.Url_evento
        }).then(resposta => console.log(resposta))
            .catch(error => console.log(error))
    }


    getSala = () => {
        Axios.get('http://localhost:5000/api/Sala')
            .then(resposta => {
                this.setState({Lista_de_sala : resposta.data });
                console.log(resposta);
        console.log(this.state.Lista_de_sala);

            })
            .catch(error => { console.log(error) });
    }




    // Funcao que recebe os valores do input e coloca na variavel
    atualizarEstadoNome(event) {
        this.setState({ Nome: event.target.value })
        console.log(this.state.Url_evento);
    }

    atualizarEstadoEmail_Contato(event) {
        this.setState({ Email_contato: event.target.value })
        console.log(this.state.Email_contato);
    }

    atualizarEstadoSala_id(event) {
        this.setState({ Sala_id: event.target.value })
        console.log(this.state.Sala_id);
    }

    atualizarEstadoCategoria_id(event) {
        this.setState({ Categoria_id: event.target.value })
        console.log(this.state.Categoria_id)
    }

    atualizarEstadoCoffe(event) {
        this.setState({ Coffe: event.target.value })
        console.log(this.state.Coffe)
    }

    atualizarEstadoDiversidade(event) {
        this.setState({ Diversidade: event.target.value })
        console.log(this.state.Diversidade)
    }

    atualizarEstadoEvento_Data(event) {
        this.setState({ Evento_Data: event.target.value })
        console.log(this.state.Evento_data)
    }

    atualizarEstadoHorario(event) {
        this.setState({ Horario: event.target.value })
        console.log(this.state.Horario)
    }

    atualizarEstadoFoto(event) {
        this.setState({ Foto: event.targer.value })
        console.log(this.state.Foto)
    }

    atualizarEstadoDescricao(event) {
        this.setState({ Descricao: event.target.value })
        console.log(this.state.Descricao)
    }
    atualizarEstadoUrl_evento(event) {
        this.setState({ Url_evento: event.target.value })
        console.log(this.state.Url_evento)
    }

    componentDidMount() {
        this.getSala();
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
                                <h1>Cadastrar novo evento</h1>
                            </div>

                            <form onSubmit={this.efetuarCadastro.bind(this)} className="cad_form" action="">
                                <div className="campo_dados">
                                    <div>
                                        <label for="nome">Nome:</label>
                                        <input name="Nome" value={this.state.Nome} onChange={this.atualizarEstadoNome.bind(this)} className="cad_nome_usu" type="text" name="" id="nome" placeholder="Digite o nome do evento..." />
                                    </div>
                                    <div>
                                        <label for="email">Email:</label>
                                        <input name="Email_contato" value={this.state.Email_contato} onChange={this.atualizarEstadoEmail_Contato.bind(this)} className="cad_email" type="text" name="" id="email" placeholder="Email de contato com o responsável pelo evento" />
                                    </div>

                                </div>
                                {/* <div className="campo_dados">
                        <div>
                            <small>Se já tiver um link de inscrição, insira aqui, se não tiver você pode incluir depois
                                do evento ser aprovado também.</small>
                            <input className="cad_url" type="text" name="" id="" placeholder="URL para cadastro"/>
                        </div>


                    </div>  */}
                                <div className="campo_dados">
                                    <div>
                                        <label for="cad-participantes">Quantidade de participantes:</label>
                                        <select className="select_quant" name="participantes" id="cad-participantes">
                                            {
                                                this.state.Lista_de_sala.map(function(sala) {
                                                    return(

                                                        <option value={sala.salaId}>{sala.qntdPessoas}</option>
                                                    );

                                                }.bind(this))
                                            }
                                        </select>
                                    </div>

                                    <div>
                                        <label for="categorias">Selecione a categoria do evento:</label>
                                        {/* <select className="select_cat" name="categorias" id="categorias">
                                            {
                                                this.state.Lista_de_Categoria.map(function(lista){
                                                
                                                <option value={lista.listaId}>{ lista.listaNome}</option>
                                                
                                                
                                                }.bind(this))                                                )
                                            }
                                        </select> */}
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

                                    {/* <div className="cad-box-cat"> 
                         <label className="cad-label-cat" for="categorias">Categorias</label>  */}
                                    <div>
                                        <label for="">Evento focado em diversidade?</label>
                                        <select className="select_diversi" name="diversidade" id="cad-diversidada">
                                            <option value="sel">Selecione</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="campo_dados">
                                    <div>
                                        <label className="cad-label-date" for="select-data">Data:</label>
                                        <input name="Evento_Data" value={this.state.Evento_Data} onChange={this.atualizarEstadoEvento_Data.bind(this)} className="cad-select-data" type="date" name="" id="appt_horario" />
                                    </div>

                                    <div>
                                        <label className="cad-label-hora" for="horario">Selecione o horário do evento:</label>
                                        <input name="Horario" value={this.state.Horario} onChange={this.atualizarEstadoHorario.bind(this)} className="cad-select-hora" id="horario" type="time" name="appt" min="19:00" max="22:00" />
                                    </div>

                                </div>

                                <div className="campo_dados">
                                    <div>

                                        <label className="imagem-evento">Insira uma Imagem de capa para seu evento:</label>
                                        <input name="Foto" value={this.state.Foto} onChange={this.atualizarEstadoFoto.bind(this)} className="cad_select_img" type="file" name="pic" accept="image/*" />

                                    </div>
                                    <div>
                                        <label for="">Evento privado?</label>
                                        <select className="select_diversi" name="diversidade" id="cad-diversidada">
                                            <option value="sel">Selecione</option>
                                            <option value="Sim">Sim</option>
                                            <option value="Não">Não</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="campo_dados">
                                    <div>
                                        <label className="cad-label-descricao">Faça uma breve descrição sobre o evento:</label>
                                        <textarea className="cad-textarea" name="descricao-evento" id="desc-eve" cols="45" rows="10"
                                        ></textarea>
                                    </div>
                                    <div className="div_small_url">
                                        <div>
                                            <label for="url_cad">Url de cadastro:</label>
                                        </div>
                                        <input name="Url_evento" value={this.state.Url_evento} onChange={this.atualizarEstadoUrl_evento.bind(this)} className="cad_input_url" type="text" name="" id="url_cad" placeholder="URL para cadastro" />
                                        <small className="small_url">Se já tiver um link de inscrição, insira aqui. Se não tiver, você pode incluir depois
                                que evento for aprovado também.</small>

                                    </div>
                                </div>
                                <div className="campo_dados">

                                    <div className="div_botao">
                                        <button type="submit" className="cad-btn-cadastrar-evento">Cadastrar</button>
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

export default Evento;