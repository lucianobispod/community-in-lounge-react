import React, { Component } from 'react';
import '../../assets/css/categoria.css';


class Categoria extends Component {




    render() {
        return (
            <div>
                <section id="cdr_ctg_meioPricipal">
                    <div className="cdr_ctg_caixa">
                        <h1> categorias já cadastradas </h1>
                        <script src="https://kit.fontawesome.com/02d3c4ac19.js" crossorigin="anonymous"></script>
                        <div className="cdr_ctg_buscarcategoria">
                            <form action="">
                                <input className="cdr_ctg_caixabuscarcategoria" type="text" placeholder="Buscar Uma Categoria" />
                                <button className="cdr_ctg_btn">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>

                        <div className="cdr_ctg_caixadecategorias">
                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            
                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="cdr_ctg_categoria1">
                                <p> informatica</p>
                                <button className="cdr_ctg_categoria_btnX">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                        </div>
                        <div class="cdr_ctg_caixanav">
                    <form action="">
                        <button class="cdr_ctg_navbtn">
                            <div class="cdr_ctg_nav">
                                <i class="fas fa-angle-left"></i>
                            </div>
                        </button>
                        <button class="cdr_ctg_navbtn">
                            <div class="cdr_ctg_nav">
                                <p> 1 </p>
                            </div>
                        </button>
                        <button class="cdr_ctg_navbtn">
                            <div class="cdr_ctg_nav">
                                <p> 2 </p>
                            </div>
                        </button>
                        <button class="cdr_ctg_navbtn">
                            <div class="cdr_ctg_nav">
                                <p> 3 </p>
                            </div>
                        </button>
                        <button class="cdr_ctg_navbtn">
                            <div class="cdr_ctg_nav">
                                <p> ...</p>
                            </div>
                        </button>
                        <button class="cdr_ctg_navbtn">
                            <div class="cdr_ctg_nav">
                                <i class="fas fa-angle-right"></i>
                            </div>
                        </button>
                    </form>
                </div>

                    </div>
                    <div className="cdr_ctg_caixa2">
                        <div className="cdr_ctg_caixatitulo1">
                            <h2>cadastrar uma nova categoria</h2>
                        </div>
                        <div className="cdr_ctg_caixacadastro">
                            <form action="">
                                <input type="text" className="cdr_ctg_cadastro" placeholder="Digite um nome de uma nova Categoria" />
                                <div className="ctg_ctg_btncadastrar">
                                    <button className="ctg_ctg_btn">Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Categoria;