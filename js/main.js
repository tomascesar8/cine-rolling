export const crearNav =()=>{
    let navMain = document.createElement('nav');
    navMain.classList.add('navbar-main', 'navbar', 'navbar-dark', 'fixed-top', 'navbar-expand-lg');
    navMain.innerHTML = `
            <div class="container " id="nabvar-contain">
            <a class="navbar-brand fw-bold ms-xl-5" href="#"
                >CineRolling+</a
            >
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark offcanvas-modal" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                <button class=" btn text-white border border-0"
                type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasUser" aria-controls="offcanvasUser""
                >
                    <h5 class="offcanvas-title-toggler mb-0" id="offcanvasDarkNavbarLabel"></h5>
                </button>
                <button type="button" class="btn-close btn-close-white" id="btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr class="separador-perfil opacity-75 d-lg-none mt-0 mb-4">
                <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item mt-2 mt-lg-0 order-1">
                    <a class="nav-link active navbar-element" aria-current="page" href="#">Inicio</a>
                    </li>
                    <!-- <li class="nav-item mt-2 mt-lg-0 order-2">
                    <a class="nav-link navbar-element" href="#">Mi lista</a>
                    </li> -->
                    <li class="nav-item dropdown mt-2 mt-lg-0 order-2" id="dropdownMiLista" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <a class="nav-link dropdown-toggle navbar-element" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mi lista
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark responsive-favs" id="favorites-list" aria-labelledby="dropdownMiLista">
                    </ul>
                    <li id="dropdown-menu" class="nav-item dropdown mt-2 mt-lg-0 order-3">
                    <a class="nav-link dropdown-toggle navbar-element" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Géneros
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark lista-generos">
                        <li class="dropdown ">
                        <a class="dropdown-item lista-generos-accion" href="#Acción" >Acción</a>
                        </li>
                        
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-familia" href="#Familia">Animación</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-aventura" href="#Acción">Aventura</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-guerra" href="#Acción">Bélico Guerra</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-ficcion" href="#Ficción">Ciencia Ficción</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-comedia" href="#Comedia">Comedia</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-crimen" href="#Drama">Crimen</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-drama" href="#Drama">Drama</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-familia" href="#Familia">Familia</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-fantasia" href="#Familia">Fantasía</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-romance" href="#Familia">Romance</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item lista-generos-terror" href="#Terror">Terror</a></li>
                    </ul>
                    </li>
                    <!-- BUSCADOR -->
                    <div class="centrar d-flex position-relative">
                    <div class="entrada-cont d-flex justify-content-center align-items-center">
                        <input id="input-search" type="text" placeholder="Buscar películas..." list="search-datalist" autocomplete="off" >                     
                        <div class="cont1">
                        <div class="cont2">
                            <button id="btn-lupa" type="button"><i width="20px" class="fas fa-search"></i></button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!-- FINAL BUSCADOR -->
                </ul>
                <button
                class="nav-btn-user navbar-element btn text-white border border-0"
                type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasUser" aria-controls="offcanvasUser"
                >
                </button>
                </div>
            </div>
            </div>
            `
    document.getElementsByTagName('header')[0].appendChild(navMain)
}
crearNav()

