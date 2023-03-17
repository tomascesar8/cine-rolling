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
    let idSelected;
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
                <button class="btn-admin-actions border bg-danger rounded-pill border-dark">
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
        this.categoria = categoria;
        this.año = año;
        this.tapa = tapa;
        this.imagen = imagen;
        this.video = video;
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
    // peliculas.push(newMovie)
    console.log(Number(idAdd.value));
    if(peliculas.find(pelicula => pelicula.id == idAdd.value)){
        peliculas.splice(Number(idAdd.value)-1, idAdd.value.length, newMovie)
    }else{
        peliculas.push(newMovie)
    }
    console.log(peliculas);
    sendLS('films', peliculas)
})

// let btnMoviePublicada = document.querySelector('.container-admin-actions');
containerTable.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('btn-admin-actions') || (!e.target.querySelector('button') && e.target.querySelector('i'))){
        console.log('hola');
        console.log(e.target);
        console.log(e.target.closest('tr').id);
        let movieRow = e.target.closest('.btn-admin-actions')
        let idMovie = movieRow.closest('tr').id;
        let movieEdit = peliculas.find(movie=> movie.id == idMovie)
        switch (true) {
            case movieRow.classList.contains('btn-publicar'):
                if(movieRow.classList.contains('bg-success')){
                    movieRow.classList.remove('bg-success')
                    movieRow.classList.add('bg-secondary')
                    movieEdit.publicada = false;
                    sendLS('films', peliculas)
                    console.log('LCDSM');
                    console.log(movieEdit);
                }else{
                    movieRow.classList.remove('bg-secondary')
                    movieRow.classList.add('bg-success')
                    movieEdit.publicada = true;
                    sendLS('films', peliculas)
                }
            break;
            case movieRow.classList.contains('btn-destacar'):
                if(movieRow.classList.contains('bg-warning')){
                    movieRow.classList.remove('bg-warning')
                    movieRow.classList.add('bg-secondary')
                    movieEdit.destacada = false;
                    sendLS('films', peliculas)
                    console.log('LCDSM');
                    console.log(movieEdit);
                }else{
                    movieRow.classList.remove('bg-secondary')
                    movieRow.classList.add('bg-warning')
                    movieEdit.destacada = true;
                    sendLS('films', peliculas)
                }
            break;
            case movieRow.classList.contains('btn-editar'):
                idAdd.value = idMovie;
                nameAdd.value = movieEdit.nombre;
                descAdd.value = movieEdit.descripcion;
                let optionSelected = document.querySelector('.option-selected');
                if(movieEdit.genero.includes(',')){
                    optionSelected.innerHTML = `${movieEdit.genero}`
                }else{
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
                
                // data-bs-toggle="modal" data-bs-target="#modalAddMovie"

            break;    
            default:
            break;

        }
    }

})