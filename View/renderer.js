export default class Renderer {
  constructor() {}

  renderUser(user) {
    let pokemon = user.getFavoritePokemon()
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

    user.friends.forEach((friend) => {
      $(`.friends-section .friends-list`).append(
        `<li>${friend.firstName}</li>`
      );
    });
  }
}
