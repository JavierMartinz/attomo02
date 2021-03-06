import React from 'react';
import './Header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import headerLogo from '../../Assets/Images/Mobile/Group 38.png';
import videoGranada from '../../Assets/Video/TOURGCF.mp4';


function Header() {
  return (
    <header>
        <div className='header'>

            <video auoplay loop muted playsInline className='back-video'>
                <source src={videoGranada} type="video/mp4"></source>
                Tu navegador no soporta los vídeos de HTML5
            </video>
            
            <nav>
            <div className='dropdown'>
                <div className='dropdown-icon'>
                    <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
                </div>

                <div className='dropdown-content'>
                    <li>Mural interactivo</li>
                    <li>Experiencia inmersiva 360°</li>
                    <li>Foto con jugadores</li>
                </div>
            </div>

            
            <img className='image-logo' src={headerLogo} alt=''></img>
            

            <div className='dropdown-content-desktop'>
                    <li>¿Qué es?</li>
                    <li>¿Qué incluye?</li>
                    <li>Info Práctica</li>
            </div>
            
            <div className='btn-container'>
                <button>Comprar entradas</button>
            </div>

            </nav>

            
            
        </div>
        
    </header>
  )
}

export default Header