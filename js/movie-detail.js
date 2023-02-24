import { crearNav, crearFooter, addUserName } from "./main.js";

let filmsLS = localStorage.getItem('films')
let dataFilms = JSON.parse(filmsLS);

crearNav()
crearFooter()
addUserName()