let sliderMain = document.querySelector('.slider-main');
sliderMain. innerHTML = `
        <div class="container mx-3 mb-5">
          <h3 class="title mb-2">
          </h3>
          <div class="details d-flex align-items-center"> 
            <h4 class="genero me-4 fs-6 fs-sm-4 "></h4>
            <h5 class="año me-4 fs-6 fs-sm-4"></h5>
            <h5 class="categoria fs-6 fs-sm-4"></h5>
          </div>
          <p class="description mb-0">
          </p>
          <div class="d-flex flex-wrap mt-3">
            <button role="button" class="button-play-title ">
              <i class="fas fa-play me-4"></i>Reproducir
            </button>
            <button role="button" class="button-info ">
              <i class="fas fa-info-circle me-2 me-sm-4 fs-4"></i>Más información
            </button>
          </div>
        </div>
        
        <button class="carousel-control-prev w-50 m-0" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        </button>
        <button class="carousel-control-next w-50 m-0" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        </button>
`
export const crearFooter =()=>{
let footerMain = document.querySelector('footer');
footerMain.innerHTML = `
      <div class="footer-landing sticky-bottom">
        <div class="container-fluid">
          <div class="row">
            <div class="container-footer-links col-sm-6 col-md-4 order-1 mb-0 mb-sm-2 order-md-2 col-12">
              <div>
                <div class="footer-links fs-5 my-2 py-2 my-0"><a class="text-decoration-none" href="/contact.html">Contacto</a></div>
                <div class="footer-links fs-5 my-2 py-2 my-0"><a class="text-decoration-none" href="/about-us.html">Sobre Nosotros</a></div>
                <div class="footer-links fs-5 my-2 py-2 my-0"><a class="text-decoration-none" href="/suport.html">Suport</a></div>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center my-3 col-md-4 order-0 order-md-0 col-12">
              <a class="fw-bold fs-1 ms-xl-5 container-logo text-start" href="#header-landing">CineRolling+</a>
            </div>
            <div class="icons-footer col-12 col-sm-6 col-md-4 d-flex justify-content-evenly align-items-center order-2 order-md-1 ">
              <div class="container-icons-redes d-flex d-flex justify-content-between my-4 my-sm-0">
                <div class="icons-redes footer-icon-insta text-light"><a class="icons-links-redes" href="/error404.html"><i class="fab fa-instagram"></i></a></div>
                <div class="icons-redes footer-icon-twitter text-light"><a class="icons-links-redes" href="/error404.html"><i class="fab fa-twitter"></i></a></div>
                <div class="icons-redes footer-icon-fb text-light"><a class="icons-links-redes" href="/error404.html"><i class="fab fa-facebook"></i></a></div>
              </div>
            </div>
            <div class="container-footer-bottom order-4 text-light text-center col-12 d-flex justify-content-center py-2 mt-2 bg-dark">
              <small>© 2023 <b>CineRolling</b> - Todos los Derechos Reservados.</small>
            </div>
          </div>
        </div>
      </div>
`
}
crearFooter()
const peliculas = JSON.parse(localStorage.getItem('films'));
const user = JSON.parse(localStorage.getItem('user'));

function isOutstanding(peliculas) {
    if (peliculas.destacada === true) {
        console.log(peliculas);
        return peliculas;
    }
}

let filmsLS = localStorage.getItem('films')
let dataFilms = JSON.parse(filmsLS);

export function addUserName() {        
    let titleOffCanvasToggler = document.querySelector('.offcanvas-title-toggler');
    let titleOffCanvasPerfil = document.querySelector('.offcanvas-title-perfil');
    let emailOffCanvasPerfil = document.querySelector('.offcanvas-email-perfil');
    let userBtn = document.querySelector('.nav-btn-user');

    function nameUser(element) {
        element.innerHTML = `<i class="me-2 fas fa-user-circle"></i> ${user.name}`
        element.classList.add('d-flex', 'align-items-center');
    }
    nameUser(titleOffCanvasToggler)
    nameUser(titleOffCanvasPerfil);
    nameUser(userBtn)
    userBtn.classList.add('d-none');
    emailOffCanvasPerfil.innerHTML = `${user.email}`
}
addUserName()

let peliculasDestacadas = dataFilms.filter(isOutstanding);
let sliderFilms = document.querySelector('.slider-main');
let titleSliderFilm = document.querySelector('.title');
let descriptionSliderFilm = document.querySelector('.description');
let genderSliderFilm = document.querySelector('.genero')
let categorySliderFilm = document.querySelector('.categoria');
let yearSliderFilm = document.querySelector('.año');

let i = 0;
sliderFilms.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[0].imagen})`;
titleSliderFilm.innerHTML = `${peliculasDestacadas[0].nombre}`
descriptionSliderFilm.innerHTML = `${peliculasDestacadas[0].descripcion}`
genderSliderFilm.innerHTML = `${peliculasDestacadas[0].genero}`
categorySliderFilm.innerHTML = `${peliculasDestacadas[0].categoria}`
yearSliderFilm.innerHTML = `${peliculasDestacadas[0].año}`

// setInterval(() => {
//     i++
//     if(i>peliculasDestacadas.length-1){
//         i=0
//     }
//     sliderFilms.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[i].imagen})`;
//     titleSliderFilm.innerHTML = `${peliculasDestacadas[i].nombre}`
//     descriptionSliderFilm.innerHTML = `${peliculasDestacadas[i].descripcion}`
//     genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
//     categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
//     yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`

