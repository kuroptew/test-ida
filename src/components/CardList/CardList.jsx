import CardItem from "../CardItem/CardItem";

const CardList = ({cards, remove}) => {
  return (
    <ul className='card__list'>
      {cards.map(card=>
        <CardItem name={card.name} price={card.price} descr={card.descr} key={card.id} img={card.img} remove={remove} card={card}/>
      )}
    </ul>
  );
};

export default CardList;