import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";
import handleRegister from "./controllers/register.js";
import handleSignin from "./controllers/signin.js";
import hanldeProfile from "./controllers/profile.js";
import handleImage from "./controllers/image.js";
import handleApiCall from "./controllers/detection.js";
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "test",
    database: "facebrain",
  },
});

db.select("*").from("users");
// .then((data) => {
//   console.log(data);
// });

const app = express();
// const bcrypt = brcrypt - nodejs;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // res.send(database.users);
});

app.post("/signin", handleSignin(db, bcrypt));

app.post("/register", handleRegister(db, bcrypt));

app.get("/profile/:id", hanldeProfile(db));

app.put("/image", handleImage(db));

app.post("/imageurl", (req, res) => {
  handleApiCall(req, res);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

//******************************************************** */
//bcrypt:

// bcrypt.compare(
//   "john1",
//   "$2a$10$WMcomo.3y9wvG9MqCZ4qAeh1X2XTdurFsRHB8J/SMdcZn.KAWxnQe",
//   function (err, res) {
//     console.log("first guess", res);
//   }
// );
// bcrypt.compare(
//   "veggies",
//   "$2a$10$WMcomo.3y9wvG9MqCZ4qAeh1X2XTdurFsRHB8J/SMdcZn.KAWxnQe",
//   function (err, res) {
//     console.log("second guess", res);
//   }
// );
