const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini Baslatma

const ui = new UI();

// Tum eventleri yukleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}

function addFilm() {
  e.preventDefault();

  const title = titleElement.value;
  const directorElement = directorElement.value;
  const url = directorElement.value;

  if (title === " " || director === " " || url === " ") {
    //   Hata
  } else {
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm);
  }
}
