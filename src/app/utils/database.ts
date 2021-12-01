import { MongoClient } from 'mongodb'

export async function connectDatabase(url: string): Promise<void> {
  const client: MongoClient = new MongoClient(url)
  await client.connect()
}
