import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// @desc    Fetch a single product
// @route   GET /api/products/:id
// @access  Public
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     // const product = products.find((p) => p._id === req.params.id);
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       // res.status(404).json({ message: 'Product not found!' });
//       res.status(404);
//       throw new Error('Product not Found');
//     }
//   })
// );

export default router;
