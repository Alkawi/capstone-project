import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { connectDatabase, getUserCollection } from './app/utils/database'

if (!process.env.MONGODB_URI) {
  throw new Error("Couldn't connect to the database")
}

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' })
})

app.use('/storybook', express.static('dist/storybook'))

app.use(express.static('dist/app'))

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`)
})
