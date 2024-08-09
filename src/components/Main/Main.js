import React from 'react';
import Card from '../Card/Card';
import NotFound from '../NotFound/NotFound';
import { useContext } from 'react';
import About from '../About/About';
import { CardsContext } from '../../contexts/CardsContext';

export default function Main(props) {
  const cardsNumber = useContext(CardsContext);

  function renderThreeMore() {
    cardsNumber.setRenderThree((previousValue) => previousValue + 3);
  }
  const articles = props.articles;
  return (
    <main
      id="main"
      className="main"
    >
      {articles.length !== 0 && (
        <h2 className="main__title">Resultados de la búsqueda</h2>
      )}
      <section className="main__content">
        {props.failed ? (
          <NotFound
            failed={props.failed}
            type={props.type}
          />
        ) : (
          articles.slice(0, cardsNumber.renderThree).map((el, i) => {
            return (
              <Card
                key={i}
                item={el}
              />
            );
          })
        )}
      </section>
      {cardsNumber.renderThree < articles.length && articles.length !== 0 ? (
        <button
          className="main__renderButton"
          onClick={renderThreeMore}
        >
          Mostrar más
        </button>
      ) : (
        ''
      )}
      <About />
    </main>
  );
}
