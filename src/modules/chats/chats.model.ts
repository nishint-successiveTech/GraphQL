import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  messages: {
    type: [String],
    default: [],
  },
});

const PersonModel = mongoose.model("Person", personSchema);
export default PersonModel;


