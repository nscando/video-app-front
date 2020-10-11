import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/icons8-rick-sanchez-50.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Logo" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt="{user.email}" /> :
            <img src={userIcon} alt="userIcon" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href="/">{user.name}</a></li> :
            null
          }
          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li> : (
              <li>
                <Link to="/login">
                  Iniciar Sesion
                </Link>
              </li>
            )}

        </ul>
      </div>
    </header>

  );
};

const maptStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func.isRequired,
};

export default connect(maptStateToProps, mapDispatchToProps)(Header);
