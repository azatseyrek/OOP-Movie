const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Obj

const ui = new UI();

// Storage Obj

const storage = new myStorage();

// Tum eventleri yukleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  //   form.addEventListener("submit", clearInput);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //   Hata
    ui.displayMessages("Tum alanlari doldurun", "danger");
  } else {
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("film basariyla eklendi", "success");
  }

  ui.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}
