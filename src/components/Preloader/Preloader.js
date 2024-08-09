import React from 'react';

export default function Preloader(props) {
  return (
    <i className={`app__circle-preloader ${props.state && 'visible'}`}></i>
  );
}
