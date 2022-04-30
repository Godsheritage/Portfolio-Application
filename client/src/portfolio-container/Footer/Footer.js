import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    /* SOCIALS STATIC DATA */
let socialDetails = [ { /*icon: faFacebook, link: '' */ },
                          { icon: faLinkedin, link: 'https://www.linkedin.com/in/godsheritage/' },
                          { icon: faGithub, link: 'https://github.com/Godsheritage' },
                          { icon: faInstagram, link: '#' } ]

    /* GET CURRENT YEAR */
    let currentYear = new Date().getFullYear();

    /* RENDER SOCIAL ICONS */
    const getSocials = () => {
        return (socialDetails.map((social,index) => (
            <a rel="noopener noreferrer" key={index} href={social.link} target="_blank" >
                <FontAwesomeIcon className="social-icon" icon={social.icon} />
            </a>
        )));
    }

    return (
        <div className="main-footer-container">
            <div className="main-footer-content">
                <div className="main-footer-message">
                    <span> All rights reserved ©  <span><span className = 'selected-header-option'>'</span>Godsherit<span className = 'selected-header-option'>age</span></span> { currentYear } </span>
                </div>
                <div className="main-footer-socials">
                    { getSocials() }
                </div>
            </div>
        </div>
    )
}

export default Footer;
