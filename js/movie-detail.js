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
                <div class="container-details col-10 mt-5">                    
                  
                  <div class="titulo-detail text-wrap d-flex position-relative">
                    <h2 class="fw-bold mb-lg-3 mb-2 fs-md-1">${movie.nombre} <span class="">(${movie.año})</span></h2>
                    <div class="tapa">
                    </div>
                  </div>
                
                  <div class="metricas-detail d-flex  flex-row">
                    <div class="puntuacion-detail fw-bold mb-1 me-4"><i class="text-warning fas fa-star"></i> ${movie.puntuacion} IMDb</div>
                    <div class="categoria-detail fst-italic mb-1 me-4">${movie.categoria}</div>                
                    <div class="duracion-detail mb-1 me-4">${movie.duracion}</div>
                  </div>

                  <div class="detalles-detail my-lg-1 my-sm-1">
                    <div class="genero-detail mb-1"><span class="fw-bold">Genero: </span>${movie.genero}</div>
                    <div class="director-detail mb-1"><span class="fw-bold">Director: </span>${movie.director} </div>
                    <div class="reparto-detail mb-1"><span class="fw-bold">Reparto: </span>${movie.reparto} </div>                
                  </div>

                  <div class="descripcion-detail text-wrap mt-3">${movie.descripcion}</div>
                  
                  <div class="align-self-start mt-3 mt-md-4 mb-5">
                    <button id="btn-play-video" role="button" class="button-play-title ">
                      <i class="fas fa-play me-4"></i>
                      Reproducir
                    </button>
                  </div>
                </div>
               
                `
    imgMovieMain.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${movie.imagen})`;
    // let tapa = document.querySelector('.tapa').style.background = `url(${movie.tapa})`

const reproducirVideo =(movie)=>{
  let reproductor = document.createElement('div');
  reproductor.setAttribute('id', 'container-reproductor');
  reproductor.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'w-100', 'h-100')
          reproductor.innerHTML = `
          <iframe
              class="d-none"
              id="video-iframe"
              width="560" 
              height="315"  
              title="YouTube video player" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>        
          </iframe>

          `
  document.querySelector('main').appendChild(reproductor)
  let btnVideo = document.querySelector('#btn-play-video');
  btnVideo.addEventListener('click', ()=>{
    let video = document.querySelector('#video-iframe')
    video.classList.remove('d-none')
    video.setAttribute('src',`${movie.video}`)
    video.requestFullscreen()

      video.addEventListener("fullscreenchange", function(event) {
        if (!document.fullscreenElement) {
          window.location.reload()
        }})
  })
}
reproducirVideo(movie)







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
