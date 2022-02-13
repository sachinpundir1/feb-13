function Header(props) {
  const { title, workType } = props;
  return (
    <header>
      <div className="header--container">
        <div className="header--title">
          <p>{title}</p>
          <p className="workType">{workType}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
