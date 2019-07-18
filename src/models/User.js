
import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const VoterSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  birthdate: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

export default mongoose.model("User", VoterSchema);