import React from 'react';

/* Notar que el valor de "props.type" debe coincidir con el valor se "setTypeError()" en la llamada a la API en "App" cuando la longitud del array es 0. */

export default function NotFound(props) {
  return (
    <div className={`not-found ${props.failed && 'visible'}`}>
      <h1 className="not-found__title">
        {props.type === 'not-found'
          ? 'No se ha encontrado nada'
          : 'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde'}
      </h1>
    </div>
  );
}
