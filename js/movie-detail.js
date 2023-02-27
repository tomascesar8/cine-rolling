import { crearNav, colorScrollNav, buscador, addUserName, logOut, scrollGeneros, listaFavoritos, saveFilms } from "./helpers.js";
crearNav()
colorScrollNav()
buscador()
addUserName()
logOut()
scrollGeneros()
// listaFavoritos()

let peliculas = saveFilms()
let idPelicula = window.location.hash.slice(1);
console.log(idPelicula);
let movie = peliculas.find(pelicula=> pelicula.id == idPelicula);
console.log(movie);

let imgMovieMain = document.querySelector('.img-movie-main');
    imgMovieMain.innerHTML = `
            `
    imgMovieMain.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${movie.imagen})`;

//     <div id="movie-${movie.id}" class="container mx-3 mb-5">
//     <h3 class="">${movie.nombre}</h3>
//     <div class="details d-flex align-items-center"> 
//         <h4 class="genero me-4 fs-6 fs-sm-4 ">${movie.genero}</h4>
//         <h5 class="año me-4 fs-6 fs-sm-4">${movie.año}</h5>
//         <h5 class="categoria fs-6 fs-sm-4">${movie.categoria}</h5>
//     </div>
//     <p class="description mb-0">${movie.descripcion}</p>
//     <div class="d-flex flex-wrap mt-3">
//         <button role="button" class="button-play-title ">
//             <i class="fas fa-play me-4"></i>
//             Reproducir
//         </button>
//         <button role="button" class="button-info">
//             <i class="fas fa-info-circle me-2 me-sm-4 fs-4"></i>
//             Más información
//         </button>
//     </div>
// </div>
// <button class="carousel-control-prev w-50 m-0" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
// </button>
// <button class="carousel-control-next w-50 m-0" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
// </button>
