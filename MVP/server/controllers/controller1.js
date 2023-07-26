import { saveUser, saveScore } from "../models/model1.js";

export const postUser = async (username, password) => {
  try {
    const savedUser = await saveUser(username, password);
    console.log("CONTROLLER SUCCESSFULLY POSTED USER:::::", savedUser);
    return savedUser;
  } catch (err) {
    console.log("CONTROLLER ERROR POSTING USER:::::", err);
    res.status(500).send("Error creating user.");
  }
};

export const updateScore = async (timer, username) => {
  try {
    const updatedScore = await saveScore(timer, username);
    console.log("CONTROLLER SUCCESSFULLY UPDATED SCORE:::::", updatedScore);
    return updatedScore;
  } catch (err) {
    console.log("CONTROLLER ERROR UPDATED SCORE:::::", err);
    res.status(500).send("Error updating score.");
  }
};
