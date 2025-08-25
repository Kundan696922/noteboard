import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

import cors from "cors"

dotenv.config();

const app = express()
const PORT = process.env.PORT; 


//middleware
app.use(cors(
    {
        origin: "http://localhost:5173",
    }
));
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(() => { 
    app.listen(PORT, () => {
    console.log("Server starterd on PORT:", PORT);
});
});





// mongodb+srv://kgoyary824:eRAe6sJEYHMk7yLF@cluster0.nj9jya0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0