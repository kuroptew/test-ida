import React from 'react';
import classes from './header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>Добавление товара</h2>
      <select name="" id="" className={classes.select}>
        <option value="">По умолчанию</option>
        <option value="">По убыванию цены</option>
        <option value="">По возрастанию цены</option>
      </select>
    </header>
  );
};

export default Header;