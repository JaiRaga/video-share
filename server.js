const express = require('express')
require('./db/mongoose')

const userRouter = require('./routes/api/users')
const videoRouter = require('./routes/api/videos')

const app = express()
app.use(express.json({ limit: '4mb' }))
app.use(express.urlencoded({ extended: true, limit: '2mb' }))

// Connects to api's in routes folder
app.use('/api', userRouter)
app.use('/api', videoRouter)

// Serve static assests in production
if (process.env.NODE_ENV === 'production') {
	// Serve static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = 9000

app.listen(PORT, console.log(`server on port ${PORT}`))
