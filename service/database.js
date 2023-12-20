const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');
const pokemonCollection = db.collection('pokemon');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getPokemon() {
  return pokemonCollection.findOne({});
}

async function addPokemon(name, hp, attack, defense, specialAttack, specialDefense, speed, moves, heldItem, ability) {

  const pokemon = {
    name: event.target.pokemonName.value,
    hp: parseInt(event.target.hp.value), // Parse HP value to number
    attack: parseInt(event.target.attack.value), // Parse attack value to number
    defense: parseInt(event.target.defense.value), // Parse defense value to number
    specialAttack: parseInt(event.target.specialAttack.value), // Parse specialAttack value to number
    specialDefense: parseInt(event.target.specialDefense.value), // Parse specialDefense value to number
    speed: parseInt(event.target.speed.value), // Parse speed value to number
    moves: event.target.moves.value.split(',').map(move => move.trim()), // Split and trim moves
    heldItem: event.target.heldItem.value,
    ability: event.target.ability.value,
  };
  await pokemonCollection.insertOne(pokemon);

  return pokemon;
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getHighScores,
};
