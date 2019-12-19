import React from 'react';

import './Footer.css';



const Footer = () => {
    return(
    
        <footer className="footer">

        <div className="footer_empresa">
            <h4>ThoughtWorks</h4>
            <span>Todos os direitos reservados.</span>
        </div>

        <div className="footer_midiasocial">
            <h4>Mídias sociais</h4>

            <div className="icons">
                <i className="fab fa-instagram icons_media"></i>
                <i className="fab fa-youtube icons_media"></i>
                <i className="fab fa-twitter icons_media"></i>
                <i className="fab fa-facebook-square icons_media"></i>
                <i className="fab fa-linkedin-in icons_media"></i>
            </div>

        </div>

    </footer>

    )
}
export default Footer;