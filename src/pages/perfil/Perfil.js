import React, { Component } from 'react';
import './perfil.css';
import axios from 'axios';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';


import { getUserIdAuthenticated } from '../../services/auth'

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            usuario: {

                comunidade: [],

            },

            fotoupdate: React.createRef(),
            modal: false,
            comunidade:{ 
                nome:'',
                emailContato:'',
                telefoneContato:'',
                descricao:'',
                foto:'irl',
            }
        }
    }

    updateUsuario = (event) => {
        event.preventDefault();

        // console.log(this.state.usuario.nome);
        // console.log(this.state.usuario.senha);
        // console.log(this.state.usuario.telefone);
        // console.log(this.state.usuario.email);
        // console.log(this.state.usuario.genero);
        // console.log(this.state.usuario.foto);
        // console.log(this.state.id)


        axios.put('http://localhost:5000/api/Usuario/' + this.state.id, {
            nome: this.state.usuario.nome,
            telefone: this.state.usuario.telefone,
            senha: this.state.usuario.senha,
            genero: this.state.usuario.genero,
            email: this.state.usuario.email,
            foto: this.state.usuario.foto,
        })
            .then(resposta => {
                console.log("PUT " + resposta);
                this.uploadFoto(this.state.id);
            })
            .then(this.getUsuario)
            .catch(error => { console.log(error) });

    }

    uploadFoto = (id) => {
        let evento = new FormData();

        evento.set("imagem", this.state.fotoupdate.current.files[0]);

        axios({
            method: 'put',
            url: 'http://localhost:5000/api/Usuario/' + id + '/uploadFoto',
            data: evento,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(resposta => {
                console.log("RESPOSTA DATA " + resposta.data);
                console.log("RESPOSTA STATUS " + resposta.status);
                if (resposta.status === 200) {

                    this.setState({
                        usuario:
                        {
                            ...this.state.usuario,
                            foto: resposta.data.foto
                        }
                    })
                }
            }).catch(error => console.log(error));
    }


    atualizaState = (event) => {
        this.setState({
            usuario:
            {
                ...this.state.usuario,
                [event.target.name]: event.target.value
            }
        });

    }

    atualizaStateComunidade = (event) => {
        this.setState({
            comunidade:
            {
                ...this.state.comunidade,
                [event.target.name]: event.target.value
            }
        });
        
        console.log({[event.target.name]: event.target.value})
    }



    updateComunidade = (id) => {
        axios.put('http://localhost:5000/api/Comunidade/'+ id, this.state.comunidade)
        .then(resposta => {console.log(resposta)})
        .catch(error => {console.log(error)})
    }




    getUsuario = () => {
        axios.get('http://localhost:5000/api/usuario/' + this.state.id)
            .then(resposta => {

                this.setState({ usuario: resposta.data });
            })
            .catch(error => console.log(error));

        console.log("estado " + this.state.usuario.comunidade.nome)
    }


    previwImage = () => {

        var input = document.getElementById('per-img-input').files[0];

        var imagem = document.getElementById('perfil-img');

        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            imagem.setAttribute('src', fileReader.result);
        }

        fileReader.readAsDataURL(input);

    }



    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }





    componentDidMount() {
        console.log("ID DO TOKEN" + getUserIdAuthenticated().id)
        this.setState({ id: getUserIdAuthenticated().id })

        setTimeout(() => {
            this.getUsuario();
        }, 250);


    }

    render() {
        let imagem = 'http://localhost:5000/' + this.state.usuario.foto
        return (

            <div className='container-geral'>

                <div className='barra-lateral'>

                    <div className="container-foto-perfil">

                        <div>
                            <img className='perfil-foto' id='perfil-img' src={imagem} alt='' />
                        </div>

                        <form className='form-foto'>

                            <label for="foto">
                                Alterar foto
                            </label>

                            <input type="file"
                                ref={this.state.fotoupdate}
                                onChange={this.previwImage}
                                id='per-img-input'
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
                                    <input className="input_dados" type='text' name='nome' onChange={i => this.atualizaState(i)} value={this.state.usuario.nome} />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Email</label>
                                    <input name='email' className="input_dados" disabled value={this.state.usuario.email} />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Telefone</label>
                                    <input name='telefone' className="input_dados" onChange={i => this.atualizaState(i)} value={this.state.usuario.telefone} />
                                </div>

                                <div className="div-perfil-dados">
                                    <label>Senha</label>
                                    <input name='senha' className="input_dados" onChange={i => this.atualizaState(i)} value={this.state.usuario.senha} />
                                </div>


                                <div className="div-genero">

                                    <label>Gênero</label>
                                    <div className="div-input-radio">


                                        <div className='div-radio'>
                                            <label for=''>Masculino</label>
                                            <input type="radio" name="genero" value="Masculino"
                                                checked={this.state.usuario.genero === 'Masculino'}
                                                onChange={i => this.atualizaState(i)}
                                            />
                                        </div>

                                        <div className='div-radio'>
                                            <label for=''>Feminino</label>
                                            <input type="radio" name="genero" value="Feminino"
                                                checked={this.state.usuario.genero === 'Feminino'}
                                                onChange={i => this.atualizaState(i)}
                                            />
                                        </div>

                                    </div>

                                </div>

                            </form>


                            <button className="btn-editar-perfil" onClick={i => this.updateUsuario(i)}>Salvar</button>

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

                            <MDBContainer>
                                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                    <MDBModalHeader toggle={this.toggle}>Editar comunidade</MDBModalHeader>
                                    <MDBModalBody>

                                        <MDBInput label="Nome da comunidade " outline size="lg"
                                            value={this.state.comunidade.nome}
                                            name='nome'
                                            onChange={i => this.atualizaStateComunidade(i)}
                                        />

                                        <MDBInput label="Email para contato" outline size="lg"
                                        value={this.state.comunidade.emailContato}
                                        name='emailContato'
                                        onChange={i => this.atualizaStateComunidade(i)}
                                        />

                                        <MDBInput label="Telefone para contato" outline size="lg" 
                                        value={this.state.comunidade.telefoneContato}
                                        name='telefoneContato'
                                        onChange={i => this.atualizaStateComunidade(i)}
                                        />

                                        <MDBInput type="Descrição" label="Example label" background 
                                        value={this.state.comunidade.descricao}
                                        name='descricao'
                                        onChange={i => this.atualizaStateComunidade(i)}
                                        />

                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <MDBBtn color="secondary" onClick={this.toggle}>Fechar</MDBBtn>
                                        <MDBBtn color="primary" onClick={this.updateComunidade}>Salvar</MDBBtn>
                                    </MDBModalFooter>
                                </MDBModal>
                            </MDBContainer>
                            <button onClick={this.toggle} className="btn-editar-perfil">Editar</button>

                        </div>
                    </section>




                </div>



            </div>
        );
    }
}
export default Perfil;