import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ query, setQuery }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder="Search by name, SKU, or supplier"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: '100%',
        marginBottom: 2,
        backgroundColor: 'white',
        borderRadius: 1,
      }}
    />
  );
}
