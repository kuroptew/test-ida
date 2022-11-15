import Form from "../Form/Form";
import Header from "../Header/Header";
import {useState} from "react";
import CardList from "../CardList/CardList";
import {useSortedCards} from "../../hooks/useSortedCards";
import img from '../../img/img-card.png'


function App() {
  const [cards, setCards] = useState(
    [
      {
        name: 'Наименование товара',
        img: img,
        price: '10000',
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id: 1,
      },
      {
        name: 'Наименование товара',
        img: img,
        price: '15000',
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id: 2,
      },
      {
        name: 'Наименование товара',
        img: img,
        price: '12000',
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id: 3,
      },
      {
        name: 'Наименование товара',
        img: img,
        price: '13000',
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id: 4,
      },
      {
        name: 'Наименование товара',
        img: img,
        price: '14000',
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id: 5,
      },
      {
        name: 'Наименование товара',
        img: img,
        price: '22000',
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id: 6,
      },
    ]
  )

  const [sort, setSort] = useState('')
  const sortedCars = useSortedCards(cards, sort)

  const createCard = (newCard) => {
    setCards([...cards, newCard])
  }

  const removeCard = (card) => {
    setCards(cards.filter(elem => elem.id !== card.id))
  }

  const onUpdateSort = (sort) => {
    setSort(sort)
  }

  return (
    <div className='container'>
      <Header sort={sort} onUpdateSort={onUpdateSort}/>
      <main>
        <Form create={createCard}/>
        <CardList cards={sortedCars} remove={removeCard}/>
      </main>
    </div>
  );
}

export default App;
