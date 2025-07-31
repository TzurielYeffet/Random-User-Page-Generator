import User from "../Model/User.js";
const userData = {
  firstName: "Lena Reed",
  lastName: "",
  address: "Oakwood Ave, Riverdale",
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
  quote: "Be yourself; everyone else is already taken.",
  favoritePokemon: {
    name: "pokemonName",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
  },
  impsumText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  friends: [],
};
const user = new User(userData);
console.log(user);
class Renderer {
  constructor() {}

  renderPost(user) {
    $(
      `.profile-info .profile-picture`).html(`<img src="${userData.photo}" alt="profile-picture">`);
    $(`.profile-info .username`).text(userData.firstName);
    $(`.profile-info .address`).text(userData.address);
    $(`.middle-container .favorite-quote`).text(userData.quote);
    $(`.favorite-pokemon .pokemon-name`).text(userData.favoritePokemon.name);
    $(`.favorite-pokemon .pokemon-image`).html(`<img src=${userData.favoritePokemon.url}>`);
    $(`.about-me .bacon-impsum`).text(userData.impsumText)



  }
}
const render = new Renderer();
render.renderPost(user);
