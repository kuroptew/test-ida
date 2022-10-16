import React, {useState} from 'react';
import classes from './form.module.scss';
import uuid from 'react-uuid';

const Form = ({create}) => {
  const [card, setCard] = useState({
    name: '',
    img: '',
    price: null,
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
      <label htmlFor="card-name" data-required='true'>Наименование товара</label>
      <input id='card-name'
             type="text"
             placeholder='Введите наименование товара'
             value={card.name}
             onChange={e => setCard({...card, name: e.target.value})}/>
      <label htmlFor="card-descr" >Описание товара</label>
      <textarea id='card-descr'
                type="text"
                placeholder='Введите описание товара'
                value={card.descr}
                onChange={e => setCard({...card, descr: e.target.value})}/>
      <label htmlFor="card-img" data-required='true'>Ссылка на изображение товара</label>
      <input id='card-img'
             type="text"
             placeholder='Введите ссылку'
             value={card.img}
             onChange={e => setCard({...card, img: e.target.value})}
      />
      <label htmlFor="card-price" data-required='true'>Цена товара</label>
      <input id='card-price'
             type="number"
             placeholder="Введите цену"
             value={card.price}
             onChange={e => setCard({...card, price: e.target.value})}
      />
      <button type='submit' disabled={!card.name || !card.img || !card.price} onClick={addNewCard}>Добавить товар
      </button>
    </form>
  );
};

export default Form;