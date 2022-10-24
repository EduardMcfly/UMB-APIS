import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { router } from './router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
