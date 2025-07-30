const userData = {
  firstName: "Lena Reed",
  lastName: "",
  address: "Oakwood Ave, Riverdale",
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
  quote: "Be yourself; everyone else is already taken.",
  favoritePokemon: {name:pokemonName,url:'https://pokeapi.co/api/v2/pokemon/1'},
  impsumText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  friends: [] 
};
import User from "../Model/User";
const user = new User(userData)
console.log(user)
class Renderer{
    constructor(){}



    renderPost(){
        $(`.profile-info .profile-picture").html(<img src="${userData.photo}" alt="profile-picture" >`)
        $(`.profile-info .username`).text(userData.firstName);
        $(`.profile-info .address`).text(userData.address);
    }







}

renderPost()