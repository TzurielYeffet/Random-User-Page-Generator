
import Renderer from "../View/renderer.js";
import { getUsers } from "../Model/model.js"; 
const renderer = new Renderer();


let userArr = [];

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
