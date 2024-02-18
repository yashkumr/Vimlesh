import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();
//ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "./client/dist")));

app.use("/api/v1/auth", authRoutes);

app.use("*", function(req,res){
  res.sendFile(path.join(__dirname,"./client/dist/index.html"));
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on development mode ${PORT}`.bgCyan.white);
});