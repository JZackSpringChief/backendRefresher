import dotenv from "dotenv";
dotenv.config();
//console.log(process.env.PASSWORD);
import express from "express";
//TODO mongo connection this is fill code for next study session
// mongoose.connect(
//   "mongodb://localhost:27017/'insertname'",
//   {
//     useNewUrlParser: true,
//     useUnifiedopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Connection aquired");
//     }
//   }
// );

const app = express();
const port = 6060;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { swordCharacters } from "./gameChar.js";
import { users } from "./users.js";

app.get("/", (req, res) => {
  res.send(`<h1>My Favourite RPG Characters</h1>
  <h4>${swordCharacters[0].name}</h4>from ${swordCharacters[0].Game}; His sword hand is: ${swordCharacters[0].swordHand}; finaly, thier favourite sword is: ${swordCharacters[0].favSword}
  <h4>${swordCharacters[1].name}</h4>from ${swordCharacters[1].Game}; His sword hand is: ${swordCharacters[1].swordHand}; finaly, thier favourite sword is: ${swordCharacters[1].favSword}
  <h4>${swordCharacters[2].name}</h4>from ${swordCharacters[2].Game}; His sword hand is: ${swordCharacters[2].swordHand}; finaly, thier favourite sword is: ${swordCharacters[2].favSword}
  <h4>${swordCharacters[3].name}</h4>from ${swordCharacters[3].Game}; His sword hand is: ${swordCharacters[3].swordHand}; finaly, thier favourite sword is: ${swordCharacters[3].favSword}
  <h4>${swordCharacters[4].name}</h4>from ${swordCharacters[4].Game}; His sword hand is: ${swordCharacters[4].swordHand}; finaly, thier favourite sword is: ${swordCharacters[4].favSword}`);
});
{
  /* <h4>${swordCharacters[5].name}</h4>from ${swordCharacters[5].Game}; His sword hand is: ${swordCharacters[5].swordHand}; finaly, thier favourite sword is: ${swordCharacters[5].favSword}`); */
}
app.get("/sword/:id", (req, res) => {
  console.log(req.params.id);
  return res.json({
    message: "enter your name",
    myparams: req.params.id,
  });
});

app.get("/sword", (req, res) => {
  console.log(req.query);
  return res.json({
    name: req.query.name,
    age: req.query.age,
    swordHand: req.query.sHand,
    favSword: req.query.fav,
  });
});
//after/sword use "?name='EnterAnyNane'" in browser then "&age='EnterAnyNumber"

app.post("/user", (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
  };
  users.push(newUser);
  res.json(newUser);
});

app.post("/sword", (req, res) => {
  const newChar = {
    id: req.body.id,
    name: req.body.name,
    Game: req.body.Game,
    swordHand: req.body.swordHand,
    favSword: req.body.favSword,
  };
  swordCharacters.push(newChar);
  res.json(swordCharacters);
});
app.put("/sword/:id", (req, res) => {
  console.log(req.body);
  return res.json({
    message: "create route",
  });
});

app.delete("/sword/:id", (req, res) => {
  console.log(req.params);
  return res.json({
    message: "delete route",
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
