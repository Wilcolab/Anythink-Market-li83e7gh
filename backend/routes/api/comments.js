/**
 * Comments API Routes
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Retrieves all comments for a specific item
 * @route GET /:item
 * @param {string} req.params.item - The slug of the item
 * @returns {Object} JSON response with array of comments
 * @throws {Error} 500 - Server error if retrieval fails
 */
router.get("/:item", async (req, res) => {
  try {
    const comments = await Comment.find({ item: req.params.item }).populate("seller");
    res.json({ comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// add an endpoint for deleting a comment
/**
 * Deletes a specific comment by ID
 * @route DELETE /:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @returns {void} 204 - No content on successful deletion
 * @throws {Error} 500 - Server error if deletion fails
 */
router.delete("/:commentId", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
