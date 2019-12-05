import React, { Component } from 'react'; //importando objeto React 
import  img from '../assets/imagens/banner.png';











class Evento extends Component{


     

    render(){
        return(
            <div>
                <main className="cad_even_main">
        <section className="cad_even_section">

            <div className="cad_container_color">
                <div className="circle_cad top"></div>
                <div className="circle_cad bottom"></div>
            </div>
            <div className="cad_container_form">
                <div className="titulo_cad_evento">
                    <h1>Cadastrar novo evento</h1>
                </div>
                <form className="cad_form" action="">
                    <div className="campo_dados">
                        <div>
                        <label for="nome">Nome:</label>
                        <input className="cad_nome_usu" type="text" name="" id="nome" placeholder="Digite o nome do evento..."/>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input className="cad_email" type="text" name="" id="email" placeholder="Email de contato com o responsável pelo evento"/>
                        </div>

                    </div>
                     {/* <div className="campo_dados">
                        <div>
                            <small>Se já tiver um link de inscrição, insira aqui, se não tiver você pode incluir depois
                                do evento ser aprovado também.</small>
                            <input className="cad_url" type="text" name="" id="" placeholder="URL para cadastro"/>
                        </div>


                    </div>  */}
                    <div className="campo_dados">
                        <div>
                        <label for="cad-participantes">Quantidade de participantes:</label>
                        <select className="select_quant" name="participantes" id="cad-participantes">
                            <option value="25">Até 25 pessoas</option>
                            <option value="60">De 25 a 60 pessoas</option>
                        </select>
                        </div>
        
                        <div>
                            <label for="categorias">Selecione a categoria do evento:</label>
                            <select className="select_cat" name="categorias" id="categorias">
                                <option value="edu">Educação</option>
                                <option value="tec">Tecnologia</option>
                                <option value="sau">Saúde</option>
                                <option value="prof">Profissões</option>
                            </select>
                        </div>

                    </div>
                    <div className="campo_dados">
                        <div>
                            <label for="">O evento terá coffe?</label>
                            <select className="select_coffe" name="coffe" id="cad-coffe">
                                <option value="sel">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>

                        {/* <div className="cad-box-cat"> 
                         <label className="cad-label-cat" for="categorias">Categorias</label>  */}
                        <div>
                            <label for="">Evento focado em diversidade?</label>
                            <select className="select_diversi" name="diversidade" id="cad-diversidada">
                                <option value="sel">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>

                    </div>
                    <div className="campo_dados">
                        <div>
                            <label className="cad-label-date" for="select-data">Data:</label>
                            <input className="cad-select-data" type="date" name="" id=""/>
                        </div>

                        <div>
                            <label className="cad-label-hora" for="appt">Selecione o horário do evento:</label>
                            <input className="cad-select-hora" type="time" id="" name="appt" min="19:00" max="22:00"
                                required/>
                            {/* <small className="cad-small">O horário disponível para eventos de segunda a sexta é das 19:00 ás
                        22:00 e aos sábados das 10:00 ás 19:00 </small>  */}
                        </div>

                    </div>

                    <div className="campo_dados">
                        <div>

                            <label className="imagem-evento">Insira uma Imagem de capa para seu evento:</label>
                            <input className="cad_select_img" type="file" name="pic" accept="image/*"/>

                        </div>
                        <div>
                            <label for="">Evento privado?</label>
                            <select className="select_diversi" name="diversidade" id="cad-diversidada">
                                <option value="sel">Selecione</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className="campo_dados">
                            <div>
                                    <label className="cad-label-descricao">Faça uma breve descrição sobre o evento:</label>
                                    <textarea className="cad-textarea" name="descricao-evento" id="desc-eve" cols="45" rows="10"
                                        ></textarea>
                            </div>
                        <div className="div_small_url">
                            <div>
                            <label for="url_cad">Url de cadastro:</label>
                            </div>
                            <input className="cad_input_url" type="text" name="" id="url_cad" placeholder="URL para cadastro"/>
                            <small className="small_url">Se já tiver um link de inscrição, insira aqui. Se não tiver, você pode incluir depois
                                que evento for aprovado também.</small>

                        </div>
                    </div>
                    <div className="campo_dados">
                        
                        <div className="div_botao">
                                <button className="cad-btn-cadastrar-evento">Cadastrar</button>
                        </div>
                    </div>
                    

                </form>
            </div>
        </section>
    </main>
            
            </div>
           
            
        )
          
    }
}

export default Evento;