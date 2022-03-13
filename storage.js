function myStorage() {

}

myStorage.prototype.addFilmToStorage = function(newFilm) {
    let films = this.getFilmsFromStorage()

    films.push(newFilm)

    localStorage.setItem("films", JSON.stringify(films))


};

myStorage.prototype.getFilmsFromStorage = function() {
  let films;

  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }

  return films;
};
