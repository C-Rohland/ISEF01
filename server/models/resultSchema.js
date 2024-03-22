import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const resultModel = new Schema({
    username : { type : String },
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('result', resultModel);