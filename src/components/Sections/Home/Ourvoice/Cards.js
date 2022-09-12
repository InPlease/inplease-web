import cards from './Card.json';
function Cards() {
  return (
    <div className="ourvoice__container-right">
      {cards.map((card) => {
        return (
          <div className="ourvoice__container-right-item">
            <h1 className="ourvoice__container-right-item-title" key={card.id}>
              {card.title}
            </h1>
            <p className="ourvoice__container-right-item-content">
              {card.content}
            </p>
            <div className="ourvoice__container-right-item-information">
              <p className="ourvoice__container-right-item-information-readers">
                {card.readers}
              </p>
              <p className="ourvoice__container-right-item-information-links">
                {card['information-links']}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
