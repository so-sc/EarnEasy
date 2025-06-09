import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    picture : {
        type: String
    },
})

const UserModel = mongoose.model("social-logins", userSchema);

export default UserModel;

//TODOs
// In this folder add all other models with their names
// The main logic goes in the controllers folderr