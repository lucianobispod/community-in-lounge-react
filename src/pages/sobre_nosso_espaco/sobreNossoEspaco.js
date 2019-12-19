import React, { Component } from "react";
import '../sobre_nosso_espaco/sobre_Nosso_espaco.css';
import Footer from '../../components/footer/Footer';
import HeaderDefault from '../../components/header/default/HeaderDefault';
import HeaderUsuario from '../../components/header/usuario/HeaderUsuario';
import HeaderAdministrador from '../../components/header/administrador/HeaderAdministrador';
import a from '../../assets/imagens/5.png';
import b from '../../assets/imagens/2.png';
import c from '../../assets/imagens/3.png';
import d from '../../assets/imagens/4.jpeg';
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
                            <h2 className="sobre_h2"> Um pouco Sobre nos</h2>
                            <p className="sobre_p"> O nosso espaço ThoughtWorks Community in Lounge foi criado e idealizado especialmente para os funcionários ou comunidades, que queiram, ou que estão precisando de um espaço para palestrar ou para criar seu evento. E tem como principal objetivo encontrar parceiros que possuam novas ideias, networking, workshop.  Enfim, pessoas que valorizem a troca de experiências e valores. Tudo isso em um ambiente despojado, inovador, confortável e com um espaço descontraído. A missão da empresa é fazer com que pessoas enxerguem as vantagens de um lugar desconstruído, e com grande infraestrutura para realizarem o seu evento. O propósito é fornecer um local apresentável para as pessoas que estão realizando seus eventos, receberem o público com um ambiente acolhedor, trabalharem e fazerem reuniões e tudo isso sem custo algum.
</p>
                        </div>
                        <div className="sobre_caixa2">
                            <img className="sobre_caixa2_img" src={b} />
                        </div>
                        <div className="sobre_caixa3">
                            <img className="sobre_caixa2_img" src={c} />
                        </div>
                        <div className="sobre_caixa4">
                            <h2 className="sobre_h2"> O espaço</h2>
                            <p className="sobre_p"> O nosso espaço é dividido em duas partes, a sala de reuniões que tem capacidade máxima para até 25 pessoas, e o auditório contendo capacidade para até 50 pessoas. Ambos possuem no ambiente mesas para o coffee, cadeiras, projetores, sofás, lousas e ar condicionado.</p>

                        </div>

                    </div>
                    <div className="sobre_caixa5">
                        <img className="sobre_banner2_img" src={d} />
                    </div>
                </section>
                <Footer />

            </div>
        )
    }

}
export default Sobre_nosso_espaco;
