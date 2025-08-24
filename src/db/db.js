import Dexie from 'dexie';

export const db = new Dexie('AlidoDB');

db.version(1).stores({
  items: '++id, sku, name, category, price, price_wh, notes, qty, last_supply_date, supplier' 
});
