import express from "express";
import { postUser /* updateHighScore */ } from "./controllers/controller1.js";
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

// app.put("/users", async (req, res) => {
//   const { highScore, username } = req.body;
//   updateHighScore(highScore, username, res)
//     .then((savedScore) => {
//       console.log("APP.TSX SUCCESSFULLY SAVED SCORE:::::", savedScore);
//     })
//     .catch((err) => {
//       console.log("APP.TSX ERROR SAVING SCORE:::::", err);
//     });
// });
