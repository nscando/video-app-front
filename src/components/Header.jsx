import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/icons8-rick-sanchez-50.png'
import userIcon from '../assets/static/user-icon.png'

const Header = () => (

     <header className='header'>
          <Link to="/">
               <img className='header__img' src={logo} alt='Logo' />
          </Link>

          <div className='header__menu'>
               <div className='header__menu--profile'>
                    <img src={userIcon} alt='userIcon' />
                    <p>Perfil</p>
               </div>
               <ul>
                    <li><a href='/'>Cuenta</a></li>
                    <li>
                         <Link to="/login">
                              Iniciar Sesion
                    </Link>
                    </li>
               </ul>
          </div>
     </header>

);

export default Header;
