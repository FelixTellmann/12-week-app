import { NextApiHandler } from "next";
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const handler: NextApiHandler = (req, res) => NextAuth(req, res, {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MYSQL_HOST,
})

export default handler;