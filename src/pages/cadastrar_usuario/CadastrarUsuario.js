import React, { Component } from 'react';
import './CadastrarUsuario.css' //Importando css


import Footer from '../../components/footer/Footer';
import { api, apiFormData } from '../../services/api';

class CadastrarUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {


            postUsuario: {
                nome: '',
                email: '',
                telefone: '',
                senha: '',
                genero: '',
                tipo_usuario_id: 1,
                foto: React.createRef()

            }
        }
    }

    postSetState = (input) =>{
        this.setState({
            postUsuario: {
                ...this.state.postUsuario, [input.target.name] : input.target.value
            }        
        })
    }

    putSetStateFile = (input) =>{
        this.setState({
            postUsuario: {
                ...this.state.postUsuario, [input.target.name] : input.target.files[0]
            }   
        })
    }



        postUsuario = (event) =>
        {
            event.preventDefault();

             // Declara um objeto do tipo FormData, já que o Backend recebe este tipo.
                let formData = new FormData();
                formData.set('nome', this.state.postUsuario.nome);
                formData.set('email', this.state.postUsuario.email);
                formData.set('telefone', this.state.postUsuario.telefone);
                formData.set('genero', this.state.postUsuario.genero);
                formData.set('senha', this.state.postUsuario.senha);
                formData.set('tipo_usuario_id', this.state.postUsuario.tipo_usuario_id);

                formData.set('foto', this.state.postUsuario.foto.current.files[0]);


                apiFormData.post('/Usuario', formData)                
                .then(response => {
                        console.log(response);
                        this.listarGET();
                })
                .catch(error => console.log('Não foi possível cadastrar:' + error))
        }
    




    

    // efetuarCadastro(event) {
    //     event.preventDefault()

    //     api.post('/Usuario', {
    //         nome: this.state.nome,
    //         email: this.state.email,
    //         telefone: this.state.telefone,
    //         descricao: this.state.descricao,
    //         foto: this.state.foto,
    //         senha: this.state.senha,
    //         genero: this.state.genero,
    //         tipo_usuario_id:  this.state.tipo_usuario_id
        
    //     })
    // }



    render() {
        return (
            <div>
                <main>
            
                    <section className="usuario_section">

                        <div className="text_container_usuario">

                            <div className="circle_usuario alta_usuario"></div>

                            <div className="titulo_usuario">
                                <h2>Cadastro de Usuario </h2>
                            </div>

                            <div className="circulomeio_usuario">
                                <img/>
                            </div>

                            <div className="campo_usuario_foto">

                                <i className="fas fa-camera"></i>

                                <label className="campo_foto_usuario_label" for="campo_foto_usuario"> Clicle aqui para adcionar uma foto</label>
                                <input type="file"
                                    name="foto"
                                    // onChange={this.putSetStateFile}
                                    id="campo_foto_usuario"
                                    ref={this.state.postUsuario.foto}
                                   />
                            </div>

                            <div className="circle_usuario baixa_usuario"></div>
                        </div>

                        <div className="usuario_container">

                            <form className="usuario_form" onSubmit={this.postUsuario}>

                                <div className="inpu_div_usuario">

                                    <div className="campo_usuario">

                                        <label for="nome">Nome:</label>

                                        <input type="text"
                                            name="nome"
                                            value={this.state.postUsuario.nome}
                                            onChange={this.postSetState}
                                            placeholder="Digite seu nome"/>

                                    </div>

                                    <div className="campo_usuario">

                                        <label for="email">Email:</label>

                                        <input type="email"
                                            value={this.postUsuario.email}
                                            onChange={this.postSetState}
                                            name="email"
                                            placeholder="exemplo@email.com" />
                                    </div>

                                    <div className="campo_usuario">

                                        <label for="telefone">Telefone:</label>

                                        <input type="text"
                                            name="telefone"
                                            value={this.postUsuario.telefone}
                                            onChange={this.postSetState}
                                            placeholder="11 97777-4444" />

                                    </div>

                                    <div className="genero">
                                        <label for="">Genero: </label>
                                        <input className="genero_i"
                                            value="Masculino"
                                            type="radio"
                                            name="genero"/>Masculino
                                        
                                        <input className="genero_i"
                                            value="Feminino"
                                            type="radio"
                                            name="genero"/>Feminino
                                            
                                    </div>


                                    <div className="campo_usuario">
                                        <label for="senha">Senha:</label>
                                        <input type="password" 
                                        name="senha"
                                        value={this.postUsuario.senha} 
                                        onChange={this.postSetState}/>
                                    </div>

                                </div>

                                <button type="submit">Cadastrar</button>
                            </form>

                        </div>

                    </section>

                <Footer />
                </main>
                <script src="./js/maquina-escrever.js"></script>
            </div>
        );
    }}

export default CadastrarUsuario;