// }, 5000);

let sliderDerecho = document.querySelector('.carousel-control-next');
let sliderIzq = document.querySelector('.carousel-control-prev');

function moverDerecha() {
    i++
    if (i > (peliculasDestacadas.length - 1)) {
        i = 0;
    }
    sliderFilms.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[i].imagen})`;
    titleSliderFilm.innerHTML = `${peliculasDestacadas[i].nombre}`
    descriptionSliderFilm.innerHTML = `${peliculasDestacadas[i].descripcion}`
    genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
    categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
    yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`
}
sliderDerecho.addEventListener('click', moverDerecha)

function moverIzq() {
    i--
    if (i < 0) {
        i = peliculasDestacadas.length - 1;
    }
    sliderFilms.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[i].imagen})`;
    titleSliderFilm.innerHTML = `${peliculasDestacadas[i].nombre}`
    descriptionSliderFilm.innerHTML = `${peliculasDestacadas[i].descripcion}`
    genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
    categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
    yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`
}
sliderIzq.addEventListener('click', moverIzq)

let nav = document.querySelector('.navbar-main');
window.addEventListener('scroll', function () {
    if(window.pageYOffset>20){
    nav.classList.add('bg-scroll-nav', 'shadow');
    }else{
    nav.classList.remove('bg-scroll-nav', 'shadow')
    }
});


document.querySelector('.log-out').addEventListener('click', logOut)
function logOut() {
    // localStorage.removeItem('user');
    localStorage.clear()
    document.location.assign(window.location.origin)
}

let containerCategories = document.querySelector('.container-categories');

let cats = ['Acción', 'Drama', 'Comedia', 'Familia', 'Ficción', 'Terror'];
cats.forEach(categoria=>{
    const cat = document.createElement('h3');
    cat.classList.add('title-categories', `title-${categoria}`, 'd-block');
    cat.setAttribute('data-aos', 'fade-right')
    const carrousel = document.createElement("div");
    carrousel.setAttribute('data-aos', 'fade-right');
    carrousel.classList.add('container-films-cats', 'container-fluid')
    cat.innerHTML = categoria;
    cat.style.marginLeft = "2em"
    carrousel.id = categoria;
    carrousel.innerHTML = `
    <button class="angle-left h-50 btn"><i class="fas fa-angle-left fa-2x angle-left color6"></i></button>
    <div class="d-flex carrousel-cats p-2 carrousel-${categoria}">
    </div>
    <button class="angle-right h-50 btn"><i class="fas fa-angle-right fa-2x angle-right color6"></i></button>
    `
    carrousel.classList.add("d-flex", "align-items-center", "carrousel", "mt-0");
    cat.classList.add("text-light", "commontexts", "mb-0");
    containerCategories.appendChild(cat);
    containerCategories.appendChild(carrousel);
})

const familia = document.querySelector('.carrousel-Familia');
const comedia = document.querySelector('.carrousel-Comedia');
const drama = document.querySelector('.carrousel-Drama');
const accion = document.querySelector('.carrousel-Acción');
const cienciaFiccion = document.querySelector('.carrousel-Ficción');
const terror = document.querySelector('.carrousel-Terror');


{/* <a href="detail.html#${movie.id}" class="btn"><i class="far fa-play-circle fa-2x"></i></a> */}
let filmsFamilia = peliculas.filter(movie=>movie.genero.includes('Familia'));
let filmsComedia = peliculas.filter(movie=>movie.genero.includes('Comedia'));
let filmsDrama = peliculas.filter(movie=>movie.genero.includes('Drama'));
let filmsAccion = peliculas.filter(movie=>movie.genero.includes('Acción'));
let filmsCienciaF = peliculas.filter(movie=>movie.genero.includes('Ficción'));
let filmsTerror = peliculas.filter(movie=>movie.genero.includes('Terror'));

console.log(filmsCienciaF);
console.log(filmsTerror);


