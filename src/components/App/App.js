import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useState } from 'react';
import api from '../../utils/ThirdPartyApi';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { CardsContext } from '../../contexts/CardsContext';

function App() {
  const [data, setData] = useState([]);
  const [preloaderState, setPreloaderState] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [typeError, setTypeError] = useState('');
  const [renderThree, setRenderThree] = useState(3);

  function getInfo(topic) {
    api
      .getCards(topic)
      .then((data) => {
        setPreloaderState(true);
        if (data.ok) {
          return data.json();
        } else {
          setNotFound(true);
          setPreloaderState(false);
          setTypeError('Error Server');
          throw new Error(`Error: ${data.status}`);
        }
      })
      .then((res) => {
        setPreloaderState(false);
        if (res.articles.length === 0) {
          setTypeError('not-found');
          setNotFound(true);
        } else {
          const validArticles = res.articles.filter(
            (item) =>
              item.description !== '[Removed]' &&
              item.urlToImage !== null &&
              item.urlToImage !== ''
          );
          setData(validArticles);
          setNotFound(false);
        }
      })
      .catch((err) => console.log(err.message));
  }

  const contextVariables = {
    renderThree,
    setRenderThree,
  };

  return (
    <div className="app">
      <CardsContext.Provider value={contextVariables}>
        <Preloader state={preloaderState} />
        <Header getInfo={getInfo} />
        <Main
          articles={data}
          failed={notFound}
          type={typeError}
        />
        <Footer />
      </CardsContext.Provider>
    </div>
  );
}

export default App;
