import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  about: { type: String, required: true, trim: true},
  gender: { type: String, required: true, trim: true },
  avatar: { type: Object, url: String, public_id: String },
},{timestamps:true});
actorSchema.index({name: 'text'})

// Model
const actorModel = mongoose.model('actor', actorSchema);

export default actorModel;