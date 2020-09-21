import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src="img/logo.svg" alt="Logo" />
    </header>
}

export default Header;