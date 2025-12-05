import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
    name: String,
    yearsOfExperience: Number,
    email: String,
    specialtyCuisine: [{sauce:String, dish:String}],


})

const Chef = mongoose.model("chef", chefSchema);
export default Chef 