import type { Collection } from 'mongodb'
import type { Concert } from './app/types'
import { MongoClient } from 'mongodb'

let client: MongoClient

interface User {
  username: string
  password: string
  concerts?: Concert[]
}

export async function connectDatabase(url: string): Promise<void> {
  client = new MongoClient(url)
  await client.connect()
}

export function getUserCollection(): Collection<User> {
  return client.db().collection('users')
}
