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

// exports.saveScore = async (highScore, username) => {
//   return User.updateOne(
//     { username: username },
//     { $set: { highScore: highScore } }
//   );
// };
