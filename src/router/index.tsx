import { createBrowserRouter, Link } from 'react-router-dom';

import Maps from '../pages/Maps';
import Main from '../pages/Main';
import Pokemons from '../pages/Pokemons';
import StarWars from '../pages/StarWars';

export const router = createBrowserRouter([
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
