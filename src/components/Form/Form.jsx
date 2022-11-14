import React, {useState} from 'react';
import classes from './form.module.scss';
import uuid from 'react-uuid';

const Form = ({create}) => {
  const [card, setCard] = useState({
    name: '',
    img: '',
    price: '',
    descr: '',
  })

  const addNewCard = (e) => {
    e.preventDefault();
    const newCard = {...card, id: uuid()}
    create(newCard);
    setCard({
      name: '',
      img: '',
      price: '',
      descr: '',
    })
  }

  return (

    <form className={classes.form}>
      <div className={classes.wrapper__input}>
        <label htmlFor="card-name" className={classes.input__label} aria-required>Наименование товара</label>
        <input id='card-name'
               type="text"
               placeholder='Введите наименование товара'
               value={card.name}
               onChange={e => setCard({...card, name: e.target.value})}
               className={classes.form__input}
               required/>
      </div>
      <div className={classes.wrapper__input}>
        <label htmlFor="card-descr" className={classes.input__label}>Описание товара</label>
        <textarea id='card-descr'
                  type="text"
                  placeholder='Введите описание товара'
                  value={card.descr}
                  onChange={e => setCard({...card, descr: e.target.value})}
                  className={classes.form__textarea}/>
      </div>
      <div className={classes.wrapper__input}>
        <label htmlFor="card-img" data-required='true' className={classes.input__label} aria-required>Ссылка на
          изображение
          товара</label>
        <input id='card-img'
               type="text"
               placeholder='Введите ссылку'
               value={card.img}
               onChange={e => setCard({...card, img: e.target.value})}
               className={classes.form__input}
               required/>
      </div>
      <div className={classes.wrapper__input}>
        <label htmlFor="card-price" data-required='true' className={classes.input__label} aria-required>Цена
          товара</label>
        <input id='card-price'
               type="text"
               placeholder="Введите цену"
               value={card.price ? Number(card.price.replace(/\D/g, '')).toLocaleString('ru') : ''}
               onChange={e => setCard({...card, price: e.target.value})}
               className={classes.form__input}
               required/>
      </div>
      <button
        type='submit'
        disabled={!card.name || !card.img || !card.price}
        onClick={addNewCard}
        className={classes.form__button}
      >Добавить товар
      </button>
    </form>
  );
};

export default Form;