import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/signup", (req, res) => {
  res.json({ message: "Signup API working" });
});

export default app;
