import express from "express";
const app = express();
const port = 6060;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { swordCharacters } from "./gameChar.js";

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>My Favourite RPG Characters</h1>
  <h4>${swordCharacters[0].name}</h4>from ${swordCharacters[0].Game}; His sword hand is: ${swordCharacters[0].swordHand}; finaly, thier favourite sword is: ${swordCharacters[0].favSword}
  <h4>${swordCharacters[1].name}</h4>from ${swordCharacters[1].Game}; His sword hand is: ${swordCharacters[1].swordHand}; finaly, thier favourite sword is: ${swordCharacters[1].favSword}
  <h4>${swordCharacters[2].name}</h4>from ${swordCharacters[2].Game}; His sword hand is: ${swordCharacters[2].swordHand}; finaly, thier favourite sword is: ${swordCharacters[2].favSword}
  <h4>${swordCharacters[3].name}</h4>from ${swordCharacters[3].Game}; His sword hand is: ${swordCharacters[3].swordHand}; finaly, thier favourite sword is: ${swordCharacters[3].favSword}
  <h4>${swordCharacters[4].name}</h4>from ${swordCharacters[4].Game}; His sword hand is: ${swordCharacters[4].swordHand}; finaly, thier favourite sword is: ${swordCharacters[4].favSword}`);
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
