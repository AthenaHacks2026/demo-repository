const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		firebase_uid: {
  			type: String,
  			required: true,
 			unique: true
		},
		avatar_url: {
			type: String,
			default: "",
		},
		bio: {
			type: String,
			default: "",
			trim: true,
		},
		location: {
			type: String,
			default: "",
			trim: true,
		},
		skills: {
			type: [String],
			default: [],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);