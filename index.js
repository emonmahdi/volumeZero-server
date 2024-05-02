const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const port = process.env.PORT || 500;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.e5zetpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);
console.log(uri);

app.get("/", (req, res) => {
  res.send("Volume Zero Application server");
});

async function volumeServer() {
  try {
    const database = client.db("volumeZero");
    const userCollection = database.collection("heroContent");

    console.log("Connection Successfully");
  } finally {
  }
}
volumeServer().catch(console.dir);

// Start the server
app.listen(port, () => {
  console.log(`Volume Server running on Port${port}`);
});
