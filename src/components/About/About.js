import React from 'react';
import me from '../../images/me.jpeg';

export default function About() {
  return (
    <div
      id="about"
      className="author"
    >
      <img
        src={me}
        alt="Jesus Jara"
        className="author__image"
      />
      <div className="author__info">
        <h2 className="author__subtitle">Acerca del autor</h2>
        <p className="author__about">
          Hola! mi nombre es Jesus Jara, soy <strong>desarrollador web</strong>{' '}
          y me dedico a la creación de aplicaciones web con ayuda de tecnologías
          como HTML, CSS, Javascript, React, Node JS, Git, entre otras.
        </p>
        <p className="author__about">
          Gracias a la comunidad de Tripleten he descubierto todas estas
          herramientas que me servirán para ocupar un lugar en la industria
          tecnológica y comenzar mi camino en esta emocionante carrera.
        </p>
      </div>
    </div>
  );
}
