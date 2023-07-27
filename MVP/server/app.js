import express from "express";
import {
  postUser,
  updateScore,
  fetchLeaders,
} from "./controllers/controller1.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  try {
    const savedUser = await postUser(username, password);
    console.log("APP.JS SUCCESSFULLY SAVED USER:::::", savedUser);
    res.json(savedUser);
  } catch (err) {
    console.log("APP.JS ERROR SAVING USER:::::", err);
    res.status(500).send("Error creating user.");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.put("/users", async (req, res) => {
  const { timer, username } = req.body;
  try {
    const updatedScore = await updateScore(timer, username);
    console.log("APP.JS SUCCESSFULLY UPDATED SCORE:::::", updatedScore);
    res.json(updatedScore);
  } catch (err) {
    console.log("APP.JS ERROR SAVING SCORE:::::", err);
    res.status(500).send("Error updating score.");
  }
});

app.get("/users", async (req, res) => {
  try {
    const fetchedLeaders = await fetchLeaders();
    console.log("APP.JS SUCCESSFULLY FETCHED LEADERS:::::", fetchedLeaders);
    res.json(fetchedLeaders);
  } catch (err) {
    console.log("APP.JS ERROR FETCHING LEADERS:::::", err);
    res.status(500).send("Error fetching leaders.");
  }
});
