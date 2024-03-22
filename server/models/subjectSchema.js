import mongoose from "mongoose";
const { Schema } = mongoose;

const subjectModel = new Schema({
    subjectname: { type: String, required: true },
    subjectnr: { type: String, required: true },
});

export default mongoose.model('Subject', subjectModel);

