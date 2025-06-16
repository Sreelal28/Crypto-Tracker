import express from "express";
import "dotenv/config";
import db from "./db.js";
import router from "./routes/bookRoute.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 7001;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
db();
app.use("/books", router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}...😊`);
});
