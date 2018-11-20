import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

export default class Header extends Component {


  render() {

    return (
      <header className={styles.header}>
        <h1>Encylopedia Musica</h1>
        <nav className={styles.nav}>
          <Link
            to={'/search'}
            className={styles.link}
          >
            Search
          </Link>
          <Link
            to={'/about'}
            className={styles.link}
          >
            About
          </Link>
        </nav>
      </header>
    );
  }


}
