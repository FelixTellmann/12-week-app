import { signIn, signOut, useSession } from "next-auth/client";
import React, { FC } from "react";

export const Page: FC = () => {
  const [session, loading] = useSession();
  
  if (loading) {
    return <>
      nothign!
    </>;
  }
  if (session) {
    console.log(session);
  }
  return <>
    {!session && <>

      Not signed in <br />
      <button type="button" onClick={() => signIn("github")}>Sign in with Github</button>
      <button type="button" onClick={() => signIn("facebook")}>Sign in with Facebook</button>
      <button type="button" onClick={() => signIn("google")}>Sign in with Google</button>
      <button type="button" onClick={() => signIn("twitter")}>Sign in with Twitter</button>
    </>}
    {session && <>

      Signed in as {session.user.email} <br />
      <button type="button" onClick={() => signIn("github")}>Sign in with Github</button>
      <button type="button" onClick={() => signIn("facebook")}>Sign in with Facebook</button>
      <button type="button" onClick={() => signIn("google")}>Sign in with Google</button>
      <button type="button" onClick={() => signIn("twitter")}>Sign in with Twitter</button>
      <button type="button" onClick={signOut}>Sign out</button>
    </>}
    <style jsx>{`
      button {
        display: block;
      }
    `}</style>
  </>;
}

export default Page