function listarFilms(array) {
    array.forEach(movie => {
        switch (true) {
            case array == filmsFamilia:
                    const movieCardFamilia = document.createElement("div");
                    movieCardFamilia.classList.add("movie-card")
                    movieCardFamilia.innerHTML = `
                    <div id="${movie.id}" class="movie d-flex justify-content-end align-items-end" style="background-image:url('${movie.tapa}');">
                        <h5 class="movie-title m-2 pt-1 text-center border-bottom titlesandbtns d-none">${movie.nombre}</h5>
                        <a href="#" class="link-icon-${movie.id} fav-btn me-2"><i class="fas fa-plus-square fs-3 fav-btn"></i></i></a>
                    </div>
                    `
                    familia.appendChild(movieCardFamilia);
                break;
                case array == filmsComedia:
                    const movieCardComedia = document.createElement("div");
                    movieCardComedia.classList.add("movie-card")
                    movieCardComedia.innerHTML = `
                    <div id="${movie.id}" class=" movie d-flex justify-content-end align-items-end" style="background-image:url('${movie.tapa}');">
                        <h5 class="movie-title m-2 pt-1 text-center border-bottom titlesandbtns d-none">${movie.nombre}</h5>
                        <a href="#" class="link-icon-${movie.id} fav-btn me-1"><i class="fas fa-plus-square fs-3 fav-btn"></i></a>
                    </div>
                    `;
                    comedia.appendChild(movieCardComedia);
                break;
                case array == filmsDrama:
                    const movieCardDrama = document.createElement("div");
                    movieCardDrama.classList.add("movie-card")
                    movieCardDrama.innerHTML = `
                    <div id="${movie.id}" class="movie d-flex justify-content-end align-items-end" style="background-image:url('${movie.tapa}');">
                        <h5 class="movie-title m-2 pt-1 text-center border-bottom titlesandbtns d-none">${movie.nombre}</h5>
                        <a href="#" class="link-icon-${movie.id} fav-btn me-1"><i class="fas fa-plus-square fs-3 fav-btn"></i></a>
                    </div>
                    `;
                    drama.appendChild(movieCardDrama);
                break;
                case array == filmsAccion:
                    const movieCardAccion = document.createElement("div");
                    movieCardAccion.classList.add("movie-card")
                    movieCardAccion.innerHTML = `
                    <div id="${movie.id}" class="movie d-flex justify-content-end align-items-end" style="background-image:url('${movie.tapa}');">
                        <h5 class="movie-title m-2 pt-1 text-center border-bottom titlesandbtns d-none">${movie.nombre}</h5>
                        <a href="#" class="link-icon-${movie.id} fav-btn me-1"><i class="fas fa-plus-square fs-3 fav-btn"></i></a>
                    </div>
                    `;
                    accion.appendChild(movieCardAccion);
                break;
                case array == filmsCienciaF:
                    const movieCardCienciaF = document.createElement("div");
                    movieCardCienciaF.classList.add("movie-card")
                    movieCardCienciaF.innerHTML = `
                    <div id="${movie.id}" class="movie d-flex justify-content-end align-items-end" style="background-image:url('${movie.tapa}');">
                        <h5 class="movie-title m-2 pt-1 text-center border-bottom titlesandbtns d-none">${movie.nombre}</h5>
                        <a href="#" class="link-icon-${movie.id} fav-btn me-1"><i class="fas fa-plus-square fs-3 fav-btn"></i></a>
                    </div>
                    `;
                    cienciaFiccion.appendChild(movieCardCienciaF);
                break;
                case array == filmsTerror:
                    const movieCardTerror = document.createElement("div");
                    movieCardTerror.classList.add("movie-card")
                    movieCardTerror.innerHTML = `
                    <div id="${movie.id}" class="movie d-flex justify-content-end align-items-end" style="background-image:url('${movie.tapa}');">
                        <h5 class="movie-title m-2 pt-1 text-center border-bottom titlesandbtns d-none">${movie.nombre}</h5>
                        <a href="#" class="link-icon-${movie.id} fav-btn me-1"><i class="fas fa-plus-square fs-3 fav-btn"></i></a>
                    </div>
                    `;
                    terror.appendChild(movieCardTerror);
                break;

                default:
        }
    familia.scrollLeft = comedia.scrollLeft = drama.scrollLeft = accion.scrollLeft = cienciaFiccion.scrollLeft = terror.scrollLeft = 0;
    });
}
listarFilms(filmsAccion)
listarFilms(filmsComedia);
listarFilms(filmsDrama)
listarFilms(filmsFamilia);
listarFilms(filmsTerror)
listarFilms(filmsCienciaF)


