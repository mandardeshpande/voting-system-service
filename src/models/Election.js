
import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const ElectionSchema = new Schema({
  question: {
    type: String,
    required: true
  }
});

export default mongoose.model("Election", ElectionSchema);