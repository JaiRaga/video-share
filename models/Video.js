const mongoose = require('mongoose')
const { Schema } = mongoose

const videoSchema = Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		secure_url: {
			type: String,
			reauired: true,
		},
		public_id: {
			type: String,
		},
		owner: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		comments: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
				text: {
					type: String,
				},
				date: {
					type: Date,
					default: Date.now,
				},
			},
		],
	},
	{
		timestamps: true,
	}
)

const Video = mongoose.model('Video', videoSchema)

module.exports = Video
