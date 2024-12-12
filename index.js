import express from "express";

import { chessData } from "./public/js/chess.js";
import { chessStats } from "./public/js/chess.js";



const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const playerData = await chessData();
    const playerStats = await chessStats();

    if (!playerData) {
      return res.status(404).send("Player data not found.");
    }

    res.render("index.ejs", { playerData, playerStats });
  } catch (error) {
    console.error("Error fetching player data:", error.message);
    res.status(500).send("Error fetching player data");
  }
});

app.get("/about", (req, res) => {
  res.render('about.ejs');
});

app.get("/contact", (req, res) => {
  res.render('contact.ejs');
});

app.get("/projects", (req, res) => {
  res.render('projects.ejs');
});

app.get("/blog", (req, res) => {
  res.render('blog.ejs');
});

app.get("/home", (req, res) => {
  res.render('home.ejs');
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}.`);
});