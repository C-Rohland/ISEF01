import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const resultModel = new Schema({
    username : { type : String },
    points : { type : Number, default : 0},
    createdAt : { type : Date, default : Date.now}
})

const Result = mongoose.model('Result', resultModel);

export default mongoose.model('result', resultModel);