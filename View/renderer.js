export default class Renderer {
  constructor() {}

  renderUser(user) {
<<<<<<< HEAD
    let pokemon = user.getFavoritePokemon();
=======
    let pokemon = user.getFavoritePokemon()
>>>>>>> 6e5ce070e0d54d1c8f5a92dd2d2f789e2a1bd3b8
    $(`.profile-container .profile-picture`).html(
      `<img src="${user.getPhoto()}" alt="profile-picture">`
    );
    $(`.profile-info .username`).text(user.getFullName());
    $(`.profile-info .address`).text(user.getAddress());
    $(`.middle-container .favorite-quote .quote`).text(user.getQuote());
    $(`.favorite-pokemon .pokemon-name`).text(pokemon.getPokemonName());
    $(`.favorite-pokemon .pokemon-image`).html(
      `<img src=${pokemon.getPokemonImage()}>`
    );
    $(`.about-me .bacon-impsum`).text(user.impsumText);

<<<<<<< HEAD
    const $friendsList = $(`.friends-section .friends-list`);
    $friendsList.empty();
    user.getFriends().forEach((friend) => {
      $(`.friends-section .friends-list`).append(
        `<li>${friend.getFullName()}</li>`
=======
    user.friends.forEach((friend) => {
      $(`.friends-section .friends-list`).append(
        `<li>${friend.firstName}</li>`
>>>>>>> 6e5ce070e0d54d1c8f5a92dd2d2f789e2a1bd3b8
      );
    });
  }
}
