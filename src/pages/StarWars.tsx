import React, { useCallback, useEffect } from 'react';
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
  TextField,
  Typography,
} from '@mui/material';

const api = 'https://swapi.dev/api/';

interface Person {
  name: string;
}

export default function StarWars() {
  const [data, setData] = React.useState<Person[]>([]);
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const getStarWars = useCallback(async () => {
    setLoading(true);
    try {
      const res = await Axios.get(`${api}/people/?search=${text}`);
      setData(res.data.results);
    } catch {
      //
    }
    setLoading(false);
  }, [text]);

  useEffect(() => {
    getStarWars();
  }, [getStarWars]);

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
          <Typography variant="h4">
            Listado de personajes de Star Wars
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Buscar"
            value={text}
            onChange={e => setText(e.target.value)}
          />
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
