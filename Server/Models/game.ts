import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose schema

const GameSchema = new Schema
({
    name:String,
    genre:String,
    developer:String,
    Cost: Number
},
{
    collection: "games"
});

const Model = mongoose.model("Game", GameSchema);
export default Model;