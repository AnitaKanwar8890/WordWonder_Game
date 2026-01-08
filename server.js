const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");

const app = express();

// ================== APP CONFIG ==================
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ================== DATABASE CONFIG ==================
const conString =
  "postgres://mydbfirst_user:hx4fSKEuiqa7rWzOI01hSx5zBRSVtQzr@dpg-ck677itdrqvc73avefpg-a.frankfurt-postgres.render.com/mydbfirst";

const client = new Client({
  connectionString: conString,
  ssl: {
    rejectUnauthorized: false
  }
});

// Safe DB connection (won’t crash server)
client
  .connect()
  .then(() => console.log("✅ Database connected"))
  .catch((err) =>
    console.error("❌ Database connection error:", err.message)
  );

// ================== ROUTES ==================

// Home page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Get random word
app.get("/getword", (req, res) => {
  const words = ["rock", "paper", "scissors", "lamp", "curtain", "pillow"];
  const word = words[Math.floor(Math.random() * words.length)];

  res.json({ word });
});

// Wrong answer route
app.post("/wrongAns", async (req, res) => {
  try {
    const { username, word } = req.body;

    const result = await client.query(
      "SELECT attempts FROM Attempts WHERE username = $1",
      [username]
    );

    let attempts;

    if (result.rows.length > 0) {
      attempts = result.rows[0].attempts + 1;
      await client.query(
        "UPDATE Attempts SET attempts = $1 WHERE username = $2",
        [attempts, username]
      );
    } else {
      attempts = 1;
      await client.query(
        "INSERT INTO Attempts (username, word, attempts) VALUES ($1, $2, $3)",
        [username, word, attempts]
      );
    }

    res.json({ attempt: attempts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Right answer route
app.post("/rightAns", async (req, res) => {
  try {
    const { userna, userscore } = req.body;

    const result = await client.query(
      "SELECT score, attempts FROM Score_attempt WHERE username = $1",
      [userna]
    );

    let totalScore;
    let totalAttempts;

    if (result.rows.length === 0) {
      totalScore = userscore;
      totalAttempts = 1;

      await client.query(
        "INSERT INTO Score_attempt (username, score, attempts) VALUES ($1, $2, $3)",
        [userna, totalScore, totalAttempts]
      );
    } else {
      totalScore = result.rows[0].score + userscore;
      totalAttempts = result.rows[0].attempts + 1;

      await client.query(
        "UPDATE Score_attempt SET score = $1, attempts = $2 WHERE username = $3",
        [totalScore, totalAttempts, userna]
      );
    }

    res.json({
      score: totalScore,
      attempts: totalAttempts
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// ================== SERVER ==================
const PORT = 5400;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
