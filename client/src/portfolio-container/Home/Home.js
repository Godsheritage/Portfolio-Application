import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

function Home(props) {
    return (
        <div className="home-container" id={ props.id || ''}>
            <Header />
            <Profile />
            <Footer /> 
            <div className='icon'>
            <a href='https://www.linkedin.com/in/godsheritage/' target = '_blank' rel='noopener noreferrer'  className='linkedin'><i className='fa fa-linkedin'></i> Linkedin </a>
            <a href='https://github.com/Godsheritage' target = '_blank' rel='noopener noreferrer' className='github'> <i className='fa fa-github'></i>Github</a>
            <a href='https://twitter.com/kyng_Herit' target = '_blank' rel='noopener noreferrer' className='twitter'> <i className='fa fa-twitter'></i> twitter </a>
          </div>
        </div>
    )
}

export default Home;
