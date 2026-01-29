import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (_req, res) => {
  res.send("ROOT OK");
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "Backend is alive ✅" });
});

app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT", PORT);
});
