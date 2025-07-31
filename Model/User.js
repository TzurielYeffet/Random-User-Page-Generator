export default class User {
  #firstName;
  #lastName;
  #address;
  #photo;
  #quote;
  #favoritePokemon;
  #friends;

<<<<<<< HEAD
  constructor(
    firstName,
    lastName,
    address,
    photo,
    quote,
    favoritePokemon,
    impsumText,
    friends = []
  ) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#address = address;
    this.#photo = photo;
    this.#quote = quote;
=======
    constructor(firstName, lastName, address, photo, quote, favoritePokemon,impsumText, friends = [] ) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#photo = photo;
        this.#quote = quote;
        
        this.#favoritePokemon = favoritePokemon;
        this.impsumText =impsumText;
        this.#friends = friends;
    }
>>>>>>> 6e5ce070e0d54d1c8f5a92dd2d2f789e2a1bd3b8

    this.#favoritePokemon = favoritePokemon;
    this.impsumText = impsumText;
    this.#friends = friends;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  getAddress() {
    return this.#address;
  }

<<<<<<< HEAD
  getPhoto() {
    return this.#photo;
  }
=======
    getQuote() {
        console.log(`this.#quote  ${this.#quote }`);

        return this.#quote;
    }
>>>>>>> 6e5ce070e0d54d1c8f5a92dd2d2f789e2a1bd3b8

  getQuote() {
    return this.#quote;
  }

  getFavoritePokemon() {
    return this.#favoritePokemon;
  }

  getFriends() {
    return this.#friends;
  }
  setFriends(friends) {
  this.#friends = friends;
}
}
