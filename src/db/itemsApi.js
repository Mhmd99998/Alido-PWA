import { db } from './db';

/**
 * Create a new item
 * @param {Object} item 
 * @returns {Promise<number>} ID of inserted item
 */
export async function createItem(item) {
  return await db.items.add(item);
}

/**
 * Get all items
 * @returns {Promise<Array>}
 */
export async function getAllItems() {
  return await db.items.toArray();
}

/**
 * Get item by ID
 * @param {number} id
 * @returns {Promise<Object | undefined>}
 */
export async function getItemById(id) {
  return await db.items.get(id);
}

/**
 * Query items by SKU
 * @param {string} sku
 * @returns {Promise<Array>}
 */
export async function getItemsBySku(sku) {
  return await db.items.where('sku').equals(sku).toArray();
}

/**
 * Query items by Name (case-sensitive substring match)
 * @param {string} name
 * @returns {Promise<Array>}
 */
export async function getItemsByName(name) {
  return await db.items.where('name').equals(name).toArray();
}

/**
 * Query items by Supplier
 * @param {string} supplier
 * @returns {Promise<Array>}
 */
export async function getItemsBySupplier(supplier) {
  return await db.items.where('supplier').equals(supplier).toArray();
}

/**
 * Update an item
 * @param {number} id
 * @param {Object} changes
 * @returns {Promise<number>} number of updated records
 */
export async function updateItem(id, changes) {
  return await db.items.update(id, changes);
}

/**
 * Delete an item
 * @param {number} id
 * @returns {Promise<void>}
 */
export async function deleteItem(id) {
  return await db.items.delete(id);
}
