import Form from "../Form/Form";
import Header from "../Header/Header";
import {useState} from "react";
import CardList from "../CardList/CardList";
import cardItem from "../CardItem/CardItem";

function App() {
  const [cards, setCards] = useState(
    [
      {
        name: 'Наименование товара',
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Practica_L2_camera_front.jpg',
        price: 10000,
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id:1,
      },
      {
        name: 'Наименование товара',
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Practica_L2_camera_front.jpg',
        price: 15000,
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id:2,
      },
      {
        name: 'Наименование товара',
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Practica_L2_camera_front.jpg',
        price: 12000,
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id:3,
      },
      {
        name: 'Наименование товара',
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Practica_L2_camera_front.jpg',
        price: 13000,
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id:4,
      },
      {
        name: 'Наименование товара',
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Practica_L2_camera_front.jpg',
        price: 14000,
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id:5,
      },
      {
        name: 'Наименование товара',
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Practica_L2_camera_front.jpg',
        price: 22000,
        descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        id:6,
      },
    ]
  )

  const [filter,setFilter]=useState('')

  const createCard = (newCard) => {
    setCards([...cards, newCard])
  }

  const removeCard = (card) => {
    setCards(cards.filter(elem => elem.id !== card.id))
  }

  return (
    <>
      <Header/>
      <main>
        <Form create={createCard}/>
        <CardList cards={cards} remove={removeCard}/>
      </main>
    </>
  );
}

export default App;
