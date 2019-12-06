import React, { Component } from 'react';
import './cadastrarComunidade.css';
import Axios from 'axios';


class CadastrarComunidade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            emailContato: '',
            telefoneContato: '',
            foto: 'hhgg',
        }
    }

    efetuarCadastro(event) {
        event.preventDefault();

        Axios.post('http://localhost:5000/api/Comunidade', {
            nome: this.state.nome,
            descricao: this.state.descricao,
            emailContato: this.state.emailContato,
            telefoneContato: this.state.telefoneContato,
            Foto: this.state.foto,
            responsavelUsuarioId: 1
        })
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }
    atualizarNome(event) {
        this.setState({ nome: event.target.value });
        console.log(this.state.nome);
    }
    atualizarDescricao(event) {
        this.setState({ descricao: event.target.value });
        console.log(this.state.descricao);

    }
    atualizarEmail(event) {
        this.setState({ emailContato: event.target.value });
        console.log(this.state.emailContato);

    }
    atualizarTelefone(event) {
        this.setState({ telefoneContato: event.target.value });
        console.log(this.state.telefoneContato);

    }
    atualizarFoto(event) {
        this.setState({ foto: event.target.value });
        console.log(this.state.foto);
    }
    render() {
        return (
            <div>
                <main>

                    <section class="comunidade_section">

                        <div class="text_container_comunidade">

                            <div class="circle_comunidade alta_comunidade"></div>

                            <div>

                                <h2 class="cor letra_grande_comunidade titulo_h2_comunidade" id="titulo_home">Cadastre sua comunidade!</h2>
                                <h2 class="cor  letra_media_comunidade">E venha fazer seu evento conosco.</h2>

                            </div>

                            <div class="circle_comunidade baixa_comunidade"></div>
                        </div>

                        <div class="comunidade_container">

                            <div class="titulo_comunidade">
                                <h1>Cadastre a sua Comunidade</h1>
                            </div>


                            <form class="comunidade_form" onSubmit={this.efetuarCadastro.bind(this)}>
                                <div class="inpu_div_comunidade">

                                    <div class="campo_comunidade">
                                        <label for="nome">Nome:</label>
                                        <input type="text"
                                            name="nome"
                                            value={this.state.Nome}
                                            onChange={this.atualizarNome.bind(this)}
                                            placeholder="Digite o nome da comunidade" />
                                    </div>

                                    <div class="campo_comunidade">
                                        <label for="email">Email:</label>
                                        <input type="email"
                                            name="email"
                                            value={this.state.emailContato}
                                            onChange={this.atualizarEmail.bind(this)}
                                            placeholder="E-mail do responsável" />
                                    </div>

                                    <div class="campo_comunidade">
                                        <label for="telefone">Telefone:</label>
                                        <input type="text"
                                            name="telefone"
                                            value={this.state.telefoneContato}
                                            onChange={this.atualizarTelefone.bind(this)}
                                            placeholder="Telefone para contato com o responsável" />
                                    </div>

                                    <div class="campo_comunidade">
                                        <label class="campo_foto_comunindade_label" for="campo_foto_comunindade">
                                            Clicle aqui para enviar uma foto da sua comunidade</label>
                                        <input type="file"
                                            name="foto"
                                            id="campo_foto_comunindade"
                                            placeholder=" " />
                                    </div>
                                    <div class="descricao-comunidade">
                                        <label for="descricao">Descrição:</label>
                                        <textarea name="descricao"
                                            class="textarea_comunidade" cols="30" rows="10"
                                            value={this.state.descricao}
                                            onChange={this.atualizarDescricao.bind(this)}
                                            placeholder="Fale um pouco sobre sua Comunidade aqui..."></textarea>
                                    </div>

                                </div>

                                <button type="submit">Enviar</button>
                            </form>

                        </div>

                    </section>

                </main>
                <script src="./js/maquina-escrever.js"></script>
            </div>

        )
    }
}
export default CadastrarComunidade;
