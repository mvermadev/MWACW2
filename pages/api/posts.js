import clientPromise from "../../lib/mongodb";

// User function to handle the request and response.
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sl-user-data");
  const switchValue = JSON.parse(req.body);
  switch (switchValue.operation) {
    case "login":
      let loginBody = JSON.parse(req.body);
      let user = await db.collection("regis").findOne(loginBody.email);
      console.log('running login case');
      if(user){
        console.log('user: ', user)
        return user
      }
      break;
    case "regis":
      let bodyObject = JSON.parse(req.body);
      let regis = await db.collection("regis").insertOne(bodyObject);
      res.json(regis.ops[0]);
      break;
    case "GET":
      const posts = await db.collection("questions").find({}).toArray();
      res.json(posts);
      break;
  }
}
