const mongoose = require('mongoose')
const { Schema } = mongoose

const videoSchema = Schema(
	{
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
	},
	{
		timestamps: true,
	}
)

const Video = mongoose.model('Video', videoSchema)

module.exports = Video