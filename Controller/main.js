<<<<<<< HEAD
import Renderer from "../View/renderer.js";
import { getUsers } from "../Model/model.js"; 
const renderer = new Renderer();
=======
import {getUsers} from "../Model/model.js"
import Renderer from "../View/renderer.js"
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
  friends: [
    {
      firstName: "Mason",
      lastName: "Clark",
      address: "Maple Street, Chicago",
      photo: "https://randomuser.me/api/portraits/men/15.jpg",
      quote: "Life is short, smile while you still have teeth.",
      favoritePokemon: {
        name: "Charmander",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      impsumText:
        "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
      friends: [],
    },
    {
      firstName: "Olivia",
      lastName: "Martinez",
      address: "Sunset Blvd, Los Angeles",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "Do more things that make you forget to check your phone.",
      favoritePokemon: {
        name: "Bulbasaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
      impsumText:
        "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      friends: [],
    },
    {
      firstName: "Ethan",
      lastName: "Bennett",
      address: "5th Avenue, New York",
      photo: "https://randomuser.me/api/portraits/men/31.jpg",
      quote: "Make mistakes. Learn. Grow. Repeat.",
      favoritePokemon: {
        name: "Squirtle",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      },
      impsumText: "Praesent mauris. Fusce nec tellus sed augue semper porta.",
      friends: [],
    },
    {
      firstName: "Sophia",
      lastName: "Nguyen",
      address: "Broadway, Seattle",
      photo: "https://randomuser.me/api/portraits/women/72.jpg",
      quote: "Stay hungry. Stay foolish.",
      favoritePokemon: {
        name: "Jigglypuff",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      },
      impsumText: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      friends: [],
    },
    {
      firstName: "Lucas",
      lastName: "Wright",
      address: "Elm Street, Austin",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "You miss 100% of the shots you don’t take.",
      favoritePokemon: {
        name: "Meowth",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      },
      impsumText:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      friends: [],
    },
    {
      firstName: "Isabella",
      lastName: "Hughes",
      address: "Palm Grove Rd, Miami",
      photo: "https://randomuser.me/api/portraits/women/53.jpg",
      quote: "Creativity is intelligence having fun.",
      favoritePokemon: {
        name: "Eevee",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      },
      impsumText:
        "In convallis. Nunc nec neque. Phasellus leo dolor, tempus non.",
      friends: [],
    },
  ],
};

const renderer = new Renderer();

>>>>>>> 6e5ce070e0d54d1c8f5a92dd2d2f789e2a1bd3b8

let userArr = [];

<<<<<<< HEAD
function randomUserIndex(userArr) {
  if (userArr.length > 0) {
    return Math.floor(Math.random() * userArr.length);
  } else {
    return -1;
  }
}

async function init() {

  showLoader()
  try{

    userArr = await getUsers();
    if (userArr.length === 0) {
      alert("No users loaded");
      return;
    }
    const index = randomUserIndex(userArr);
    renderer.renderUser(userArr[index]);
  }finally{
    hideLoader()
  }
}

init();

$(".profile-container").on("click", ".btn", function () {
  if (userArr.length === 0) return;
  const index = randomUserIndex(userArr);
  renderer.renderUser(userArr[index]);
});
function showLoader() {
  $("#loader").removeClass("hidden");
}

function hideLoader() {
  $("#loader").addClass("hidden");
}
=======
const userArr = await getUsers();
let index = randomUser(userArr);
renderer.renderUser(userArr[index]);


function randomUser(userArr){
  if(userArr.length > 0){
    return Math.floor(Math.random() * userArr.length) +1;
  }else{
    return "No users in array"
  }
}
  



$(".container").on("click",".btn",function(){
  
})
>>>>>>> 6e5ce070e0d54d1c8f5a92dd2d2f789e2a1bd3b8
