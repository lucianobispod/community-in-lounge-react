import React, { Component } from 'react';
import './perfil.css';
import axios from 'axios';



class Perfil extends Component {
    render() {
        return (
            <div>
                <section className='container-geral'>

                    <div className='barra-lateral'>
                        <div className="container-foto-perfil">
                        <label class="label-file" for="file">
                            <i class="material-icons">
                                add_photo_alternate
                            </i>
                            Alterar foto</label>
                        <input id="file" type="file" accept="image/*"/>
                        </div>
                    </div>

                    <div className='container_comunidade-usuario'>

                        <section className='section-usuario'>

                            <div className='dados-usuario'>
                                <h2 classsName="titulo-perfil-dados">Dados Pessoais:</h2>
                                <form class="form-dados-usuario">
                                    <div className="container-perfil-nome">
                                        <label className="perfil-nome label_dados">Nome:</label>
                                        <div className="div-margin-input">
                                            <input className="nome-input-user input_dados"></input>
                                        </div>
                                    </div>

                                    <div className="container-perfil-email">
                                        <label className="perfil-email label_dados">Email:</label>
                                        <div className="div-margin-input">
                                            <input className="email-input-user input_dados"></input>
                                        </div>
                                    </div>

                                    <div className="container-perfil-telefone">
                                        <label className="perfil-telefone label_dados">Telefone:</label>
                                        <div className="div-margin-input">
                                            <input className="telefone-input-user input_dados"></input>
                                        </div>
                                    </div>

                                    <div className="container-perfil-genero">

                                        <label className="perfil-nome label_dados_radio">Gênero:</label>
                                        <div className="div-margin-input-radio">

                                            <div className="genero-radio">
                                                <input className="nome-input-user input_dados_radio" type="radio" name="genero" value="masculino" />Masculino
                                    </div>

                                            <div className="genero-radio">
                                                <input className="nome-input-user input_dados_radio" type="radio" name="genero" value="feminino" />Feminino
                                    </div>

                                        </div>


                                    </div>
                                </form>
                                <div className="container-perfil-btn-alterar">
                                    <button className="btn-editar-perfil">Editar</button>
                                </div>

                            </div>


                        </section>

                        <hr></hr>

                        <section className='section-comunidade'>
                            <div className='dados-comunidade'>
                                <h2 className="titulo-perfil-comunidade">Dados da comunidade:</h2>
                                <div className="card-comunidade">
                                    <div className="foto-card-comunidade"><img src="" /></div>
                                    <div className="dados-card-comunidade">
                                        <p>Nome: Nerdzão</p>
                                        <p>Email de contato: nerdzao@gmail.com</p>
                                        <p>Telefone responsável: 119876543</p>
                                        <div className="descricao-comunidade">
                                        <p>Descrição: O NerdZão é um grupo de estudos gratuito com sede em São Paulo. O foco principal do grupo é promover o networking e disseminar o conhecimento sobre softwares, plataformas, tecnologias e linguagens de programação de forma divertida, quebrando o paradigma de complexidade no aprendizado.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="container-comunidade-btn-alterar">
                                    <button className="btn-editar-perfil">Editar</button>
                                </div>

                            </div>
                        </section>

                    </div>

                </section>
            </div>
        );
    }
}
export default Perfil;