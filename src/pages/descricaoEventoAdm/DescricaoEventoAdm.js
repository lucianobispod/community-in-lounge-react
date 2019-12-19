import React, { Component } from 'react';
import '../descricaoEventoAdm/descricaoEventoAdm.css';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import HeaderDefault from '../../components/header/default/HeaderDefault';
import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';

import { isAuthenticated, parseToken } from '../../services/auth';

class DescricaoEventoAdm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.id,
            evento: {
                comunidade: {
                    responsavelUsuario: {

                    }
                },
                sala: {

                },
                categoria: {

                },
                token: '',
                acesso: ''

            }

        }
    }

    GetEvento = () => {

        let id = localStorage.getItem('idEvento')
        axios.get('http://localhost:5000/api/evento/' + id)
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
        await this.setIdEventAndGetEventInfo();
        this.setState({ token: isAuthenticated() })

        if (isAuthenticated()) {

            this.setState({ acesso: parseToken().Roles })
            console.log("acesso " + parseToken().Roles);
        }
    }


    render() {

        return (
            <div>
                {(this.state.token === false) ? (<HeaderDefault />) : (this.state.acesso === 'Administrador') ? (<HeaderAdministrador />) : (< HeaderUsuario />)}

                <main>
                    <div class="box1_descricaoEvento_adm">
                        <div class="box1parte1_descricaoEvento_adm">
                            <div class="foto_descricaoEvento_adm">
                                <img src={'http://localhost:5000/' + this.state.evento.comunidade.responsavelUsuario.foto} alt="" />
                            </div>

                            <div class="respon_descricaoEvento_adm">
                                <p class="Cordenador_descricaoEvento_adm">Coordenado por: {this.state.evento.comunidade.responsavelUsuario.nome}</p>
                                <p class="Comunidade_descricaoEvento_adm">Comunidade: {this.state.evento.comunidade.nome}</p>
                                <p class="Categoria_descricaoEvento_adm">Categoria: {this.state.evento.categoria.nome}</p>

                            </div>
                        </div>
                        <div class="box1parte2_descricaoEvento_adm">
                            <div class="midias_sociais_descricaoEvento_adm">
                                <p>Compartilhe:</p>

                                <ul class="share">
                                    <a href="https://www.facebook.com/ThoughtWorks"> <i class="fab fa-facebook-square"></i> </a>
                                    <a href="https://www.instagram.com/thoughtworks/"> <i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/thoughtworks"> <i class="fab fa-twitter-square"></i></a>
                                    <a href="https://www.linkedin.com/company/thoughtworks"> <i class="fab fa-linkedin"></i></a>
                                </ul>

                            </div>
                        </div>

                    </div>

                    {/* Fim do Box1 */}

                    <section class="secao_descricaoEvento_adm">
                        {/* Descrição do Evento */}
                        <div class="descricao_descricaoEvento_adm">
                            {/* Texto e título da descrição evento */}
                            <div class="texto_descricaoEvento_adm">
                                <div class="banner_descricaoEvento_adm">
                                    <img src={'http://localhost:5000/' + this.state.evento.foto} alt="" />
                                </div>
                                <div class="titulo_descricaoEvento_adm">
                                    <h2>Descrição</h2>
                                </div>
                                <div class="paragrafo_descricaoEvento_adm">

                                    <h3>{this.state.evento.nome}</h3>
                                    <p>{this.state.evento.descricao}</p>
                                </div>
                            </div>
                            {/* Fim do Texto e título da descrição evento */}
                        </div>
                        {/* Fim da Descrição Evento */}

                        <div class="informacoes_descricaoEvento_adm">
                            <div class="infor_geral_descricaoEvento_adm">
                                <div class="foto_comunidade_descricaoEvento_adm">
                                    <div class="foto2_descricaoEvento_adm">
                                        <img src={'http://localhost:5000/' + this.state.evento.comunidade.foto} alt="" />
                                    </div>
                                </div>
                                <div class="descri_inf_descricaoEvento_adm">
                                    <p class="Comunidade_descricaoEvento_adm">Comunidade: {this.state.evento.comunidade.nome}</p>
                                    <p class="Tipo_descricaoEvento_adm">Contato: {this.state.evento.comunidade.emailContato}</p>
                                </div>
                            </div>

                            <div class="end-maps_descricaoEvento_adm">
                                <iframe class="maps_descricaoEvento_adm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3279061044573!2d-46.66348088502224!3d-23.5566638846853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd6d0340c1%3A0xb82b9c6071314983!2sThoughtWorks!5e0!3m2!1spt-BR!2sbr!4v1572437937086!5m2!1spt-BR!2sbr"
                                    frameborder="0" allowfullscreen=""></iframe>
                            </div>

                            <div class="contatos2_descricaoEvento_adm">

                                <div class="logo1_descricaoEvento_adm">
                                    <i class="far fa-clock logo-1"></i>
                                </div>
                                <div class="data_e_horario_descricaoEvento_adm">
                                    {/* ás {this.state.evento.horario} */}
                                    <p class="data_e_horario">{moment(this.state.evento.eventoData).format('LL')} ás {this.state.evento.horario} </p>
                                </div>
                            </div>

                            <div class="contatos3_descricaoEvento_adm">
                                <div class="logo2_descricaoEvento_adm">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="localizacao_descricaoEvento_adm">
                                    <p class="local_descricaoEvento_adm">Av. Paulista, 2300 - Conjunto 41 - Bela Vista, São Paulo - SP</p>
                                </div>

                            </div>

                            <div class="contatos4_descricaoEvento_adm">
                                <div class="logo3_descricaoEvento_adm">
                                    <i class="fas fa-coffee"></i>
                                </div>
                                <div class="localizacao_descricaoEvento_adm">
                                    <p class="coffe_descricaoEvento_adm">Coffee: {this.state.evento.coffe} </p>
                                </div>

                            </div>

                            <div class="contatos5_descricaoEvento_adm">
                                <div class="logo4_descricaoEvento_adm">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="localizacao_descricaoEvento_adm">
                                    <p class="quantidade_de_pessoas_descricaoEvento_adm"> Quantidade: {this.state.evento.sala.qntdPessoas} </p>
                                </div>
                            </div>
                            <div class="contato6_descricaoEvento_adm">
                                <div class="logo5_descricaoEvento_adm">
                                    <i class="fas fa-hand-holding-heart"></i>
                                </div>
                                <div class="localizacao_descricaoEvento_adm">
                                    <p class="quantidade_de_pessoas_descricaoEvento_adm"> Foco em diversidade: {this.state.evento.diversidade} </p>
                                </div>
                            </div>
                            <div class="contato7_descricaoEvento_adm">
                                <div class="logo6_descricaoEvento_adm">
                                    <i class="fas fa-link"></i>
                                </div>
                                <div class="localizacao_descricaoEvento_adm">
                                    <div className="link-descricao-adm">
                                      <p>Link de inscrição:</p><a className="link-inscreverse-descricao-adm" href={'http://' + this.state.evento.urlEvento} target="_blank" >Clique aqui</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <button onClick={() => this.props.history.go(-1)}>Back</button>

            </div>

        )
    }
}
export default DescricaoEventoAdm;