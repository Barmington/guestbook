import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", (request, response) => response.json("I am the root endpoint"));

app.post("/guests", async function (request, response) {
  const { guestname, comment } = request.body;
  const result = await db.query(
    "INSERT INTO guests (guestname, comment) VALUES ($1, $2)",
    [guestname, comment]
  );

  response.json(result);
});
app.get("/guests", async function (request, response) {
  const result = await db.query("SELECT * FROM guests");
  const guests = result.rows;

  response.json(guests);
});

app.listen(3000, () => console.log("I am running on port 3000"));
