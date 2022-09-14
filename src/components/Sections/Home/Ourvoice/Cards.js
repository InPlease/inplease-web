function Cards({ title, content, readers, information }) {
  return (
    <div className="ourvoice__container-right">
      <div className="ourvoice__container-right-item">
        <h1 className="ourvoice__container-right-item-title">{title}</h1>
        <p className="ourvoice__container-right-item-content">{content}</p>
        <div className="ourvoice__container-right-item-information">
          <p className="ourvoice__container-right-item-information-readers">
            {readers}
          </p>
          <p className="ourvoice__container-right-item-information-links">
            {information}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
