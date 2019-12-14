import React, { Component } from 'react';
import './perfil.css';
import axios from 'axios';

import { getUserIdAuthenticated } from '../../services/auth' 

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            usuario: {

                comunidade: [],
                
            }

        }
    }
    // atualizaState = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }




    getUsuario = () => {
        axios.get('http://localhost:5000/api/usuario/'+ this.state.id)
            .then(resposta => {

                this.setState({ usuario: resposta.data });
            })
            .catch(error => console.log(error));

        console.log("estado " + this.state.usuario.comunidade.nome)
    }



    componentDidMount() {
        console.log(this.state.id)
        console.log(getUserIdAuthenticated().id)
        this.setState({id: getUserIdAuthenticated().id})

        setTimeout(() => {
            this.getUsuario();
        }, 250);
    }

    render() {
        return (

            <div className='container-geral'>

                <div className='barra-lateral'>

                    <div className="container-foto-perfil">

                        <div>
                            
                            <img className='perfil-foto' src={'http://localhost:5000/' + this.state.usuario.foto} alt='' />
                        </div>

                        <form className='form-foto'>

                            <label for="foto">
                                Alterar foto
                            </label>

                            <input type="file"
                                // ref={this.state.usuario.foto}
                                name='foto'
                            />

                        </form>

                    </div>

                </div>


                <div className='container_comunidade-usuario'>

                    <section className='section-usuario'>

                        <div className='dados-usuario'>

                            <h2>Dados Pessoais</h2>


                            <form class="form-dados-usuario">

                                <div className="div-perfil-dados">
                                    <label>Nome</label>
                                    <input className="input_dados" type='text' value={this.state.usuario.nome} />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Email</label>
                                    <input className="input_dados" value={this.state.usuario.email} />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Telefone</label>
                                    <input className="input_dados" value={this.state.usuario.telefone} />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Senha</label>
                                    <input className="input_dados" value={this.state.usuario.senha} />
                                </div>


                                <div className="div-genero">

                                    <label>Gênero</label>
                                    <div className="div-input-radio">


                                        <div className='div-radio'>
                                            <label for='masculino'>Masculino</label>
                                            <input type="radio" name="masculino" value="Masculino"
                                                checked={this.state.usuario.genero === 'Masculino'}
                                            />
                                        </div>

                                        <div className='div-radio'>
                                            <label for='feminino'>Feminino</label>
                                            <input type="radio" name="feminino" value="Feminino"
                                                checked={this.state.usuario.genero === 'Feminino'}
                                            />
                                        </div>

                                    </div>

                                </div>

                            </form>


                            <button className="btn-editar-perfil">Editar</button>

                        </div>


                    </section>



                    <hr className='perfil-linha' />




                    <section className='section-comunidade'>
                        <div className='dados-comunidade'>

                            <h2>Minha comunidade</h2>


                            {
                                this.state.usuario.comunidade.length === 0 ? <h2>Você não possui uma comunidade</h2> : this.state.usuario.comunidade.map((comunidade) => {
                                    return (

                                        <div className="card-comunidade">

                                            
                                            <div><img className="foto-card-comunidade" src={'http://localhost:5000/' + comunidade.foto} alt='' /></div>

                                            <div className="dados-card-comunidade">
                                                <div className='div'>
                                                    <p>{comunidade.nome}</p>
                                                </div>

                                                <div className='div font-pequena'>
                                                    <p>{comunidade.emailContato}</p>
                                                </div>

                                                <div className='div font-pequena'>
                                                    <p>{comunidade.telefoneContato}</p>
                                                </div>

                                                <div className="descricao-comunidade">
                                                    <p>{comunidade.descricao}</p>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                            <button className="btn-editar-perfil">Editar</button>

                        </div>
                    </section>




                </div>



            </div>
        );
    }
}
export default Perfil;