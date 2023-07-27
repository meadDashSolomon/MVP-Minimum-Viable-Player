import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  highScore: {
    type: Number,
    default: 0,
  },
});

mongoose.connect("mongodb://localhost:27017/MVP", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("MongoDB connected..."));

const User = mongoose.model("User", UserSchema);

export const saveUser = async (username, password) => {
  try {
    const user = new User({ username, password });
    const savedUser = await user.save();
    console.log("MODEL SAVED USER SUCCESSFULLY");
    return savedUser;
  } catch (err) {
    console.error("ERROR SAVING USER IN MODEL.JS:::::", err);
    throw err;
  }
};

export const saveScore = async (timer, username) => {
  try {
    const updatedScore = await User.updateOne(
      { username: username },
      { $set: { highScore: timer } },
      { new: true }
    );
    console.log("MODEL SUCCESSFULLY UPDATED SCORE");
    return updatedScore;
  } catch (err) {
    console.error("ERROR UPDATING SCORE IN MODEL:::::", err);
    throw err;
  }
};

export const getLeaders = async () => {
  try {
    const topScores = await User.find().sort({ highScore: -1 }).limit(10);
    console.log("MODEL SUCCESSFULLY GOT LEADERS");
    return topScores;
  } catch (err) {
    console.error("ERROR FETCHING LEADERBOARD:::::", err);
    throw err;
  }
};
