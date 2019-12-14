import React, { Component } from 'react';
import './perfil.css';
import axios from 'axios';



class Perfil extends Component {
constructor(props){
    super(props);
    this.state = {
        usuario:{

            comunidade:{
                
            }
        }

    }
}

    render() {
        return (
            <div className='container-geral'>

                <div className='barra-lateral'>

                    <div className="container-foto-perfil">

                        <div>
                            <img className='perfil-foto' />
                        </div>

                        <form className='form-foto'>

                            <label for="foto">
                                Alterar foto
                            </label>

                            {/* <input type='file' name='foto' /> */}
                            <input type="file" />
                                
                        </form>

                    </div>

                </div>


                <div className='container_comunidade-usuario'>

                    <section className='section-usuario'>

                        <div className='dados-usuario'>

                            <h2 >Dados Pessoais</h2>


                            <form class="form-dados-usuario">

                                <div className="div-perfil-dados">
                                    <label>Nome</label>
                                    <input className="input_dados" type='text' />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Email</label>
                                    <input className="input_dados" />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Telefone</label>
                                    <input className="input_dados" />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Senha</label>
                                    <input className="input_dados" />
                                </div>


                                <div className="div-genero">

                                    <label>Gênero</label>
                                    <div className="div-input-radio">


                                        <div className='div-radio'>
                                            <label for='masculino'>Masculino</label>
                                            <input type="radio" name="masculino" value="masculino" />
                                        </div>

                                        <div className='div-radio'>
                                            <label for='feminino'>Feminino</label>
                                            <input type="radio" name="feminino" value="feminino" />
                                        </div>

                                    </div>

                                </div>

                            </form>


                            <button className="btn-editar-perfil">Editar</button>

                        </div>


                    </section>



                    <hr className='perfil-linha'/>




                    <section className='section-comunidade'>
                        <div className='dados-comunidade'>

                            <h2>Minha comunidade</h2>

                            <div className="card-comunidade">

                                <div className="foto-card-comunidade"><img src="" /></div>

                                <div className="dados-card-comunidade">
                                    <div className='div'>
                                        <p>Nerdzão</p>
                                    </div>

                                    <div className='div font-pequena'>
                                        <p>nerdzao@gmail.com</p>
                                    </div>

                                    <div className='div font-pequena'>
                                        <p>119876543</p>
                                    </div>

                                    <div className="descricao-comunidade">
                                        <p>O NerdZão é um grupo de estudos gratuito com sede em São Paulo. O foco principal do grupo é promover o networking e disseminar o conhecimento sobre softwares, plataformas, tecnologias e linguagens de programação de forma divertida.</p>
                                    </div>
                                </div>

                            </div>

                            <button className="btn-editar-perfil">Editar</button>

                        </div>
                    </section>




                </div>



            </div>
        );
    }
}
export default Perfil;