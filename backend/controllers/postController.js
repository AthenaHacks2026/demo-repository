const mongoose = require("mongoose");
const Post = require("../models/Post");
require("../models/User");

// CREATE
const createPost = async (req, res) => {
	try {
		const { author, title, description, offering, skill_needed } = req.body;

		const post = await Post.create({
			author,
			title,
			description,
			offering,
			skill_needed,
		});

		res.status(201).json(post);
	} catch (error) {
		res.status(400).json({message: error.message});
	}
};

// READ ALL
const getAllPosts = async(req, res) => {
	try {
		const posts = await Post.find()
		.populate("author", "name email avatar_url skills bio")
			.sort({created_at: -1 });
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
};

// READ ONE
const getPostById = async (req, res) => {
	try {
		const { id } = req.params;

		if(!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({message: "Invalid post ID"});
		}

		const post = await Post.findById(id).populate(
			"author",
			"name email avatar_url skills bio"
		);

		if(!post) {
			return res.status(404).json({message: "Post not found" });
		}

		res.status(200).json(post);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
};

// UPDATE
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};