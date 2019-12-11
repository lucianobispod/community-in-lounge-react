import React, { Component } from 'react';
import '../../assets/css/categoria.css';
import Axios from 'axios';
// import "https://kit.fontawesome.com/02d3c4ac19.js";


class Categoria extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            search: '',
            categorias: [],
            categoriasFiltradas: [],
        }
    }

    getCategorias = () => {
        Axios.get('https://localhost:5001/api/categoria')
            .then(resposta => {
                const categorias = resposta.data
                this.setState({ categorias, categoriasFiltradas: categorias })
            }).catch(error => console.log(error));
    }


    postCategoria = (event) => {
        console.log("passou " + this.state.nome);
        event.preventDefault();
        Axios.post('https://localhost:5001/api/categoria',
            {
                Nome: this.state.nome
            })
            .then(resposta => console.log(resposta))
            .then(this.getCategorias)
            .catch(erro => console.log(erro))
    }

    atualizaCategoria = (event) => {
        this.setState({
            nome: event.target.value
        });
        
        console.log(this.state.nome)
    }

    
    
    deletarCategoria = (id) => {
        console.log('Excluindo Categoria');

        
        Axios.delete('https://localhost:5001/api/categoria' + id)
        
        .then(response => {
            console.log(response);
            this.setState(() => ({ lista: this.state.lista }))
            this.getCategorias()
        }).catch(error => {
            console.log(error);
            this.setState({ erroMessage: 'Não foi possivel excluir, verifique se não há um evento cadastrado com essa categoria' })
        });
    }
    
        atualizaSearch = (event) => {
            console.log(this.state.categorias)
            
            // console.log(filtrado)
            //
            var filtrado = this.state.categorias.filter(element => {
                return element.nome.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 
            })
            
            this.setState({
                categoriasFiltradas: filtrado
            })

            //seta o valor do meu input
            this.setState({
                search: event.target.value
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
                                <input value={this.state.search} onChange={i => this.atualizaSearch(i)} className="cdr_ctg_caixabuscarcategoria" type="text" placeholder="Buscar Uma Categoria" />
                                <button type="submit" className="cdr_ctg_btn">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>

                        <div className="cdr_ctg_caixadecategorias">

                            {
                                this.state.categoriasFiltradas.map(function (categoria) {
                                    return (
                                        <div className="cdr_ctg_categoria1" key={categoria.categoriaId}>
                                            <p> {categoria.nome}</p>
                                            <button className="cdr_ctg_categoria_btnX">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )
                                }.bind(this))
                            }

                        </div>
                        {/* <div className="cdr_ctg_caixanav">
                            <form action="">
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <i className="fas fa-angle-left"></i>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p className="cdr_ctg_p"    > 1 </p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p className="cdr_ctg_p"> 2 </p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p className="cdr_ctg_p"> 3 </p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <p className="cdr_ctg_p"> ...</p>
                                    </div>
                                </button>
                                <button className="cdr_ctg_navbtn">
                                    <div className="cdr_ctg_nav">
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </button>
                            </form>
                        </div> */}

                    </div>
                    <div className="cdr_ctg_caixa2">
                        <div className="cdr_ctg_caixatitulo1">
                            <h2>cadastrar uma nova categoria</h2>
                        </div>
                        <div className="cdr_ctg_caixacadastro">
                            <form action="" onSubmit={this.postCategoria}>
                                <input type="text" onChange={this.atualizaCategoria} name="nome" value={this.state.nome} className="cdr_ctg_cadastro" placeholder="Digite um nome de uma nova Categoria" />
                                <div className="ctg_ctg_btncadastrar">
                                    <button className="ctg_ctg_btn" type='submit'>Cadastrar</button>
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