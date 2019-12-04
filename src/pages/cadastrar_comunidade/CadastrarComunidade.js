import React, { Component } from 'react';
import './style.css';


class CadastrarComunidade extends Component{
    constructor(props){
        super(props);
        this.state = {
          listaComuniade : [],
          Nome: '',
          Descricao: '',
          Email_contato: '',
          Telefone_contato: '',
          Foto: '',

        }
      }
render (){
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


                    <form class="comunidade_form" action="" method="">
                        <div class="inpu_div_comunidade">

                            <div class="campo_comunidade">
                                <label for="nome">Nome:</label>
                                <input type="text" name="nome" id="" placeholder="Digite o nome da comunidade"/>
                            </div>

                            <div class="campo_comunidade">
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="" placeholder="E-mail do responsável"/>
                            </div>

                            <div class="campo_comunidade">
                                <label for="telefone">Telefone:</label>
                                <input type="text" name="telefone" id="" placeholder="Telefone para contato com o responsável"/>
                            </div>

                            <div class="campo_comunidade">
                                <label class="campo_foto_comunindade_label" for="campo_foto_comunindade">Clicle aqui para enviar uma foto da sua comunidade</label>
                                <input type="file" name="foto" id="campo_foto_comunindade" placeholder=" "/>
                            </div>
                            <div class="descricao-comunidade">
                                <label for="descricao">Descrição:</label>
                                <textarea name="descricao" class="textarea_comunidade" cols="30" rows="10" placeholder="Fale um pouco sobre sua Comunidade aqui..."></textarea>
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
