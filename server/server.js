const express = require('express')
const cors = require('cors')
const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Hello World!' }))

app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))
