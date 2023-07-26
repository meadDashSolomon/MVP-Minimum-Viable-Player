import { saveUser /*, saveScore*/ } from "../models/model1.js";

export const postUser = async (username, password, res) => {
  try {
    const savedUser = await saveUser(username, password);
    console.log("CONTROLLER SUCCESSFULLY POSTED USER:::::", savedUser);
    return savedUser;
  } catch (err) {
    console.log("CONTROLLER ERROR POSTING USER:::::", err);
    res.status(500).send("Error creating user.");
  }
};

// exports.postScore = async (highScore, username, res) => {
//   try {
//     await saveScore(highScore, username);
//     res.send("Score posted successfully.");
//   } catch (err) {
//     console.log("CONTROLLER ERROR POSTING SCORE:::::", err);
//     res.status(500).send("Error creating user.");
//   }
// };
