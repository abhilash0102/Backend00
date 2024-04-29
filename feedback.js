const mongoose = require("mongoose");

mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected for feedback");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  message: String
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
