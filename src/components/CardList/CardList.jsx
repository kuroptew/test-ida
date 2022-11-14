import { TransitionGroup, CSSTransition } from "react-transition-group";
import CardItem from "../CardItem/CardItem";
import classes from "../CardItem/card.module.scss"

const CardList = ({ cards, remove }) => {
  return (
    <ul className='card__list'>
        {cards.map(card =>
            <CardItem key={card.id} classNames={classes.card} name={card.name} price={card.price} descr={card.descr} img={card.img} remove={remove} card={card} />
        )}
    </ul>
  );
};

export default CardList;