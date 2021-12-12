import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cookieParser from 'cookie-parser'

import { connectDatabase, getUserCollection } from './app/utils/database'
import { nanoid } from 'nanoid'

if (!process.env.MONGODB_URI) {
  throw new Error("Couldn't connect to the database")
}

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cookieParser())

app.get('/', async (req, res) => {
  const username = req.cookies.username
  const foundUser = await getUserCollection().findOne({ username })
  if (foundUser) {
    res.redirect(`/${username}`)
  } else {
    res.redirect('/login')
  }
})

app.post('/api/register/', async (req, res) => {
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
    res.status(201).send(`Account was created`)
  }
})

app.post('/api/login', async (req, res) => {
  const user = req.body
  const existingUser = await getUserCollection().findOne(
    { username: user.username },
    { projection: { _id: 0, username: 1, password: 1 } }
  )
  if (existingUser && existingUser.password === user.password) {
    res.setHeader('Set-Cookie', `username=${existingUser.username}; path=/`)
    res.status(200).send('Login successful')
  } else {
    res.status(403).send('Incorrect username or passwort')
  }
})

app.post('/api/logout', async (_req, res) => {
  res.setHeader('Set-Cookie', 'username= ; expires=Thu, 01 Jan 1970 00:00:00')
  res.redirect('/login')
})

app.patch('/api/:username/concerts/add', async (req, res) => {
  const username = req.params.username
  if (username !== req.cookies.username) {
    res.status(403)
  } else {
    const concert = { id: nanoid(), ...req.body }
    const insertedConcert = await getUserCollection().updateOne(
      { username },
      {
        $push: {
          concerts: {
            id: concert.id,
            mainAct: concert.mainAct,
            support: concert.support,
            concertDate: concert.concertDate,
            location: concert.location,
            numberOfTickets: concert.numberOfTickets,
          },
        },
      }
    )
    if (insertedConcert.modifiedCount > 0) {
      res.status(200)
    } else {
      res.status(204)
    }
  }
})

app.get('/api/:username/concerts', async (req, res) => {
  const username = req.params.username
  const existingConcerts = await getUserCollection().findOne(
    {
      username,
    },
    {
      projection: {
        _id: 0,
        concerts: 1,
      },
    }
  )
  if (existingConcerts) {
    res.status(200).send(existingConcerts.concerts)
  } else {
    res.status(200).send(null)
  }
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
