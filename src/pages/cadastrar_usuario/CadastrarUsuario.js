import React, { Component } from 'react';
import './CadastrarUsuario.css' //Importando css

class CadastrarUsuario extends Component {
constructor(props){
    super(props);
    this.state = {

        
    }
}


    render() {
        return (
            <div>
                <main>

                    <section class="usuario_section">

                        <div class="text_container_usuario">

                            <div class="circle_usuario alta_usuario"></div>

                            <div class="titulo_usuario">
                                <h2>Cadastro de Usuario </h2>
                            </div>

                            <div class="circulomeio_usuario">
                                <img src="images/Brad-Pitt-premiere-1.jpg" alt="" />
                            </div>

                            <div class="campo_usuario_foto">

                                <i class="fas fa-camera"></i>

     <label class="campo_foto_usuario_label" for="campo_foto_usuario"> Clicle aqui para adcionar uma foto</label>
                                <input type="file" name="foto" id="campo_foto_usuario" placeholder=" " />
                            </div>

                            <div class="circle_usuario baixa_usuario"></div>
                        </div>

                        <div class="usuario_container">

                            <form class="usuario_form">

                                <div class="inpu_div_usuario">

                                    <div class="campo_usuario">

                                        <label for="nome">Nome:</label>

                                        <input type="text" name="nome" id="" placeholder="Douglas dos Santos" />

                                    </div>

                                    <div class="campo_usuario">

                                        <label for="email">Email:</label>

                                        <input type="email" name="email" id="" placeholder="exemplo@email.com" />
                                    </div>

                                    <div class="campo_usuario">

                                        <label for="telefone">Telefone:</label>

                                        <input type="text" name="telefone" id="" placeholder="11 97777-4444" />

                                    </div>

                                    <div class="descricao-usuario">

                                        <label for="descricao">Descrição</label>

    <textarea name="descricao" class="textarea_usuario" cols="30" rows="10"placeholder="Fale um pouco sobre você..."></textarea>
                                    </div>

                                </div>

                                <button type="submit">Cadastrar</button>
                            </form>

                        </div>

                    </section>

                </main>
                <script src="./js/maquina-escrever.js"></script>
            </div>
        );
    }
}
export default CadastrarUsuario;