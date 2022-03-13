function UI() {}

UI.prototype.addFilmToUI = function (newFilm) {
  const filmList = document.getElementById("films");
  filmList.innerHTML += `
        <tr>
          <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
          <td>${newFilm.title}</td>
          <td>${newFilm.director}</td>
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        
        `;
};

UI.prototype.clearInputs = function (elem1, elem2, elem3) {
  elem1.value = "";
  elem2.value = "";
  elem3.value = "";
};

UI.prototype.displayMessages = function (messages, type) {
  const cardBody = document.querySelectorAll(".card-body")[0];

  // Alert div olusturalim

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = messages;

  cardBody.appendChild(div);

  setTimeout(() => {
    cardBody.removeChild(div);
  }, 2000);
};
