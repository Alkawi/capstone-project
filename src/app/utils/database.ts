import type { Collection } from 'mongodb'
import { MongoClient } from 'mongodb'

let client: MongoClient

export async function connectDatabase(url: string): Promise<void> {
  client = new MongoClient(url)
  await client.connect()
}

export function getUserCollection(): Collection<Document> {
  return client.db().collection('users')
}
