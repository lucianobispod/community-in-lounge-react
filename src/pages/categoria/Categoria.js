import React, { Component } from 'react';
import '../../assets/css/categoria.css';
import Axios from 'axios';
// import "https://kit.fontawesome.com/02d3c4ac19.js";


class Categoria extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            categorias: []
        }
    }

    getCategorias = () => {
        Axios.get('https://localhost:5001/api/categoria')
            .then(resposta => {
                const categorias = resposta.data
                this.setState({ categorias })
            }).catch(error => console.log(error));
    }


    postCategoria = (event) => {
        console.log("passou")
        event.preventDefault();
        Axios.post('https://localhost:5001/api/categoria', {
            body : JSON.stringify({
                Nome : this.state.nome
            })
        })
            .then(resposta => console.log(resposta))
            .catch(erro => console.log(erro))
    }

    atualizaCategoria = (event) => {
        this.setState({
            nome: event.target.value
        });
    }

    componentDidMount() {
        this.getCategorias();
    }

    render() {
        return (
            <div>
                <section id="cdr_ctg_meioPricipal">
                    <div className="cdr_ctg_caixa">
                        <h1> categorias já cadastradas </h1>
                        <div className="cdr_ctg_buscarcategoria">
                            <form action="">
                                <input className="cdr_ctg_caixabuscarcategoria" type="text" placeholder="Buscar Uma Categoria" />
                                <button type="submit" className="cdr_ctg_btn">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>

                        <div className="cdr_ctg_caixadecategorias">

                            {
                                this.state.categorias.map((categoria) => {
                                    return (
                                        <div className="cdr_ctg_categoria1">
                                            <p> {categoria.nome}</p>
                                            <button className="cdr_ctg_categoria_btnX">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="cdr_ctg_caixanav">
                            <form action="">
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <i className="fas fa-angle-left"></i>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p> 1 </p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p> 2 </p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p> 3 </p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p> ...</p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <i className="fas fa-angle-right"></i>
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
                                <input type="text" onChange={this.atualizaCategoria.bind(this)} name="nome" value={this.state.nome} className="cdr_ctg_cadastro" placeholder="Digite um nome de uma nova Categoria" />
                                <div className="ctg_ctg_btncadastrar">
                                    <button className="ctg_ctg_btn"  onClick={e => this.postCategoria}>Cadastrar</button>
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