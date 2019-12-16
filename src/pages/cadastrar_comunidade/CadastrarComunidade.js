import React, { Component } from 'react';
import './cadastrar-cuminidade.css';
import axios from 'axios';
import { getUserIdAuthenticated } from '../../services/auth'

class CadastrarComunidade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: React.createRef(),
            nome: '',
            emailContato: '',
            telefoneContato: '',
            descricao: '',

        }
    }

    cadastrarComunidade = (event) => {
        event.preventDefault();
        let comunidade ={
            nome : this.state.nome,
            emailContato : this.state.emailContato,
            telefoneContato : this.state.telefoneContato,
            descricao : this.state.descricao,
            foto : 'url',
            responsavelUsuarioId: getUserIdAuthenticated().id
        }

        axios.post('http://localhost:5000/api/Comunidade', comunidade)
        .then(resposta => {
            console.log(resposta)
            if (resposta.status === 200) {
                // this.uploadFoto(resposta.data.comunidadeId);
            }
        })
        .catch(error => console.log(error));
    }




    uploadFoto = (id) => {
        let evento = new FormData();
        
        evento.set("imagem", this.state.foto.current.files[0]);

        axios({
            method: 'put',
            url: 'http://localhost:5000/api/Comunidade/' + id + '/uploadFoto',
            data: evento,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(resposta => {
                console.log("RESPOSTA " + resposta);
            }).catch(error => console.log(error));
    }





    atualizaEstado = (event) => {
        this.setState({
            [event.target.name]:event.target.value
         })
         console.log({[event.target.name]:event.target.value})
    }







    typeWrite = () => {

        const titulo = document.getElementById('titulo_comunidade');
        const textoArray = titulo.innerHTML.split('');
        titulo.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(function () {
                titulo.innerHTML += letra
            }, 75 * i)
        });
    }


    previwImage = () => {

        var input = document.getElementById('comu-img-input').files[0];

        var imagem = document.getElementById('comu-img');

        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            imagem.setAttribute('src', fileReader.result);
        }

        fileReader.readAsDataURL(input);

    }




    componentDidMount() {
        this.typeWrite();
    }



    render() {
        return (
            <div>
                <main>

                    <section class="cm-comunidade_section">

                        <div class="cm-text_container_comunidade">

                            <div class="cm-circle_comunidade cm-alta_comunidade"></div>

                            <div>
                                <h2 class="cm-cor cm-letra_grande_comunidade cm-titulo_h2_comunidade" id="titulo_comunidade">Cadastre sua comunidade!</h2>
                                <h2 class="cm-cor  cm-letra_media_comunidade">E venha fazer seu evento conosco.</h2>
                            </div>

                            <div class="cm-circle_comunidade cm-baixa_comunidade"></div>

                        </div>

                        <div class="cm-comunidade_container">

                            {/* <div class="cm-div-titulo_comunidade">
                                <h1 className='cm-titulo'>Cadastre a sua Comunidade</h1>
                            </div> */}


                            <form className="cm-comunidade_form" onSubmit={i => this.cadastrarComunidade(i)} method="POST">
                                {/* <div className="cm-inpu_div_comunidade"> */}

                                <div className="cm-campo_foto_comunidade">
                                    <img id='comu-img' className='cm-preview-foto' alt='' />
                                    {/* <label className="cm-campo_foto_comunindade_label" for="foto_comunindade">Adicione uma foto</label> */}
                                    <input onChange={this.previwImage} type="file" ref={this.state.foto} id='comu-img-input' name="foto_comunidade"></input>
                                </div>

                                <div className="cm-campo_comunidade">
                                    <label for="nome">Nome</label>
                                    <input onChange={i=>this.atualizaEstado(i)} className='cm-input' type="text" name="nome" />
                                </div>

                                <div className="cm-campo_comunidade">
                                    <label for="email">Email</label>
                                    <input onChange={i=>this.atualizaEstado(i)} className='cm-input' type="email" name="emailContato"/>
                                </div>

                                <div className="cm-campo_comunidade">
                                    <label for="telefone">Telefone</label>
                                    <input onChange={i=>this.atualizaEstado(i)} className='cm-input' type="text" name="telefoneContato"  />
                                </div>



                                <div className="cm-descricao-comunidade">
                                    <label for="descricao">Descrição</label>
                                    <textarea onChange={i=>this.atualizaEstado(i)} name="descricao" class="cm-textarea_comunidade" cols="30" rows="10" ></textarea>
                                </div>

                                {/* </div> */}

                                <button className='button' type="submit">Cadastrar</button>
                            </form>

                        </div>

                    </section>

                </main>
            </div>

        )
    }
}
export default CadastrarComunidade;
