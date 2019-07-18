
import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const VotingCompleteSchema = new Schema({
  voterId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  electionId: {
    type: Schema.Types.ObjectId,
    ref: "Election"
  },
});

export default mongoose.model("Ballot", VotingCompleteSchema);