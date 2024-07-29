import React from 'react'
import { Link } from 'react-router-dom';
import Fondo1 from './Fondo1';
import Fondo2 from './Fondo2';
import Fondo3 from './Fondo3';
import Fondo4 from './Fondo4';
import Fondo5 from './Fondo5';

const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to="/wal1" className="links">
            <figure className="image-size">
              <Fondo1 />
              <figcaption>Hoja</figcaption>
            </figure>
        </Link>
        <Link to="/wal2" className="links">
            <figure className="image-size">
              <Fondo2 />
              <figcaption>Paisaje</figcaption>
            </figure>
        </Link>
        <Link to="/wal3" className="links">
            <figure className="image-size">
              <Fondo3 />
              <figcaption>Montañas</figcaption>
            </figure>
        </Link>
        <Link to="/wal4" className="links">
            <figure className="image-size">
              <Fondo4 />
              <figcaption>Mono</figcaption>
            </figure>
        </Link>
        <Link to="/wal5" className="links">
            <figure className="image-size">
              <Fondo5 />
              <figcaption>Lobo</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation