import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;  // .env.local me URI rakhna
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await client.connect();
      const database = client.db("blogapp");
      const collection = database.collection("contacts");

      const contact = req.body;
      const result = await collection.insertOne(contact);

      res.status(200).json({ message: "Contact saved successfully!", id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
