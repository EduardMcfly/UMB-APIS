import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <h1>APIS</h1>
      <Button component={Link} to="maps">
        Google Maps
      </Button>
      <Button component={Link} to="pokemons">
        Pokemons
      </Button>
      <Button component={Link} to="starwars">
        Star Wars
      </Button>
    </div>
  );
}

export default Main;
