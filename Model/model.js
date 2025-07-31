import {
  randomUserAPI,
  randomKanyeQuotesAPI,
  randomPokemonAPI,
  baconIpsumAOI,
} from "../Model/apiEndpoints.js";
import User from "./User.js";
import Pokemon from "./Pokemon.js";
async function getAPIData(api) {
  try {
    const res = await fetch(api);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("API Error:", error.message);
    return null;
  }
}

export async function getUsers() {
  const data = await getAPIData(randomUserAPI);
  if (!data) {
    console.log("There was a problem fetching user data from API");
    return;
  }

  console.log(data.results);

  const userArr = generateUsers(data.results);
  return userArr;
}

async function generateUsers(userData) {
  let userArr = [];

  for (const user of userData) {
    const [userQuote, favoritePokemon, impsum] = await Promise.all([
      getQuote(),
      getPokemon(),
      getImpsum(),
    ]);

    const newUser = new User(
      user.name.first,
      user.name.last,
      user.location.street.name + " " + user.location.city,
      user.picture.medium,
      userQuote?.quote || "No quote available",
      favoritePokemon,
      impsum,
      []
    );

    userArr.push(newUser);
  }

  userArr.forEach((user) => {
    const friends = userArr.filter((u) => u !== user);
    user.setFriends(friends);
  });

  return userArr;
}


async function getQuote() {
  const quote = await getAPIData(randomKanyeQuotesAPI);
  if (!quote) {
    console.warn("Failed to fetch quote, returning fallback");
    return { quote: "No quote available." };
  }
  return quote;
}
async function getPokemon() {
  const maxPokemon = 1302;
  const randomPokemonId = Math.floor(Math.random() * maxPokemon) + 1;
  const pokemon = await getAPIData(randomPokemonAPI + `${randomPokemonId}`);

  if (!pokemon || !pokemon.species || !pokemon.sprites) {
    console.warn("Pokemon data invalid, returning fallback");
    alert("There was a problem to fetch from Pokemon API");
    return new Pokemon("MissingNo", "placeholder.png");
  }

  return new Pokemon(pokemon.species.name, pokemon.sprites.front_default);
}

async function getImpsum() {
  const text = await getAPIData(baconIpsumAOI);
  return text[0];
}
