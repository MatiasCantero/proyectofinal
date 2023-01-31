import { Router } from "express";
import {
  renderReviewForm,
  createNewReview,
  renderReviews,
  renderEditForm,
  updateReview,
  deleteReview,
} from "../controllers/reviews.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// New Review
router.get("/reviews/add", isAuthenticated, renderReviewForm);

router.post("/reviews/new-review", isAuthenticated, createNewReview);

// Get All Reviews
router.get("/reviews", isAuthenticated, renderReviews);

// Edit Reviews
router.get("/reviews/edit/:id", isAuthenticated, renderEditForm);

router.put("/reviews/edit-review/:id", isAuthenticated, updateReview);

// Delete Reviews
router.delete("/reviews/delete/:id", isAuthenticated, deleteReview);

export default router;
