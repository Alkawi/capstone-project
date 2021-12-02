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

app.post('/register/', async (req, res) => {
  const newUser = req.body
  const existingUser = await getUserCollection().findOne({
    username: newUser.username,
  })
  if (existingUser) {
    res
      .status(409)
      .send(`Account with username ${newUser.username} already exists!`)
  } else {
    await getUserCollection().insertOne(newUser)
    res.status(200).send(`Account was created`)
  }
})

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' })
})

app.use('/storybook', express.static('dist/storybook'))

app.use(express.static('dist/app'))

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' })
})

connectDatabase(process.env.MONGODB_URI).then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
  })
})
