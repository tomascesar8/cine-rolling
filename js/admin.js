import { crearNav, colorScrollNav, buscador, addUserName, logOut, scrollGeneros, saveFilms } from "./helpers.js";
crearNav()
colorScrollNav()
buscador()
addUserName()
logOut()
scrollGeneros()

let peliculas = saveFilms()
console.log(peliculas);
const containerTable = document.querySelector(".container-table-movies");

const crearTabla = () =>{
    const tableMovies = document.createElement("table");
    // let idSelected;
    tableMovies.classList.add('table', 'text-light')
    tableMovies.innerHTML = `
        <thead>
            <tr class="header-table d-flex flex-wrap text-center">
                <th class="col-3 col-sm-2" scope="col">Nombre</th>
                <th class="col-3 col-sm-2" scope="col">Director</th>
                <th class="col-3 col-sm-2" scope="col">Genero</th>
                <th class="col-2 col-sm-1" scope="col">Categoria</th>
                <th class="col-12 col-sm-5 d-none d-sm-block" scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody id="body-table"></tbody>
        </tbody>
        `;
    containerTable.appendChild(tableMovies);
}
crearTabla()

const renderTable = () =>{
    peliculas.forEach( movie=> {
        let row = document.createElement('tr');
        row.id = movie.id;
        row.classList.add('d-flex', 'flex-wrap', 'text-center', 'align-middle')
        row.innerHTML = `
        <th class="align-self-center col-3 col-sm-2 text-sm-start ps-3" scope="row">${movie.nombre} <span class="fst-italic table-year">(${movie.año})</span> </th>
        <td class="align-self-center col-3 col-sm-2 text-md-nowrap">${movie.director} </td>
        <td class="align-self-center col-3 col-sm-2 text-md-nowrap">${movie.genero} </td>
        <td class="align-self-center col-2 col-sm-1">${movie.categoria} </td>
        <td class="container-admin-actions align-self-center col-12 col-sm-5 d-flex justify-content-evenly flex-nowrap">
            <div class="m-1">
                <button class="btn-admin-actions btn-publicar border ${movie.publicada? 'bg-success' : 'bg-secondary'} rounded-pill border-dark">
                    <i class="p-2 fas fa-check"></i>
                </button>
                <p>Publicado</p>
            </div> 
            <div class="m-1">
                <button class="btn-admin-actions btn-destacar ${movie.destacada? 'bg-warning' : 'bg-secondary'} border rounded-pill border-dark">
                    <i class="p-2 fas fa-medal"></i>
                </button>
                <p>Destacado</p>
            </div> 
            <div class="m-1">
                <button class="btn-admin-actions btn-editar bg-info border rounded-pill border-dark" data-bs-toggle="modal" data-bs-target="#modalAddMovie">
                    <i class="p-2 far fa-edit"></i>
                </button>
                <p>Editar</p>
            </div> 
            <div class="m-1">
                <button class="btn-admin-actions btn-borrar border bg-danger rounded-pill border-dark">
                    <i class="p-2 fas fa-trash-alt"></i>
                </button>
                <p>Borrar</p>
            </div> 
        </td>
        `    
        let bodyTable = document.querySelector('#body-table')
        bodyTable.appendChild(row)
        let editBtn = document.querySelector('.btn-editar')
    })
}
renderTable()

function limpiarFormulario() {
    document.querySelector('#form-add-movie select').selectedIndex = 0;
    // console.log(document.querySelector('#form-add-movie').querySelectorAll('input'))
    document.querySelector('#form-add-movie').reset()
    let optionSelected = document.querySelector('.option-selected');
    optionSelected.innerHTML = `Seleccionar`
}
let btnCloseModal = document.querySelector('#modalAddMovie').querySelector('.btn-close')
btnCloseModal.addEventListener('click', limpiarFormulario)

