import type { Collection } from 'mongodb'
import { MongoClient } from 'mongodb'

let client: MongoClient

interface Concerts {
  id: string
  mainAct: string
  support?: string
  concertDate: string
  location: string
  numberOfTickets: number
}

interface User {
  username: string
  password: string
  concerts?: Concerts[]
}

export async function connectDatabase(url: string): Promise<void> {
  client = new MongoClient(url)
  await client.connect()
}

export function getUserCollection(): Collection<User> {
  return client.db().collection('users')
}
