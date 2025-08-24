import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ItemCard({ item }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1,
        marginBottom: 1,
        borderRadius: 2,
        boxShadow: 1,
        boxSizing: 'border-box',
        width: '100%'
      }}
    >
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {item.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {item.sku}
        </Typography>
      </Box>
      <Typography variant="subtitle1" fontWeight="bold">
        ${item.price.toFixed(2)}
      </Typography>
    </Card>
  );
}
