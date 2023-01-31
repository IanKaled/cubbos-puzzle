import CardBack from '../assets/card-back.png';
import '../pages/Main/style.css';


export default function Card({ cards, setCards, card, index }) {

  function clickCard(id) {
    const localCards = [...cards]
    const turnedCards = localCards.filter((localCard) => localCard.turned)
    if (turnedCards.length > 1) {
      return
    }
    localCards[id].turned = true
    setCards([...localCards])
    turnedCards.push(localCards[id])

    if (turnedCards[0].slug === turnedCards[1].slug) {
      const filterCards = localCards.filter((localCard) => {
        return localCard.slug !== turnedCards[0].slug
      })
      setTimeout(() => setCards(filterCards), 1500)
    } else {

      setTimeout(() => {
        const mapCards = localCards.map((localCard) => {
          localCard.turned = false
          return localCard
        })
        setCards(mapCards)
      }, 1500)
    }


  }

  return (
    <div>
      <img
        className='card-img'
        onClick={() => clickCard(index)}
        src={card.turned ? card.image : CardBack}
        alt="Card Image" />
    </div>
  )
}
