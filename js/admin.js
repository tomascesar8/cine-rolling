import { crearNav, colorScrollNav, buscador, addUserName, logOut, scrollGeneros, saveFilms } from "./helpers.js";
crearNav()
colorScrollNav()
buscador()
addUserName()
logOut()
scrollGeneros()

let peliculas = saveFilms()
console.log(peliculas);
peliculas.forEach( movie=> {
    let row = document.createElement('tr');
    row.id = movie.id;
    row.classList.add('d-flex', 'flex-wrap', 'text-center', 'align-middle')
    row.innerHTML = `
    <th class="align-self-center col-3 col-sm-2 text-sm-start ps-3" scope="row">${movie.nombre} <span class="fst-italic table-year">(${movie.año})</span> </th>
    <td class="align-self-center col-3 col-sm-2 text-md-nowrap">${movie.director} </td>
    <td class="align-self-center col-4 col-sm-2 text-md-nowrap">${movie.genero} </td>
    <td class="align-self-center col-1">${movie.categoria} </td>
    <td class="align-self-center col-12 col-sm-5 d-flex justify-content-evenly flex-nowrap">
        <div class="m-1">
            <button class="border ${movie.publicada? 'bg-success' : 'bg-secondary'} rounded-pill border-dark">
                <i class="p-2 fas fa-check"></i>
            </button>
            <p>Publicado</p>
        </div> 
        <div class="m-1">
            <button class="bg-warning border rounded-pill border-dark">
                <i class="p-2 fas fa-medal"></i>
            </button>
            <p>Destacado</p>
        </div> 
        <div class="m-1">
            <button class="bg-primary border rounded-pill border-dark">
                <i class="p-2 far fa-edit"></i>
            </button>
            <p>Editar</p>
        </div> 
        <div class="m-1">
            <button class="border bg-danger rounded-pill border-dark">
                <i class="p-2 fas fa-trash-alt"></i>
            </button>
            <p>Borrar</p>
        </div> 
    </td>
    `    
    let bodyTable = document.querySelector('#body-table')
    bodyTable.appendChild(row)
});
{/* <td class="col-3 col-sm-1  text-center">${movie.publicada? 'Si' : 'No'}</td> */}

const textarea = document.querySelector('.desc-add-movie');
textarea.selectionStart = 0;
textarea.selectionEnd = 0;