import { Router } from 'express'
import {
  addReview,
  getProductReviews,
  deleteReview,
} from '../controllers/reviewController'
import { verifyToken } from '../controllers/authController'

const router = Router()

router.post('/', verifyToken, addReview)
router.get('/product/:productId', getProductReviews)
router.delete('/:id', verifyToken, deleteReview)

export default router