const idAdd = document.querySelector('#id-add-movie');
const nameAdd = document.querySelector('#name-add-movie');
const descAdd = document.querySelector('#desc-add-movie');
const generoAdd = document.querySelector('#genero-add-movie');
const directorAdd = document.querySelector('#director-add-movie');
const repartoAdd = document.querySelector('#reparto-add-movie');
const puntuacionAdd = document.querySelector('#puntuacion-add-movie');
const duracionAdd = document.querySelector('#duracion-add-movie');
const tapaAdd = document.querySelector('#tapa-add-movie');
const categoriaAdd = document.querySelector('#categoria-add-movie');
const yearAdd = document.querySelector('#year-add-movie');
const imgAdd = document.querySelector('#imagen-add-movie');
const videoAdd = document.querySelector('#video-add-movie');
const publicadaAdd = document.querySelector('#publicada-add-movie');
const destacadaAdd = document.querySelector('#destacada-add-movie');

class Pelicula{
    constructor(id, nombre, descripcion, genero, director, reparto, puntuacion, duracion, categoria, año, tapa, imagen, video, publicada, destacada){
        this.id = Number(id);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.genero = genero;
        this.director = director;
        this.reparto = reparto;
        this.puntuacion = puntuacion;
        this.duracion = duracion;
        `${duracion.includes('Min')? this.duracion = duracion : this.duracion = duracion+' Min'}`;
        this.categoria = categoria;
        this.año = año;
        this.tapa = tapa;
        this.imagen = imagen;
        `${video.includes('?autoplay=1')? this.video = video : this.video = video+'?autoplay=1'}`;
        this.publicada = publicada;
        this.destacada = destacada;
    }
}
function sendLS(conQueNombre, queQuieroEnviar) {
    localStorage.setItem(`${conQueNombre}`, JSON.stringify(queQuieroEnviar))
}

document.querySelector('#form-add-movie').addEventListener('submit', (event)=>{
    // event.preventDefault()
    let newMovie = new Pelicula(`${idAdd.value? idAdd.value : peliculas.length+1}`, nameAdd.value, descAdd.value, generoAdd.value, directorAdd.value, repartoAdd.value, puntuacionAdd.value, duracionAdd.value, categoriaAdd.value, yearAdd.value, tapaAdd.value, imgAdd.value, videoAdd.value, publicadaAdd.checked, destacadaAdd.checked);
    console.log(newMovie);
    console.log(Number(idAdd.value));
    if(peliculas.find(pelicula => pelicula.id == idAdd.value)){
        peliculas.splice(Number(idAdd.value)-1, idAdd.value.length, newMovie)
    }else{
        peliculas.push(newMovie)
    }
    console.log(peliculas);
    sendLS('films', peliculas)
})

