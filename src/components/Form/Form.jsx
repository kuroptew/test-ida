import React, {useState} from 'react';
import classes from './form.module.scss';
import uuid from 'react-uuid';
import useInput from "../../hooks/useInput";

const Form = ({create}) => {
  const cardNameInput = useInput('', {minLength: 3, isEmpty: true})
  const cardImageInput = useInput('', {isImage: false, isEmpty: true})
  const cardPriceInput = useInput('', {minValue:1000, isEmpty:true})

  const validName = cardNameInput.isDirty && (cardNameInput.isEmpty || cardNameInput.minLengthError)
  const validImage = cardImageInput.isDirty && (cardImageInput.isEmpty || cardImageInput.imageError)
  const validPrice = cardPriceInput.isDirty && (cardPriceInput.isEmpty || cardPriceInput.minValueError)

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
    });
    cardNameInput.setValue('');
    cardNameInput.setDirty(false)

    cardImageInput.setValue('')
    cardImageInput.setDirty(false)

    cardPriceInput.setValue('')
    cardPriceInput.setDirty(false)


  }

  return (
    <form className={classes.form}>
      <div className={classes.form__wrapper__input}>
        {validName && <div className={classes.form__input__error}>{cardNameInput.errorMessage}</div>}
        <label htmlFor="card-name" className={classes.input__label} aria-required>Наименование товара</label>
        <input id='card-name'
               type="text"
               placeholder='Введите наименование товара'
               value={cardNameInput.value}
               onChange={e => {
                 cardNameInput.onChange(e)
                 setCard({...card, name: e.target.value})
               }}
               onBlur={e => cardNameInput.onBlur(e)}
               className={classes.form__input}
               required
               aria-invalid={validName}
        />
      </div>
      <div className={classes.form__wrapper__input}>
        <label htmlFor="card-descr" className={classes.input__label}>Описание товара</label>
        <textarea id='card-descr'
                  type="text"
                  placeholder='Введите описание товара'
                  value={card.descr}
                  onChange={e => setCard({...card, descr: e.target.value})}
                  className={classes.form__textarea}/>
      </div>
      <div className={classes.form__wrapper__input}>
        {validImage && <div className={classes.form__input__error}>{cardImageInput.errorMessage}</div>}
        <label htmlFor="card-img" data-required='true' className={classes.input__label} aria-required>Ссылка на
          изображение
          товара</label>
        <input id='card-img'
               type="text"
               placeholder='Введите ссылку'
               value={cardImageInput.value}
               onChange={e => {
                 cardImageInput.onChange(e)
                 setCard({...card, img: e.target.value})
               }}
               onBlur={e => cardImageInput.onBlur(e)}
               className={classes.form__input}
               aria-invalid={validImage}
               required/>
      </div>
      <div className={classes.form__wrapper__input}>
        {validPrice && <div className={classes.form__input__error}>{cardPriceInput.errorMessage}</div>}
        <label htmlFor="card-price" data-required='true' className={classes.input__label} aria-required>Цена
          товара</label>
        <input id='card-price'
               type="text"
               placeholder="Введите цену"
               value = {cardPriceInput.value ? Number(cardPriceInput.value.replace(/\D/g, '')).toLocaleString('ru') : ''}
               onChange={e => {
                 cardPriceInput.onChange(e)
                 setCard({...card, price: e.target.value})
               }}
               onBlur={e => cardPriceInput.onBlur(e)}
               className={classes.form__input}
               aria-invalid={validPrice}
               required/>
      </div>
      <button
        type='submit'
        disabled={validName || validImage || validPrice || !cardNameInput.isDirty || !cardImageInput.isDirty || !cardPriceInput.isDirty}
        onClick={addNewCard}
        className={classes.form__button}
      >Добавить товар
      </button>
    </form>
  );
};

export default Form;