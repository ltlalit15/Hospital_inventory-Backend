const express = require('express');
const { validate, inventorySchemas } = require('../middleware/validation');
const { authenticateToken, authorize } = require('../middleware/auth');
const {
  getInventory,
  getInventoryById,
  createInventoryItem,
  updateInventoryItem,
  updateStock,
  deleteInventoryItem,
  getStockMovements,
  getCategories
} = require('../controllers/inventoryController');

const router = express.Router();

// All routes require authentication
// router.use(authenticateToken);

// Get categories
router.get('/categories', getCategories);

// Get all inventory items
router.get('/', getInventory);

// Get inventory item by ID
router.get('/:id', getInventoryById);

// Get stock movements for an item
router.get('/:id/movements', getStockMovements);

// Create inventory item
router.post('/',  validate(inventorySchemas.create), createInventoryItem);

// Update inventory item
router.put('/:id',  validate(inventorySchemas.update), updateInventoryItem);

// Update stock quantity
router.patch('/:id/stock', validate(inventorySchemas.stock), updateStock);

// Delete inventory item
router.delete('/:id',  deleteInventoryItem);

module.exports = router;