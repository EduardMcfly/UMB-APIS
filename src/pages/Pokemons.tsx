import React, { useEffect } from 'react';
import Axios from 'axios';
import {
  Box,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

const api = 'https://pokeapi.co/api/v2';

interface Pokemon {
  name: string;
}

export default function Pokemons() {
  const [data, setData] = React.useState<Pokemon[]>([]);
  const [limit, setLimit] = React.useState(10);
  const [loading, setLoading] = React.useState(false);
  const getPokemons = async (limit = 10) => {
    setLoading(true);

    try {
      const res = await Axios.get(`${api}/pokemon?limit=${limit}&offset=0`);
      setData(res.data.results);
    } catch {
      //
    }
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: 1,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4">Listado de pokemons</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Limite</InputLabel>
            <Select
              value={limit}
              label="Age"
              onChange={e => {
                const newLimit = +e.target.value;
                setLimit(newLimit);
                getPokemons(newLimit);
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ position: 'relative' }}>
          {loading && (
            <Box position="absolute" width="100%" height="100%">
              <Box display="flex" justifyContent="center" width="100%">
                <CircularProgress size={50} />
              </Box>
            </Box>
          )}
          <Grid container spacing={1} sx={loading ? { opacity: 0.5 } : {}}>
            {data.map((pokemon, index) => (
              <Grid item xs={12} key={index}>
                {pokemon.name}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
