import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const handler: NextApiHandler = (req, res) => NextAuth(req, res, {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        },
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM
    })
    // ...add more providers here
  ],
  
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL
});

export default handler;