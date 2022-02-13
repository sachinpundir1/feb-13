import Card from "./component/Card";
import Content from "./component/Content";
import Header from "./component/Header";
import "./App.css";

function App() {
  const title = "Lata Mangeshar";
  const workType = "Playback Singer";
  const imgSrc =
    "https://m.media-amazon.com/images/M/MV5BNDYyZWQwMTEtNGI0NS00MWM0LThhMTMtOGY4NmQzMWRmOTA2XkEyXkFqcGdeQXVyMTExNDQ2MTI@._CR0,75,955,537._SY351_SX624_AL_.jpg";

  const content = [
    "Lata Mangeshkar was born in Indore on September 28, 1929, and became, quite simply, the most popular playback singer in Bollywood's history",
    "Lata Mangeshkar was born in Indore on September 28, 1929, and became, quite simply, the most popular playback singer in Bollywood's history",
    "She was born the daughter of Dinanath Mangeshkar, the owner of a theater company and a reputed classical singer in his own right",
    "In 1948, she got her big break with Ghulam Haider in the film Majboor (1948), and 1949 saw the release of four of her films: Mahal (1949), Dulari (1949), Barsaat (1949), and Andaz (1949); all four of them became runaway hits, with their songs reaching to heights of what was until then unseen popularity",
    "The 1960s and 1970s saw her go from strength to strength, even as there were accusations that she was monopolizing the playback-singing industry.",
  ];

  return (
    <div className="App">
      <Header title={title} workType={workType} />
      <Card imgTitle={title} imgSrc={imgSrc} />

      <ul className="content">
        <p>A short Biography of Lata Mangeshar</p>
        {content.map((list) => {
          return (
            <li>
              <Content content={list} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
