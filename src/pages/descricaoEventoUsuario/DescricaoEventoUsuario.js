import React, { Component } from "react";
import '../descricaoEventoUsuario/descricaoEventoUsuario.css'
import Axios from "axios";
import moment from 'moment'
import 'moment/locale/pt-br'

class DescricaoEventoUsuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // id: this.props.location.id,
            evento: {
                comunidade: {
                    responsavelUsuario: {

                    }

                },
                sala: {

                },


                categoria: {

                }


            }

        }
    }


    GetEvento = () => {


        console.log(this.props);
        let id = localStorage.getItem('idEvento')
        Axios.get('http://localhost:5000/api/evento/' + id)
            .then(resposta => {
                console.log(resposta)
                this.setState({ evento: resposta.data })
                console.log(this.state.evento.comunidade.nome)
            })
            .catch(err => console.log(err))
  
        }

  

setIdEventAndGetEventInfo = () => {
    console.log(this.props.location.id)
    if (this.props.location.id) {
        localStorage.setItem('idEvento', this.props.location.id)
    }
    this.GetEvento();
}


    async componentDidMount() {
        this.setIdEventAndGetEventInfo();
        // await this.GetEvento();
    }




    render() {
        return (
            <div>
                <main>

                    {/* Box1, contém foto e publicação do usuário  */}

                    <div className="box1_descricaoEvento_usuario">
                        <div className="box1parte1_descricaoEvento_usuario">
                            <div className="foto_descricaoEvento_usuario">
                                <img src="imagens/Juliana Oliveira.png" alt="" />
                            </div>

                            <div className="respon_descricaoEvento_usuario">
                                <p className="Cordenador_descricaoEvento_usuario">Coordenado por: {this.state.evento.comunidade.responsavelUsuario.nome}</p>
                                <p className="Comunidade_descricaoEvento_usuario">Comunidade: {this.state.evento.comunidade.nome}</p>
                                <p className="Categoria_descricaoEvento_usuario">Categoria: {this.state.evento.categoria.nome}</p>

                            </div>
                        </div>
                        <div className="box1parte2_descricaoEvento_usuario">
                            <div className="midias_sociais_descricaoEvento_usuario">
                                <p>Compartilhe:</p>

                                <ul className="share">


                                    <a href="http://facebook.com.br"> <img className="icone" src="imagens/029 -facebook.png"
                                        alt="ícone do facebook" /></a>
                                    <a href="http://instagram.com.br"> <img className="icone" src="imagens/025 -instagram.png"
                                        alt="ícone do instagram" /></a>
                                    <a href="http://twitter.com.br"> <img className="icone" src="imagens/043-twitter.png"
                                        alt="ícone do twitter" /></a>
                                    <a href="http://linkdin.com.br"> <img className="icone" src="imagens/045-linkedin.png"
                                        alt="ícone do linkdin" /></a>

                                </ul>

                            </div>
                        </div>

                    </div>

                    {/* Fim do Box1 */}
                    <section className="secao_descricaoEvento_usuario">

                        {/* Descrição do Evento */}
                        <div className="descricao_descricaoEvento_usuario">

                            {/* Texto e título da descrição evento  */}
                            <div className="texto_descricaoEvento_usuario">

                                <div className="banner_descricaoEvento_usuario">
                                    <img src={'http://localhost:5000/'+this.state.evento.foto} alt="" />
                                </div>

                                <div className="titulo_descricaoEvento_usuario">
                                    <h2>Descrição</h2>
                                </div>

                                <div className="paragrafo_descricaoEvento_usuario">
                                    <h3>{this.state.evento.nome}</h3>
                                    <p>{this.state.evento.descricao}</p>
                                </div>

                            </div>
                            {/* Fim do Texto e título da descrição evento  */}

                        </div>
                        {/* Fim da Descrição Evento  */}

                        <div className="informacoes_descricaoEvento_usuario">

                            <div className="infor_geral_descricaoEvento_usuario">

                                <div className="foto_comunidade_descricaoEvento_usuario">

                                    <div className="foto2_descricaoEvento_usuario">
                                        <img src="imagens/FotoPerfil.jpg" alt="" />
                                    </div>

                                </div>

                                <div className="descri_inf_descricaoEvento_usuario">

                                    <p className="Comunidade_descricaoEvento_usuario">Comunidade: {this.state.evento.comunidade.nome}</p>
                                    <p className="Tipo_descricaoEvento_usuario">Tipo do Evento: Privado</p>

                                </div>

                            </div>

                            <div className="end-maps_descricaoEvento_usuario">

                                <iframe className="maps_descricaoEvento_usuario"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3279061044573!2d-46.66348088502224!3d-23.5566638846853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd6d0340c1%3A0xb82b9c6071314983!2sThoughtWorks!5e0!3m2!1spt-BR!2sbr!4v1572437937086!5m2!1spt-BR!2sbr"
                                    frameborder="0" allowfullscreen=""></iframe>

                            </div>

                            <div className="contatos2_descricaoEvento_usuario">

                                <div className="logo1_descricaoEvento_usuario">
                                    <i className="far fa-clock logo-1"></i>
                                </div>

                                <div className="data_e_horario_descricaoEvento_usuario">
                                    <p className="data_e_horario">{moment(this.state.evento.eventoData).format('LL')} ás {this.state.evento.horario} </p>
                                </div>

                            </div>

                            <div className="contatos3_descricaoEvento_usuario">

                                <div className="logo2_descricaoEvento_usuario">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>

                                <div className="localizacao_descricaoEvento_usuario">
                                    <p className="local_descricaoEvento_usuario">Av. Paulista, 2300 - Conjunto 41 - Bela Vista, SãoPaulo - SP</p>
                                </div>

                            </div>

                        </div>

                    </section>

                </main>

            </div>
        );
    }

}

export default DescricaoEventoUsuario;