containerCategories.addEventListener("click",(event)=>{
    if(event.target.classList.contains("angle-right")){
        switch (true) {
            case event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia':
                comedia.scrollLeft+=193.9;
            break;
            case event.target.parentElement.id === 'Ficción' || event.target.parentElement.parentElement.id === 'Ficción':
                cienciaFiccion.scrollLeft+=193.9;
            break;
            case event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror':
                terror.scrollLeft+=193.9;
            break;
            case event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama':
                drama.scrollLeft+=193.9;
            break;
            case event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción':
                accion.scrollLeft+=193.9;
            break;
            case event.target.parentElement.id === 'Familia' || event.target.parentElement.parentElement.id === 'Familia':
                familia.scrollLeft+=193.9;
            break;
            default:
        }
    }else if(event.target.classList.contains("angle-left")){
        switch (true) {
            case event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia':
                comedia.scrollLeft+= -195;
            break;
            case event.target.parentElement.id === 'Ficción' || event.target.parentElement.parentElement.id === 'Ficción':
                cienciaFiccion.scrollLeft+= -195;
            break;
            case event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror':
                terror.scrollLeft+= -195;
            break;
            case event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama':
                drama.scrollLeft+= -195;
            break;
            case event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción':
                accion.scrollLeft+= -195;
            break;
            case event.target.parentElement.id === 'Familia' || event.target.parentElement.parentElement.id === 'Familia':
                familia.scrollLeft+= -195;
            break;
            default:
            }
        }
})


let generosAccion = document.querySelector('.lista-generos-accion');
let generosAnimacion = document.querySelector('lista-generos-animacion')
let generosAventura = document.querySelector('lista-generos-aventura')
let generosGuerra = document.querySelector('lista-generos-guerra')
let generosFiccion = document.querySelector('lista-generos-ficcion')
let generosComedia= document.querySelector('lista-generos-comedia')
let generosCrimen = document.querySelector('lista-generos-crimen')
let generosDrama = document.querySelector('lista-generos-drama')
let generosFamilia = document.querySelector('lista-generos-familia')
let generosFantasia = document.querySelector('lista-generos-fantasia')
let generosRomance = document.querySelector('lista-generos-romance')
let generosTerror = document.querySelector('lista-generos-terror')

let navGeneros = document.querySelector('.lista-generos');
console.log(navGeneros);
navGeneros.addEventListener("click",(event)=>{
    setTimeout(() => {
    document.documentElement.scrollTop-= 100;
    },750)
    if(document.documentElement.scrollWidth < 992){
        setTimeout(() => {
            document.getElementById('btn-close-modal').click()
        },750)
    }
})

//* FAVORITOS

const containerFavs = document.getElementById("favorites-list")
// const favsTitle = document.createElement("div");
// favsTitle.classList.add("titlesandbtns","dropdown-header","mt-0","mb-1", 'ms-5');
// favsTitle.style.fontSize="large"
// favsTitle.innerHTML="Lista de favoritos"
// containerFavs.appendChild(favsTitle);


// function getMovie(id) {
//     const idPelicula = `${peliculas}.${id}`
//     return idPelicula;
// }

// async function editMovie(id, newData) {
//     const idPelicula = `${peliculas}.${id}`
//     const peliLS =
//     return data;
// }
function createListaVacia() {
    let listaVacia = document.createElement('li');
        listaVacia.setAttribute('id', 'lista-vacia')
        listaVacia.classList.add("dropdown-item","pt-0", "d-flex", "align-items-center");
        listaVacia.innerText = `Tu lista está vacía`
        containerFavs.appendChild(listaVacia);
}