containerTable.addEventListener('click', (e) => {
  if (
    e.target.parentElement.classList.contains('btn-admin-actions') ||
    (!e.target.querySelector('button') && e.target.querySelector('i'))
  ) {
    console.log(e.target.closest('tr').id);
    let movieRow = e.target.closest('.btn-admin-actions');
    let idMovie = movieRow.closest('tr').id;
    let movieEdit = peliculas.find((movie) => movie.id == idMovie);
    switch (true) {
      case movieRow.classList.contains('btn-publicar'):
        if (movieRow.classList.contains('bg-success')) {
          movieRow.classList.remove('bg-success');
          movieRow.classList.add('bg-secondary');
          movieEdit.publicada = false;
          sendLS('films', peliculas);
          console.log('LCDSM');
          console.log(movieEdit);
        } else {
          movieRow.classList.remove('bg-secondary');
          movieRow.classList.add('bg-success');
          movieEdit.publicada = true;
          sendLS('films', peliculas);
        }
        break;
      case movieRow.classList.contains('btn-destacar'):
        if (movieRow.classList.contains('bg-warning')) {
          movieRow.classList.remove('bg-warning');
          movieRow.classList.add('bg-secondary');
          movieEdit.destacada = false;
          sendLS('films', peliculas);
          console.log('LCDSM');
          console.log(movieEdit);
        } else {
          movieRow.classList.remove('bg-secondary');
          movieRow.classList.add('bg-warning');
          movieEdit.destacada = true;
          sendLS('films', peliculas);
        }
        break;
      case movieRow.classList.contains('btn-editar'):
        idAdd.value = idMovie;
        nameAdd.value = movieEdit.nombre;
        descAdd.value = movieEdit.descripcion;
        let modalTitle = document.querySelector('.modal-title-addMovie');
        modalTitle.classList.add('pt-2');
        modalTitle.innerText = 'Editar película';
        let btnFormAddMovie = document.querySelector('.btn-form-addMovie');
        btnFormAddMovie.innerText = 'Confirmar edición';
        let optionSelected = document.querySelector('.option-selected');
        if (movieEdit.genero.includes(',')) {
          optionSelected.innerHTML = `${movieEdit.genero}`;
        } else {
          generoAdd.value = movieEdit.genero;
        }
        directorAdd.value = movieEdit.director;
        repartoAdd.value = movieEdit.reparto;
        puntuacionAdd.value = movieEdit.puntuacion;
        duracionAdd.value = movieEdit.duracion;
        categoriaAdd.value = movieEdit.categoria;
        yearAdd.value = movieEdit.año;
        tapaAdd.value = movieEdit.tapa;
        imgAdd.value = movieEdit.imagen;
        videoAdd.value = movieEdit.video;
        publicadaAdd.checked = movieEdit.publicada;
        destacadaAdd.checked = movieEdit.destacada;
        break;
      case movieRow.classList.contains('btn-borrar'):
        let ubicarPelicula = peliculas.find((pelicula) => pelicula.id == idMovie);
        let posicionABorrar = peliculas.indexOf(
          peliculas.find((pelicula) => pelicula.id === ubicarPelicula.id)
        );
        let user = JSON.parse(localStorage.getItem('user'));
        Swal.fire({
          title: `Estás segur${
            user.gender == 'Masculino'
              ? 'o'
              : user.gender == 'Femenino'
              ? 'a'
              : 'x'
          } de eliminar esta película?`,
          text: 'Luego no podrás revertir esta acción!',
          icon: 'warning',
          background: '#0A1A2A',
          color: 'white',
          width: '600px',
          heightAuto: false,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si, eliminar!',
        }).then((result) => {
          if (result.isConfirmed) {
            let peliculaBorrada = peliculas.splice(posicionABorrar, 1);
            for (let i = 0; i < peliculas.length; i++) {
              peliculas[i].id = i + 1;
            }
            console.log(peliculaBorrada);
            console.log(peliculas);
            sendLS('films', peliculas);

            window.location.reload();
          }
        });
        break;
      default:
        break;
    }
  }
});

const modalAddMovie = document.getElementById('modalAddMovie');
modalAddMovie.addEventListener('hidden.bs.modal', function () {
  let modalTitle = document.querySelector('.modal-title-addMovie');
  modalTitle.classList.remove('pt-2');
  modalTitle.innerText = 'Crear película';
});


//* FAVORITOS
const favoritosAdminPage =()=>{
    const containerFavs = document.getElementById("favorites-list")
    
    function createListaVacia() {
        if(!containerFavs.querySelector('#lista-vacia')){
        let listaVacia = document.createElement('li');
            listaVacia.setAttribute('id', 'lista-vacia')
            listaVacia.classList.add("dropdown-item","pt-0", "d-flex", "align-items-center");
            listaVacia.innerText = `Tu lista está vacía`
            containerFavs.appendChild(listaVacia);
          }
    }
    function getFavsLS() {
        let getFavs;
        if(localStorage.getItem('favs')){
          console.log('GET FAVS 1');
            let dataFavs = JSON.parse(localStorage.getItem('favs'))
            getFavs = dataFavs;
        }else{
          console.log('GET FAVS 2');
            let favs = [];
            JSON.stringify(localStorage.setItem('favs', favs))
            getFavs = favs;
        }
        return getFavs;
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
                <a class="ps-2 pe-1 pe-3 text-wrap text-decoration-none text-light" href="movie-detail.html#${fav.id}">${fav.nombre}</a>
                `;
                containerFavs.appendChild(favorite);
                console.log(document.getElementById(`${fav.id}`))
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
          console.log(index);
          console.log(fav.id);
          if(fav.id == deleteId){
                favs.splice(index,1);
            }
        })
        localStorage.setItem("favs",JSON.stringify(favs));
    }
    document.addEventListener("DOMContentLoaded",renderFavsLS);
    containerFavs.addEventListener("click",deleteFav);
}
favoritosAdminPage()