import './style.css';
import CubosPuzzle from '../../assets/logo.svg'
import Card from '../../components/Card'
import Congrats from '../../assets/congrats.png'
import { useState } from 'react';
import CardArray from '../../card-array'


export default function Main() {
  const [cards, setCards] = useState([...CardArray])

  function reset() {
    let cardsAux = CardArray
    cardsAux.forEach(card => {
      card.turned = false
    });
    setCards(cardsAux)
  }
  return (
    <div className='container'>
      <div className='puzzle-lateral'>
        <img className='img-puzzle' src={CubosPuzzle} alt="Logo Cubos Puzzle" />
        <button
          onClick={() => reset()}
        >RESET
        </button>
      </div>
      <div className='area-jogo'>
        <div className='jogo'>
          {cards.length ?
            cards.map((card, index) => (
              <Card
                cards={cards}
                setCards={setCards}
                card={card}
                index={index}
                key={card.id}
              />
            )) : <img src={Congrats} alt="Congrats" />
          }
        </div>
      </div>
    </div>
  );
}


