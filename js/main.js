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

let peliculasDestacadas = dataFilms.filter(isOutstanding);
let sliderFilms = document.querySelector('.pelicula-principal');
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
    // genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
    // categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
    // yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`

// }, 5000);

let sliderDerecho = document.querySelector('.carousel-control-next');
let sliderIzq = document.querySelector('.carousel-control-prev');

function moverDerecha() {
    i++
    if (i>peliculasDestacadas.length -1 ) {
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
    if (i<0 ) {
        i = peliculasDestacadas.length -1;
    }
    sliderFilms.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${peliculasDestacadas[i].imagen})`;
    titleSliderFilm.innerHTML = `${peliculasDestacadas[i].nombre}`
    descriptionSliderFilm.innerHTML = `${peliculasDestacadas[i].descripcion}`
    genderSliderFilm.innerHTML = `${peliculasDestacadas[i].genero}`
    categorySliderFilm.innerHTML = `${peliculasDestacadas[i].categoria}`
    yearSliderFilm.innerHTML = `${peliculasDestacadas[i].año}`
}
sliderIzq.addEventListener('click', moverIzq)

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