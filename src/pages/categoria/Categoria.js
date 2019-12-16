import React, { Component } from 'react';
import './categoria.css';
import Axios from 'axios';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';

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
        console.log('listou')
        Axios.get('https://localhost:5001/api/categoria')
            .then(resposta => {
                const categorias = resposta.data
                this.setState({ categorias, categoriasFiltradas: categorias })
            }).catch(error => console.log(error));
    }


    postCategoria = (event) => {
        console.log("cadastrou " + this.state.nome);
        event.preventDefault();
        Axios.post('http://localhost:5000/api/categoria',
            {
                nome: this.state.nome
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
        Axios.delete('http://localhost:5000/api/categoria/' + id)
        .then(response => {console.log(response);})
        .then(this.getCategorias)
        .catch(error => {
            console.log(error);
            this.setState({ erroMessage: 'Não foi possivel excluir, verifique se não há um evento cadastrado com essa categoria' })
        });
    }
    



        atualizaSearch = (event) => {
            event.preventDefault();
             console.log('atualizando estado para filtrar')

             console.log('filter categorias'+this.state.categorias)

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
                <HeaderAdministrador />
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
                                            <button onClick={i => this.deletarCategoria(categoria.categoriaId)} className="cdr_ctg_categoria_btnX" >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    )
                                }.bind(this))
                            }

                        </div>

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