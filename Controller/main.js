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
  friends: [{firstName: "Mason",
    lastName: "Clark",
    address: "Maple Street, Chicago",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    quote: "Life is short, smile while you still have teeth.",
    favoritePokemon: { name: "Charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    impsumText: "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
    friends: []
  },
  {
    firstName: "Olivia",
    lastName: "Martinez",
    address: "Sunset Blvd, Los Angeles",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Do more things that make you forget to check your phone.",
    favoritePokemon: { name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    impsumText: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    friends: []
  },
  {
    firstName: "Ethan",
    lastName: "Bennett",
    address: "5th Avenue, New York",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
    quote: "Make mistakes. Learn. Grow. Repeat.",
    favoritePokemon: { name: "Squirtle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    impsumText: "Praesent mauris. Fusce nec tellus sed augue semper porta.",
    friends: []
  },
  {
    firstName: "Sophia",
    lastName: "Nguyen",
    address: "Broadway, Seattle",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    quote: "Stay hungry. Stay foolish.",
    favoritePokemon: { name: "Jigglypuff", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" },
    impsumText: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
    friends: []
  },
  {
    firstName: "Lucas",
    lastName: "Wright",
    address: "Elm Street, Austin",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "You miss 100% of the shots you don’t take.",
    favoritePokemon: { name: "Meowth", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" },
    impsumText: "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    friends: []
  },
  {
    firstName: "Isabella",
    lastName: "Hughes",
    address: "Palm Grove Rd, Miami",
    photo: "https://randomuser.me/api/portraits/women/53.jpg",
    quote: "Creativity is intelligence having fun.",
    favoritePokemon: { name: "Eevee", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" },
    impsumText: "In convallis. Nunc nec neque. Phasellus leo dolor, tempus non.",
    friends: []
  }],
};

const user = new User(userData);
console.log(user);
class Renderer {
  constructor() {}

  renderPost(user) {
    $(
      `.profile-container .profile-picture`).html(`<img src="${user.photo}" alt="profile-picture">`);
    $(`.profile-info .username`).text(user.firstName);
    $(`.profile-info .address`).text(user.address);
    $(`.middle-container .favorite-quote .quote`).text(user.quote);
    $(`.favorite-pokemon .pokemon-name`).text(user.favoritePokemon.name);
    $(`.favorite-pokemon .pokemon-image`).html(`<img src=${user.favoritePokemon.url}>`);
    $(`.about-me .bacon-impsum`).text(user.impsumText)

    user.friends.forEach(friend => {
      $(`.friends-section .friends-list`).append(`<li>${friend.firstName}</li>`)
    })



  }
}
const render = new Renderer();
render.renderPost(userData);
