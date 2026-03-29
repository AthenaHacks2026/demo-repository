const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: [true, "Title is required"],
      		trim: true,
		},
		description: {
			type: String,
      		required: [true, "Description is required"],
      		trim: true,
		},
		offering: {
			type: String,
      		required: [true, "Offering is required"],
      		trim: true,
		},
		skill_needed: {
			type: String,
      		required: [true, "Skill needed is required"],
      		trim: true,
		},
	},
	{ timestamps: { createdAt: "created_at", updatedAt: false}}
);

module.exports = mongoose.model("Post", postSchema)