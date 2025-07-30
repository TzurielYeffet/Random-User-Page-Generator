export default class Pokemon{
    #pokemonName
    #pokemonImage
    constructor(pokemonName,pokemonImage){
        this.#pokemonName = pokemonName;
        this.#pokemonImage = pokemonImage;
    }

    getpokemonName(){
        return this.#pokemonName;
    }
    getpokemonImage(){
        return this.#pokemonImage;
    }


}