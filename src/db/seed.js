import { getAllItems, createItem } from "./itemsApi";

export async function seedItems() {
  const existing = await getAllItems();
  if (existing.length > 0) return; // already seeded

  await createItem({
    sku: "SKU001",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25,
    price_wh: 20,
    notes: "Ergonomic design",
    qty: 15,
    last_supply_date: "2025-08-01",
    supplier: "Supplier A",
  });

  await createItem({
    sku: "SKU002",
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 60,
    price_wh: 50,
    notes: "RGB backlit",
    qty: 8,
    last_supply_date: "2025-08-10",
    supplier: "Supplier B",
  });

  await createItem({
    sku: "SKU003",
    name: "Notebook A5",
    category: "Stationery",
    price: 5,
    price_wh: 3,
    notes: "100 pages",
    qty: 100,
    last_supply_date: "2025-08-20",
    supplier: "Supplier C",
  });

  console.log("✅ Seeded initial items into DB");
}
