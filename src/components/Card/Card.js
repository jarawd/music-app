import React from 'react';

export default function Card(props) {
  const item = props.item;
  const date = new Date(item.publishedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let monthName;

  switch (month) {
    case 0:
      monthName = 'enero';
      break;
    case 1:
      monthName = 'febrero';
      break;
    case 2:
      monthName = 'marzo';
      break;
    case 3:
      monthName = 'abril';
      break;
    case 4:
      monthName = 'mayo';
      break;
    case 5:
      monthName = 'junio';
      break;
    case 6:
      monthName = 'julio';
      break;
    case 7:
      monthName = 'agosto';
      break;
    case 8:
      monthName = 'septiembre';
      break;
    case 9:
      monthName = 'octubre';
      break;
    case 10:
      monthName = 'noviembre';
      break;
    case 11:
      monthName = 'diciembre';
      break;
    default:
      monthName = 'Desconocido';
  }
  return (
    <article className="article">
      <img
        className="article__image"
        src={item.urlToImage}
        alt={item.title}
      />
      <div className="article__info">
        <p className="article__date">{`${day} de ${monthName} de ${year}`}</p>
        <h2 className="article__title">{item.title}</h2>
        <div className="article__description">{item.description}</div>
        <p className="article__source">{item.source.name.toUpperCase()}</p>
      </div>
    </article>
  );
}
