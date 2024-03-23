import mongoose from "mongoose";
const { Schema } = mongoose;

const userModel = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, 
  points: { type : Number, default : 0},
});

export default mongoose.model('User', userModel);
