const jwt = require('jsonwebtoken')
const User = require('../models/User')
const tokenSecret = require('../config/keys').tokenSecret

const auth = async (req, res, next) => {
	try {
		// console.log('header', req.header('Authorization'))
		const token = req.header('Authorization').replace('Bearer ', '')
		const decode = jwt.verify(token, tokenSecret)
		const user = await User.findOne({ _id: decode._id, 'tokens.token': token })

		if (!user) {
			console.log(1, 'no user')
			throw new Error()
		}

		req.token = token
		req.user = user
		next()
	} catch (e) {
		// console.log('middleware', e)
		res.status(401).send({ error: 'Please authenticate.' })
	}
}

module.exports = auth
