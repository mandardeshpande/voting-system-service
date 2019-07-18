
import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const BallotSchema = new Schema({
  response: {
    type: String,
    required: true
  },
  electionId: {
    type: Schema.Types.ObjectId,
    ref: "Election"
  },
});

export default mongoose.model("Ballot", BallotSchema);