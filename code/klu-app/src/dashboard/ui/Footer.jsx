import React, { Component } from 'react'
import iconKluLogo from '../../assets/images/icons/header/general-logo-full.svg';
import iconFacebook from '../../assets/images/icons/social/facebook.svg';
import iconInstagram from '../../assets/images/icons/social/instagram.svg';
import iconTwitter from '../../assets/images/icons/social/twitter.svg';

export const Footer = () => {
    return (
        <div>
        <footer id="klu-footer" className="container-fluid box-shadow footer">
        <div className="container footer_container">
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src={iconKluLogo} alt="Klu" />
                        </a>
                    </div>
                </div>
                <div className="col-md-9 text-end">
                    <div>
                        <p className="footer__group-links">
                            Aviso de privacidad | Términos y condiciones | Comisiones | Políticas de Cookies | FAQ'S
                        </p>
                    </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col">
                    <p className="footer__derechos">
                        Klu® 2022. Todos los derechos reservados.
                    </p>
                </div>
                <div className="col">
                    <div className="text-end">
                        <a className="navbar-brand" href="#">
                            <img src={iconFacebook} alt="facebook" />
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={iconTwitter} alt="twitter" />
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={iconInstagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row pt-3 text-center">
                <p className="footer__parrafo">
                    “En términos de la disposición octava transitoria de la Ley para Regular las Instituciones de Tecnología
                    Financiera publicada en el Diario Oficial de la Federación el 9 de marzo de 2018, la autorización para
                    llevar a cabo operaciones a través de nuestra plataforma se encuentra en trámite ante la Comisión
                    Nacional Bancaria y de Valores por lo que no es una actividad supervisada por las autoridades
                    mexicanas”.
                </p>
            </div>
        </div>
    </footer>
    </div>
    )
  }

