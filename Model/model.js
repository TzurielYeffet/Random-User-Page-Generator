import {randomUserAPI,randomKanyeQuotesAPI,randomPokemonAPI,baconIpsumAOI} from './apiEndpoints'
import User from './User';
import Pokemon from './Pokemon';
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

async function getUsers(){
    const data = await getAPIData(randomUserAPI);
    if(!data){
        console.log("There was a problem fetching user data from API");
        return
    }
    
    const userArr = generateUsers(data.results)

}

function generateUsers(userData) {
    let userArr = [];
    let userQuote = getQuote()
    let favoritePokemon = getPokemon()
    let impsum = getImpsum()
    userData.forEach(user=>{
        let user = new User(
            user.name.first,
            user.name.last,
            user.location.street.name + " " + user.location.city,
            user.picture.medium,
            userQuote,
            favoritePokemon,
            impsum

        )
        userArr.push(user)
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