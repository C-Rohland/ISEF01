import mongoose from "mongoose";
const { Schema } = mongoose;

const userModel = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, // Achtung: Das Passwort sollte gehasht gespeichert werden!
});

export default mongoose.model('User', userModel);