function getFavsLS() {
    console.log(' GET FAVS LS');
    let getFavs;
    if(localStorage.getItem('favs')){
        let dataFavs = JSON.parse(localStorage.getItem('favs'))
        getFavs = dataFavs;
    }else{
        let favs = [];
        JSON.stringify(localStorage.setItem('favs', favs))
        getFavs = favs;
    }
    return getFavs;
}
function saveFavLS(favInfo){
    console.log('SAVE FAV LS');
    let favs = getFavsLS();
    favs.push(favInfo);
    localStorage.setItem('favs', JSON.stringify(favs));
}

function addFav(favInfo){
    console.log('ADD FAV');
    const favorite=document.createElement("li")
    favorite.id=`fav-${favInfo.id}`
    favorite.classList.add(`fav-${favInfo.id}`,"dropdown-item","pt-0", "d-flex", "align-items-center", "element-fav");
    console.log('entre aca');
    console.log(favorite);
    favorite.innerHTML=`
    <div class="me-2 col-md-1 align-self-center">
        <h3 class="mb-1  delete-fav text-danger ml-2 mb-0" role="button">&times</h3>
    </div>
    <a class="ps-2 pe-1 text-wrap text-decoration-none text-light" href="detail.html#${favInfo.id}">${favInfo.nombre}</a>
    `;
    containerFavs.appendChild(favorite);
    console.log(favorite);

    containerFavs.querySelector('#lista-vacia')?.remove()
}

function renderFavsLS(){
    console.log('RENDER FAV LS');
    setTimeout(() => {
        let favs = getFavsLS();
        favs.forEach((fav)=>{
            const favorite=document.createElement("li")
            favorite.id=`fav-${fav.id}`
            favorite.classList.add(`fav-${fav.id}`,"dropdown-item","pt-0", "d-flex", "align-items-center", "element-fav");
            console.log('entre aca');
            console.log(favorite);
            favorite.innerHTML=`
            <div class="me-2 col-md-1 align-self-center">
                <h3 class="mb-1 delete-fav text-danger ml-2 mb-0" role="button">&times</h3>
            </div>
            <a class="ps-2 pe-1 pe-3 text-wrap text-decoration-none text-light" href="detail.html#${fav.id}">${fav.nombre}</a>
            `;
            containerFavs.appendChild(favorite);
            console.log(document.getElementById(`${fav.id}`))
            document.querySelectorAll(`.link-icon-${fav.id}`).forEach(result=>
            result.innerHTML = `<i class="fas fa-check-square text-success fav-btn"></i>`)
        })
        if(favs.length == 0){
            createListaVacia()
        }
    },100);
}

function deleteFav(e){
    console.log("DELETE FAV");
    if(e.target.classList.contains("delete-fav")){
        e.preventDefault();
        const removedElement = e.target.parentElement.parentElement
        const deleteId= removedElement.id.slice(4);
        removedElement.remove();
        deleteFavLS(deleteId);
        console.log(deleteId);
        console.log(document.getElementById(`${deleteId}`).querySelector('.text-success').parentElement)
        document.querySelectorAll(`.link-icon-${deleteId}`).forEach(result=>
            result.innerHTML = `<i class="fas fa-plus-square fs-3 fav-btn">`)
        console.log(e.target.parentElement.parentElement.parent)
    }
    if(!containerFavs.querySelector('.element-fav')){
        createListaVacia()
    }
}

function deleteFavLS(deleteId){
    console.log('DELETE FAV LS');
    let favs = getFavsLS();
    favs.forEach((fav,index)=>{
        if(fav.id === deleteId){
            favs.splice(index,1);
        }
    })
    localStorage.setItem("favs",JSON.stringify(favs));
}
document.addEventListener("DOMContentLoaded",renderFavsLS);

