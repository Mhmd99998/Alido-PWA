import React from 'react';
import ItemList from './components/ItemsList';
import { CssBaseline, Container, Typography } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingTop: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ m: 2 }}>
          Inventory
        </Typography>
        <ItemList />
      </Container>
    </>
  );
}

export default App;
