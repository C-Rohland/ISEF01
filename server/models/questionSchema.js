import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    question: { type : Array, default: []}, // create question with [] default value
    answer: String,
    subjectnr: { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);