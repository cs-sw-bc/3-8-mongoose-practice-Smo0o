import mongoose from "mongoose";

const MONGO_URI="mongodb://localhost:27017/cooking"

mongoose.connect(MONGO_URI)
.then(()=>console.log("Connected successfully to database"))
.catch(err=>console.log(err));
