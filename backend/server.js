import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//routes
import authRoutes from "./routes/authRoutes.js";
import connMongoDb from "./db/connMongoDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse form data
app.use(cookieParser()); //to parse the cookie

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connMongoDb();
});
