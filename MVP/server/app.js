import express from "express";
import { postUser /* updateHighScore */ } from "./controllers/controller1.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.json());

app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  postUser(username, password, res)
    .then((savedUser) => {
      console.log("APP.TSX SUCCESSFULLY SAVED USER:::::", savedUser);
    })
    .catch((err) => {
      console.log("APP.TSX ERROR SAVING USER:::::", err);
    });
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
