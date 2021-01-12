import type { NextApiRequest, NextApiResponse } from "next";


async function fetchGraphQL(operationsDoc, operationName, variables): Promise<{ data: Response, errors?: Error }> {
    const result = await fetch(
    process.env.HASURA_DB_URL,
    {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_DB_SECRET
      },
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables,
        operationName
      })
    }
  );
  
  return result.json() as Promise<{ data: Response, errors?: Error }>;
}


const operationsDoc = `
  mutation MyMutation {
    insert_users_one(object: {email: "Elizabeth4@tellmann.co.za", first_name: "Elizabeth", last_name: "Tellmann", password: "#Password12", username: "ElizabethTellmann"}, on_conflict: {constraint: users_pkey, update_columns: email}) {
      email
      first_name
      last_name
      password
      username
    }
  }
`;


function executeMyMutation() {
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    {}
  );
}

async function startExecuteMyMutation() {
  const { errors, data } = await executeMyMutation();
  
  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }
  
  // do something great with this precious data
  console.log(data);
}


type UserData = {
  name?: string
}

export const User = async (req: NextApiRequest, res: NextApiResponse<UserData>): Promise<void> => {
  console.log(req.method);
  
  await startExecuteMyMutation()
  
  res.status(200).json({ name: "John Doe" });
};

export default User;

