import Review from "../models/Review.js";

export const renderReviewForm = (req, res) => res.render("reviews/new-review");

export const createNewReview = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Please Write a Title." });
  }
  if (!description) {
    errors.push({ text: "Please Write a Description" });
  }
  if (errors.length > 0)
    return res.render("reviews/new-review", {
      errors,
      title,
      description,
    });

  const newReview = new Review({ title, description });
  newReview.user = req.user.id;
  await newReview.save();
  req.flash("success_msg", "Review Added Successfully");
  res.redirect("/reviews");
};

export const renderReviews = async (req, res) => {
  const reviews = await Review.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("reviews/all-reviews", { reviews });
};

export const renderEditForm = async (req, res) => {
  const review = await Review.findById(req.params.id).lean();
  if (review.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/reviews");
  }
  res.render("reviews/edit-review", { review });
};

export const updateReview = async (req, res) => {
  const { title, description } = req.body;
  await Review.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Review Updated Successfully");
  res.redirect("/reviews");
};

export const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Review Deleted Successfully");
  res.redirect("/reviews");
};
