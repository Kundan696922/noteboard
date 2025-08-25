import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import path from "path";

import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

import cors from "cors"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001; 
const _dirname = path.resolve();


//middleware

if (process.env.NODE_ENV !== "production") { 
    app.use(cors(
    {
        origin: "http://localhost:5173",
    }
));
}


app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") { 
    app.use(express.static(path.join(_dirname, "../frontend/dist")));


app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html"));
});
}


connectDB().then(() => { 
    app.listen(PORT, () => {
    console.log("Server starterd on PORT:", PORT);
});
});





