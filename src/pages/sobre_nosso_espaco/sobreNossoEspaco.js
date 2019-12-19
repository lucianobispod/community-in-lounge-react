import React, { Component } from "react";
import '../sobre_nosso_espaco/sobre_Nosso_espaco.css';
import Footer from '../../components/footer/Footer';
import HeaderDefault from '../../components/header/default/HeaderDefault';
import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import a from '../../assets/imagens/a.jpg';
import b from '../../assets/imagens/d.jpg';
import c from '../../assets/imagens/c.jpg';
import { isAuthenticated, parseToken } from '../../services/auth';



class Sobre_nosso_espaco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            acesso: ''

        }
    }
    componentDidMount() {
        this.setState({ token: isAuthenticated() })

        if (isAuthenticated()) {

            this.setState({ acesso: parseToken().Roles })
            console.log("acesso " + parseToken().Roles);
        }
    }


    render() {
        return (
            <div>
                {this.state.token === false ? (<HeaderDefault />) : this.state.acesso === 'Administrador' ? <HeaderAdministrador /> : (< HeaderUsuario />)}
                <section className="sobre_section">
                    <div className="sobre_banner">
                        <img className="sobre_banner_img" src={a} />
                    </div>
                    <div className="sobre_titulo">
                        <h1> Sobre Nosso Espaço</h1>
                    </div>
                    <div className="sobre_meio">
                        <div className="sobre_caixa">
                            <h2 className="sobre_h2"> teste</h2>
                            <p className="sobre_p"> teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste </p>
                        </div>
                        <div className="sobre_caixa2">
                            <img className="sobre_caixa2_img" src={b} />
                        </div>
                        <div className="sobre_caixa3">
                            <img className="sobre_caixa2_img" src={c} />
                        </div>
                        <div className="sobre_caixa4">
                            <h2 className="sobre_h2"> teste</h2>
                            <p className="sobre_p"> teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste testeteste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste </p>

                        </div>
                    </div>
                </section>
                <Footer />

            </div>
        )
    }

}
export default Sobre_nosso_espaco;
