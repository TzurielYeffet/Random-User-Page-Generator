import {randomUserAPI,randomKanyeQuotesAPI,randomPokemonAPI,baconIpsumAOI} from '../Model/apiEndpoints.js'
import User from './User.js';
import Pokemon from './Pokemon.js';
async function getAPIData(api) {

    const res = await fetch(api);
    if(!res.ok){
        alert("Sorry there was a problem fetching data from API");
        return
    }
    const data = await res.json()
        console.log(data);
        return data;   
}

export async function getUsers(){
    const data = await getAPIData(randomUserAPI);
    if(!data){
        console.log("There was a problem fetching user data from API");
        return
    }
    
    console.log(data.results);
    
    const userArr = generateUsers(data.results)
    return userArr;

}

async function generateUsers(userData) {
    let userArr = [];
    const [userQuote,favoritePokemon,impsum] = await Promise.all([getQuote(),getPokemon(),getImpsum()]);
    userData.forEach(user=>{
        let newUser = new User(
            user.name.first,
            user.name.last,
            user.location.street.name + " " + user.location.city,
            user.picture.medium,
            userQuote.quote,
            favoritePokemon,
            impsum

        )
        userArr.push(newUser)
    })
    return userArr;   
}


async function getQuote() {
    const qoute = await getAPIData(randomKanyeQuotesAPI);
    if(!qoute){
        console.log("There was a problem fetching kanye quote from API")
    }
    return qoute; 
}


async function getPokemon() {
    const maxPokemon = 1302;
    const randomPokemonId = Math.floor(Math.random() * maxPokemon)+1;
    const pokemon = await getAPIData(randomPokemonAPI + `${randomPokemonId}`);

    const newPokemon = new Pokemon(
        pokemon.species.name,
        pokemon.sprites.front_default
    )
    return newPokemon;
}

async function getImpsum() {
    const text = await getAPIData(baconIpsumAOI);
    return text[0];
}