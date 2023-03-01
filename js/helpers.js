//*NAV
export const crearNav =()=>{
    let navMain = document.createElement('nav');
    navMain.classList.add('navbar-main', 'navbar', 'navbar-dark', 'fixed-top', 'navbar-expand-lg');
    let url = window.location.href;
    console.log(url.includes('main'));
    let urlMain = `${window.location.origin}/main.html`
    navMain.innerHTML = `
            <div class="container " id="nabvar-contain">
            <a class="navbar-brand fw-bold ms-xl-5" href="main.html"
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
                        <li><a class="dropdown-item" href="#Acción">Acción</a>
                        </li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item yatu" >Animación</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Acción">Aventura</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Acción">Bélico Guerra</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Ficción">Ciencia Ficción</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Comedia">Comedia</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Drama">Crimen</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Drama">Drama</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Familia">Familia</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Familia">Fantasía</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Familia">Romance</a></li>
                        <li>
                        <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#Terror">Terror</a></li>
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
    // ${url.includes('main')? `href="#Familia"` : `href="${urlMain}#Familia"`}
    document.querySelector('.yatu').addEventListener('click', ()=>{
        window.location.assign(`${urlMain}#Familia`)
        // setTimeout(() => {
        //     document.documentElement.scrollTop-= 100;
        //     },3000)
    })

}
export const subirScroll =()=>{
    console.log(window.location.href.includes('#Familia'));
    if(window.location.href.includes('#Familia')){
    // document.addEventListener("DOMContentLoaded", ()=>{
        setTimeout(() => {
        document.documentElement.scrollTop-= 100;
            },1000)

    // });

    }
}
export function addUserName() {        
    const user = JSON.parse(localStorage.getItem('user'));
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

//* FOOTER
// footer class 'sticky-bottom'
export const addFooter =()=>{
    let footer = document.createElement('div');
    footer.classList.add('footer-landing')
    footer.innerHTML = `
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
    `
    document.getElementsByTagName('footer')[0].appendChild(footer);

}
addFooter()

export const colorScrollNav =()=>{
    let nav = document.querySelector('.navbar-landing') || document.querySelector('.navbar-main');
    window.addEventListener('scroll', function () {
      if(window.pageYOffset>20){
        nav.classList.add('bg-scroll-nav', 'shadow');
      }else{
        nav.classList.remove('bg-scroll-nav', 'shadow')
      }
    })
}
colorScrollNav()

export function logOut() {
    document.querySelector('.log-out').addEventListener('click', ()=>{
    // localStorage.removeItem('user');
    localStorage.clear()
    document.location.assign(window.location.origin)
    })
}

export const scrollGeneros =()=>{
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
}

//* FAVORITOS
export const listaFavoritos =()=>{
  const containerFavs = document.getElementById("favorites-list")
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

      let containerCategories = document.querySelector('.container-categories'); //! REVISAR que no aplique a todo el container sino a las movies
      containerCategories.addEventListener("click",(e)=>{
    //   console.log('entro al escuchador de eventos del carrusel');
    //   console.log(e.target);
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
}
export const saveFilms =()=>{
    const peliculas = JSON.parse(localStorage.getItem('films'));
    return peliculas
}
//* BUSCADOR
export const buscador =()=>{
  let peliculas = saveFilms()  
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
}

//* REPRODUCIR VIDEO
export const reproducirVideo =(movie)=>{
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
    let btnVideo = document.querySelector('#btn-play-video') || document.querySelector('.button-play-title');
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
    btnVideo.click()
}
// export function redirigir(event){
//     console.log(e.target)
// }
// function hola() {
    // document.querySelector('.animacionCuliau').addEventListener('click', ()=>{
    //     document.querySelector('.lista-generos').click()
    
    // })
// }
