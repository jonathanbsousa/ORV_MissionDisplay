import missao from '../assets/biyoo_2.png';
import mapa from '../assets/Ganpyeongui.png';
import bau from '../assets/bau_tratado.png';
import camera from '../assets/camera_tratado.png';
import { Link } from 'react-router-dom'

export function Menu() {
  return (
    <nav className='menu' aria-label="Menu principal">
      <ul>
        <li>
          <Link to="missao" aria-label="Ir para Missões">
            <figure>
              <img src={missao} alt="Ícone de missões" />
              <figcaption>Missões</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="" aria-label="Abrir inventário">
            <figure>
              <img src={bau} alt="Ícone de inventário" />
              <figcaption>Inventário</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="" aria-label="Abrir mapa de geolocalização">
            <figure>
              <img src={mapa} alt="Ícone de mapa" />
              <figcaption>GeoLocalização</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="camera" aria-label="Abrir câmera">
            <figure>
              <img src={camera} alt="Ícone de câmera" />
              <figcaption>Câmera</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
