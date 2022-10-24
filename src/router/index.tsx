import { createHashRouter } from 'react-router-dom';

import Maps from '../pages/Maps';
import Main from '../pages/Main';
import Pokemons from '../pages/Pokemons';
import StarWars from '../pages/StarWars';

export const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'maps',
    element: <Maps />,
  },
  {
    path: 'pokemons',
    element: <Pokemons />,
  },
  {
    path: 'starwars',
    element: <StarWars />,
  },
]);
