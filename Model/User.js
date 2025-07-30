export default class User {
    #firstName;
    #lastName;
    #address;
    #photo;
    #quote;
    #favoritePokemon;
    #friends;

    constructor({ firstName, lastName, address, photo, quote, favoritePokemon,impsumText, friends = [] }) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#photo = photo;
        this.#quote = quote;
        this.#favoritePokemon = favoritePokemon;
        this.impsumText =impsumText;
        this.#friends = friends;
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    getAddress() {
        return this.#address;
    }

    getPhoto() {
        return this.#photo;
    }

    getQuote() {
        return this.#quote;
    }
    getQuote() {
        return this.#quote;
    }

    getFavoritePokemon() {
        return this.#favoritePokemon;
    }

    getFriends() {
        return this.#friends;
    }
}