containerCategories.addEventListener("click",(e)=>{
    console.log('entro al escuchador de eventos del carrusel');
    console.log(e.target);
    if(e.target.classList.contains("fav-btn")){
        console.log('entro al fav-btn');
        console.log(e.target);
        e.preventDefault();
        let favInfo=e.target.parentElement.parentElement;
        console.log(favInfo);
        if(favInfo.classList.contains("movie")){
            console.log('entro a movie');
            if (e.target.classList.contains("text-success")){
                console.log('entro a color');
                // e.target.classList.remove("text-success")
                containerFavs.querySelector(`.fav-${favInfo.id}`).remove()
                deleteFavLS(favInfo.id)
                console.log('no cambia el i');
                document.querySelectorAll(`.link-icon-${favInfo.id}`).forEach(result=>
                    result.innerHTML = `<i class="fas fa-plus-square fs-3 fav-btn">`)
                // e.target.parentElement.innerHTML = `<i class="fas fa-plus-square fs-3 fav-btn">`
                if(!containerFavs.querySelector('.element-fav')){
                    createListaVacia()
                }
            }else{
                console.log('CHECKEA');
                document.querySelectorAll(`.link-icon-${favInfo.id}`).forEach(result=>
                    result.innerHTML = `<i class="fas fa-check-square text-success fav-btn"></i>`)
                // e.target.parentElement.innerHTML = `<i class="fas fa-check-square text-success fav-btn"></i>`
                console.log(favInfo.parentElement.previusSibling)
                favInfo=
                {
                    nombre: favInfo.parentElement.querySelector('.movie-title').innerHTML,
                    id: favInfo.id
                }
                addFav(favInfo)
                saveFavLS(favInfo)
            }
        }
    }
})
containerFavs.addEventListener("click",deleteFav);


//? Seleccion de titulos
// let titleAccion = document.querySelector('.title-Acción');
// let titleAnimacion = document.querySelector('.title-Familia');
// let titleAventura = document.querySelector('.title-Acción');
// let titleGuerra = document.querySelector('.title-Acción');
// let titleFiccion = document.querySelector('.title-Ficción');
// let titleComedia = document.querySelector('.title-Comedia');
// let titleCrimen = document.querySelector('.title-Drama');
// let titleDrama = document.querySelector('.title-Drama');
// let titleFamilia = document.querySelector('.title-Familia');
// let titleFantasia = document.querySelector('.title-Familia');
// let titleRomance = document.querySelector('.title-Familia');
// let titleTerror = document.querySelector('.title-Terror');

// function moverTitle(element, titleElement) {
//     element.addEventListener("click",(event)=>{
//             setTimeout(() => {
//                 titleElement.classList.add('animate__animated' , 'animate__pulse')
//                 console.log('chau');
//             }, 2000);
//             titleElement.classList.remove('animate__animated' , 'animate__pulse')
// //             if(document.documentElement.scrollWidth < 992){
//     }
// )}
// moverTitle(generosAccion, titleAccion)
// moverTitle(generosAnimacion, titleAnimacion)
// moverTitle(generosAventura, titleAventura)
// moverTitle(generosGuerra, titleGuerra)
// moverTitle(generosFiccion, titleFiccion)
// moverTitle(generosComedia, titleComedia)
// moverTitle(generosCrimen, titleCrimen)
// moverTitle(generosDrama, titleDrama)
// moverTitle(generosFamilia, titleFamilia)
// moverTitle(generosFantasia, titleFantasia)
// moverTitle(generosRomance, titleRomance)
// moverTitle(generosTerror, titleTerror)
//?


//* BUSCADOR
let searchDataList = document.querySelector('#input-search');
let containerSearcher = document.querySelector('.centrar')
let containerResultado = document.createElement('div')
containerResultado.setAttribute('id', 'resultados-busqueda');
containerResultado.classList.add('position-absolute')

searchDataList.addEventListener('keyup', e=>{
    if(e.target.matches('#input-search')){
        if (containerResultado.childNodes.length===0) {
        peliculas.forEach(pelicula=>{
                let itemBusqueda = document.createElement('div')
                itemBusqueda.classList.add('list-item-busqueda', 'd-none')
                itemBusqueda.innerHTML = `
                <a id="movie-fav-${pelicula.id}" class="dropdown-item text-wrap p-1">${pelicula.nombre}</a>
                `
                containerResultado.appendChild(itemBusqueda)
                containerSearcher.appendChild(containerResultado)
            })
        }
        document.querySelectorAll('.list-item-busqueda').forEach(item=>{
            if(item.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                console.log('LCDST');
                item.classList.remove('d-none')
            }else if(!item.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                item.classList.add('d-none')
                containerResultado.classList.add('p-0')
            }
        })       
    }
    if(e.target.value.length == 0){
            containerSearcher.removeChild(containerResultado)
            containerResultado.innerHTML = ""
        }
    })