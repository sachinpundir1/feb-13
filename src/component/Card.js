function Card(props) {
  const { imgSrc, imgTitle } = props;
  return (
    <div className="card">
      <img src={imgSrc} alt="src--pic" />
      <p>{imgTitle}</p>
    </div>
  );
}

export default Card;
