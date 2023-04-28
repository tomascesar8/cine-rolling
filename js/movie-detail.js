import { crearNav, colorScrollNav, buscador, addUserName, logOut, scrollGeneros, saveFilms } from "./helpers.js";
if(localStorage.getItem('user')){
  crearNav()
}
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


const imgDetail =()=>{
  let imgMovieMain = document.querySelector('.img-movie-main');
    imgMovieMain.innerHTML = `
                <div class="container-details col-10 mt-5">                    
                  
                  <div class="titulo-detail text-wrap d-flex">
                    <h2 class="fw-bold mb-lg-3 mb-2 fs-md-1">${movie.nombre} <span class="">(${movie.año})</span></h2>
                  </div>
                
                  <div class="metricas-detail d-flex  flex-row">
                    <div class="puntuacion-detail fw-bold mb-1 me-4"><i class="text-warning fas fa-star"></i> ${movie.puntuacion} IMDb</div>
                    <div class="categoria-detail fst-italic mb-1 me-4">${movie.categoria}</div>                
                    <div class="duracion-detail mb-1 me-4"> ${movie.duracion.includes('Min')? movie.duracion : movie.duracion+' Min'}</div>
                  </div>

                  <div class="detalles-detail my-lg-1 my-sm-1">
                    <div class="genero-detail mb-1"><span class="fw-bold">Genero: </span>${movie.genero}</div>
                    <div class="director-detail mb-1"><span class="fw-bold">Director: </span>${movie.director} </div>
                    <div class="reparto-detail mb-1"><span class="fw-bold">Reparto: </span>${movie.reparto} </div>                
                  </div>

                  <div class="descripcion-detail text-wrap mt-3">${movie.descripcion}</div>
                  
                  <div class="buttons-details align-self-start mt-3 mt-md-4 mb-5">
                    <button id="btn-play-video" role="button" class="button-play-detail">
                      <i class="fas fa-play me-4"></i>
                      Reproducir
                    </button>
                    <button id="btn-add-list" role="button" class="button-add-detail fav-detail">
                        <i class="fas fa-plus-circle me-2 me-sm-3 fs-4 fav-detail-i"></i>
                        Mi lista
                    </button>
                  </div>
                </div>              
                `
    imgMovieMain.style.background = `linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(20, 29, 50) 100% ), url(${movie.imagen})`;
    // let tapa = document.querySelector('.tapa').style.background = `url(${movie.tapa})`
}

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
  let btnPlay = document.querySelector('#btn-play-video');
  btnPlay.addEventListener('click', ()=>{
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

{/* <button id="btn-add-list" role="button" class="button-add-detail">
<i class="fas fa-plus-circle me-2 me-sm-3 fs-4"></i>
Mi lista
</button> */}
{/* <i class="fas fa-check-circle"></i> */}
const listaFavoritos =()=>{
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
      console.log(' GET FAVS LS');
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
      favorite.innerHTML=`
      <div class="me-2 col-md-1 align-self-center">
          <h3 class="mb-1  delete-fav text-danger ml-2 mb-0" role="button">&times</h3>
      </div>
      <a class="ps-2 pe-1 text-wrap text-decoration-none text-light item-fav-list" type="button" href="movie-detail.html#${favInfo.Id}">${favInfo.nombre}</a>
      `;
      containerFavs.appendChild(favorite);
      console.log(favorite);
        // document.querySelector('.item-fav-list').addEventListener('click', ()=>{
        //   console.log('CULIADASO1');
        //   document.querySelector('.item-fav-list').setAttribute('href',`movie-detail.html#${favInfo.id}`)
        //   window.location.reload()
        //   })
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
              <a class="ps-2 pe-1 pe-3 text-wrap text-decoration-none text-light item-fav-list" type="button" href="movie-detail.html#${fav.Id}">${fav.nombre}</a>
              `;
              containerFavs.appendChild(favorite);
              // document.querySelector('.item-fav-list').addEventListener('click', ()=>{
              // console.log('CULIADASO2');

              //   document.querySelector('.item-fav-list').setAttribute('href',`movie-detail.html#${fav.id}`)
              //   window.location.reload()
              //   })
              console.log(document.getElementById(`${fav.id}`))
              console.log(document.querySelector('.fav-detail-i'));
              let containerBtnFav = document.querySelector('.fav-detail')
              if(fav.id == idPelicula){
              document.querySelector('.fav-detail').innerHTML = `<i class="fas fa-check-circle me-2 me-sm-3 fs-4 fav-detail-i"></i> Mi lista`
                }
            //   document.querySelector('.fav-detail').innerHTML = `<i class="fas fa-check-square text-success fav-btn"></i>`
          })
          if(favs.length == 0){
              createListaVacia()
          }
      },100);
  }

  function deleteFav(e){
      console.log("DELETE FAV");
      console.log(e);
      if(e.target.classList.contains("delete-fav")){
        console.log('PRIMER IF');
          e.preventDefault();
          const removedElement = e.target.parentElement.parentElement
          const deleteId= removedElement.id.slice(4);
          removedElement.remove();
          if(deleteId == idPelicula){
             let detailIcon = document.querySelector('.fav-detail-i');
             detailIcon.parentElement.innerHTML = `<i class="fas fa-plus-circle me-2 me-sm-3 fs-4 fav-detail-i"></i> Mi lista`
             detailIcon.remove()
          }
          deleteFavLS(deleteId);
          console.log(deleteId);
          console.log(e.target.parentElement.parentElement.parent)
          if(!containerFavs.querySelector('.element-fav')){
            console.log('PRIMER ELSE IF');
              createListaVacia()
            }
      }else{
          if(!containerFavs.querySelector('#lista-vacia')){     
              console.log('ULTIMO ELSE');
              const removedElement = e.target.parentElement
              const deleteId= removedElement.id.slice(4);
              console.log(deleteId);
              window.location.assign(`${window.location.origin}/movie-detail.html#${deleteId}`)
              // alert('papeee')
              window.location.reload()
          }
      }
  }

  function deleteFavLS(deleteId){
      console.log('DELETE FAV LS');
      console.log(deleteId);
      let favs = getFavsLS();
      favs.forEach((fav,index)=>{
        console.log(index);   //? DE DÓNDE SALE INDEX?
          if(fav.id == deleteId){
            console.log('HOLAAAAAAAAAAAA');
              favs.splice(index,1);
          }
      })
      localStorage.setItem("favs",JSON.stringify(favs));
  }
  document.addEventListener("DOMContentLoaded",renderFavsLS);

      let btnAddFav = document.querySelector('.button-add-detail');
      btnAddFav.addEventListener("click",(e)=>{
        if(e.target.classList.contains("fav-detail")){
            console.log('entro al fav-btn');
            console.log(e.target);
            let idMovie= window.location.hash.slice(1);
            let favInfo = e.target.querySelector('i')
            if(favInfo.classList.contains("fa-check-circle")){
                containerFavs.querySelector(`.fav-${idMovie}`).remove()
                deleteFavLS(idMovie)
                favInfo.parentElement.innerHTML = `<i class="fas fa-plus-circle me-2 me-sm-3 fs-4 fav-detail-i"></i> Mi lista`
                favInfo.remove()
                if(!containerFavs.querySelector('.element-fav')){
                    createListaVacia()
                }
            }else{
                console.log('CHECKEA');
                    favInfo.parentElement.innerHTML = `<i class="fas fa-check-circle me-2 me-sm-3 fs-4 fav-detail-i"></i> Mi lista`
                favInfo= movie;
                addFav(favInfo)
                saveFavLS(favInfo)
                }
        } 
  })
  containerFavs.addEventListener("click",deleteFav);
}
if(window.location.href.includes('detail')){
  imgDetail()
  reproducirVideo(movie)
  listaFavoritos()
}