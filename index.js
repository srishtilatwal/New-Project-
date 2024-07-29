import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose"
import dotenv from "dotenv"
import route from "./routes/userRoute.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// connection db
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;
mongoose.connect(MONGOURL).then(()=>
{
    console.log("databse connected");
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`);
    
    });
    
}).catch((err)=>
{
    console.log(err);
})


app.use("/api", route);
