import { colorScrollNav, crearNav, listaFavoritos, buscador, addUserName, logOut, reproducirVideo, scrollGeneros } from "./helpers.js";
const peliculas = JSON.parse(localStorage.getItem('films'));
const user = JSON.parse(localStorage.getItem('user'));
crearNav()
addUserName()
logOut()

const slider =()=>{
    let sliderMain = document.querySelector('.slider-main');
    sliderMain. innerHTML = `
            <div id="" class="container mx-3 mb-5">
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
                    <button role="button" class="button-play-title">
                        <i class="fas fa-play me-4"></i>
                        Reproducir
                    </button>
                    <button role="button" class="button-info">
                        <i class="fas fa-info-circle me-2 me-sm-4 fs-4"></i>
                        Más información
                    </button>
                </div>
            </div>
            <button class="carousel-control-prev w-50 m-0" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            </button>
            <button class="carousel-control-next w-50 m-0" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            </button>
            `

    function isOutstanding(peliculas) {
        if (peliculas.destacada === true) {
            // console.log(peliculas);
            return peliculas;
        }
    }
    let peliculasDestacadas = peliculas.filter(isOutstanding);
    let idPeliculasDestacada = document.querySelector('#id');
    // let sliderFilms = document.querySelector('.slider-main');
    let titleSliderFilm = document.querySelector('.title');
    let descriptionSliderFilm = document.querySelector('.description');
    let genderSliderFilm = document.querySelector('.genero')
    let categorySliderFilm = document.querySelector('.categoria');
    let yearSliderFilm = document.querySelector('.año');

    let i = 0;
    idPeliculasDestacada = `destacada-${peliculasDestacadas[0].id}`
    sliderMain.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[0].imagen})`;
    titleSliderFilm.innerHTML = `${peliculasDestacadas[0].nombre}`
    descriptionSliderFilm.innerHTML = `${peliculasDestacadas[0].descripcion}`
    genderSliderFilm.innerHTML = `${peliculasDestacadas[0].genero}`
    categorySliderFilm.innerHTML = `${peliculasDestacadas[0].categoria}`
    yearSliderFilm.innerHTML = `${peliculasDestacadas[0].año}`
    console.log(idPeliculasDestacada)
    setInterval(() => {
        i++
        if(i>peliculasDestacadas.length-1){
            i=0
        }
        idPeliculasDestacada = `destacada-${peliculasDestacadas[i].id}`
        sliderMain.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[i].imagen})`;
        titleSliderFilm.innerHTML = `${peliculasDestacadas[i].nombre}`
        descriptionSliderFilm.innerHTML = `${peliculasDestacadas[i].descripcion}`
        genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
        categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
        yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`
        // console.log(idPeliculasDestacada)

    }, 5000);

    let sliderDerecho = document.querySelector('.carousel-control-next');
    let sliderIzq = document.querySelector('.carousel-control-prev');

    function moverDerecha() {
        i++
        if (i > (peliculasDestacadas.length - 1)) {
            i = 0;
        }
        idPeliculasDestacada = `destacada-${peliculasDestacadas[i].id}`
        sliderMain.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[i].imagen})`;
        titleSliderFilm.innerHTML = `${peliculasDestacadas[i].nombre}`
        descriptionSliderFilm.innerHTML = `${peliculasDestacadas[i].descripcion}`
        genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
        categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
        yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`
        // console.log(idPeliculasDestacada)
    }
    sliderDerecho.addEventListener('click', moverDerecha)

    function moverIzq() {
        i--
        if (i < 0) {
            i = peliculasDestacadas.length - 1;
        }
        idPeliculasDestacada = `destacada-${peliculasDestacadas[i].id}`
        sliderMain.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[i].imagen})`;
        titleSliderFilm.innerHTML = `${peliculasDestacadas[i].nombre}`
        descriptionSliderFilm.innerHTML = `${peliculasDestacadas[i].descripcion}`
        genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
        categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
        yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`
        console.log(idPeliculasDestacada)

    }
    sliderIzq.addEventListener('click', moverIzq)

    let buttonInfo = document.querySelector('.button-info');
    let btnDestacada = document.querySelector('.button-play-title');

    function redirigir(element){
        element.addEventListener('click', (event)=>{
            // console.log(idPeliculasDestacada.slice(idPeliculasDestacada.indexOf('-')+1));
            window.location.assign(window.location.origin + `/movie-detail.html#${idPeliculasDestacada.slice(idPeliculasDestacada.indexOf('-')+1)}`)
        })
    }
    redirigir(buttonInfo)
    // redirigir(btnDestacada)
    btnDestacada.addEventListener('click', (event)=>{
        let peliDestacada = peliculasDestacadas.find(movie=>movie.id == idPeliculasDestacada.slice(idPeliculasDestacada.indexOf('-')+1))
        console.log(peliDestacada);
        reproducirVideo(peliDestacada)
        // btnDestacada.addEventListener('click', )
    })
}
slider()
colorScrollNav()

const createCategories =()=>{
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
    <button class="angle-left h-50 btn"><i class="fas fa-angle-left fa-2x angle-left"></i></button>
    <div class="d-flex carrousel-cats p-2 carrousel-${categoria}">
    </div>
    <button class="angle-right h-50 btn"><i class="fas fa-angle-right fa-2x angle-right"></i></button>
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
        if (movie.publicada === true){
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

let categorias = document.querySelectorAll('.carrousel-cats')
categorias.forEach(cat=> cat.addEventListener('click', (e)=>{    
        if(e.target.classList.contains('movie')){
            let idMovie = e.target.id;
            console.log(idMovie)
            window.location.assign(window.location.origin + `/movie-detail.html#${idMovie.slice(idMovie.indexOf('-')+1)}`)
        }
    })
)

// let btnDestacada = document.querySelector('.button-play-title');
// btnDestacada.addEventListener('click', (e)=>{
//     console.log(e.target);
//         // window.location.assign(window.location.origin + `/movie-detail.html#${idMovie.slice(idMovie.indexOf('-')+1)}`)
// })

// function redirigir(event){
//     let buttonInfo = document.querySelector('.container-categories');
//     buttonInfo.addEventListener('click', (event)=>{
//         console.log(idPeliculasDestacada.slice(idPeliculasDestacada.indexOf('-')+1));
//         window.location.assign(window.location.origin + `/movie-detail.html#${idPeliculasDestacada.slice(idPeliculasDestacada.indexOf('-')+1)}`)
//     })
// }
// redirigir(event)
}
createCategories()
scrollGeneros()

//* FAVORITOS
listaFavoritos()

//* BUSCADOR
buscador()

