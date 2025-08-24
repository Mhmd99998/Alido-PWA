import React, { useEffect, useState } from 'react';
import { getAllItems, getItemsByName, getItemsBySku, getItemsBySupplier } from '../db/itemsApi';
import ItemCard from './ItemCard';
import SearchBar from './SearchBar';
import Box from '@mui/material/Box';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  const fetchItems = async () => {
    if (!query) {
      const all = await getAllItems();
      setItems(all);
    } else {
      // Search by name, SKU, or supplier
      const byName = await getItemsByName(query);
      const bySku = await getItemsBySku(query);
      const bySupplier = await getItemsBySupplier(query);

      // Merge and remove duplicates
      const merged = [...byName, ...bySku, ...bySupplier];
      const unique = Array.from(new Map(merged.map(item => [item.id, item])).values());
      setItems(unique);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [query]);

  return (
    <Box sx={{ padding: 2 }}>
      <SearchBar query={query} setQuery={setQuery} />
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Box>
  );
}
