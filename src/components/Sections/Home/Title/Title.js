const Title = ({ title1, title2, title3 }) => {
  return (
    <div className="hometitle">
      <div className="hometitle__container">
        <h1 className="hometitle__container-title">
          {title1}
          <span className="hometitle__container-title-green">{title2}</span>
          {title3}
        </h1>
      </div>
    </div>
  );
};

export default Title;
