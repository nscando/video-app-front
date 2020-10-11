import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome, searchVideo } = props;
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleSearch = (event) => {
    searchVideo(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={handleSearch}
      />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
  searchVideo: PropTypes.func,
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
