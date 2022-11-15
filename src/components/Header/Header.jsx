import React from 'react';
import classes from './header.module.scss'

const Header = ({sort, onUpdateSort}) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Добавление товара</h1>
      <select name=""
              id=""
              className={classes.select}
              value={sort}
              onChange={event => onUpdateSort(event.target.value)}
      >
        <option value="">По умолчанию</option>
        <option value="name">По наименованию</option>
        <option value="min">По убыванию цены</option>
        <option value="max">По возрастанию цены</option>
      </select>

    </header>
  );
};

export default Header;