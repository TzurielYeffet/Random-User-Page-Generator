export default class Pokemon{
    #pokemonName
    #pokemonImage
    constructor(pokemonName,pokemonImage){
        this.#pokemonName = pokemonName;
        this.#pokemonImage = pokemonImage;
    }

    getPokemonName(){
        return this.#pokemonName;

    }
    getPokemonImage(){
        return this.#pokemonImage;
    }


}