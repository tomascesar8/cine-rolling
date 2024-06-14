const favoritos =()=>{
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
            let dataFavs = JSON.parse(localStorage.getItem('favs'))
            getFavs = dataFavs;
        }else{
            let favs = [];
            JSON.stringify(localStorage.setItem('favs', favs))
            getFavs = favs;
        }
        return getFavs;
    }  
    function renderFavsLS(){
        setTimeout(() => {
            let favs = getFavsLS();
            favs.forEach((fav)=>{
                const favorite=document.createElement("li")
                favorite.id=`fav-${fav.id}`
                favorite.classList.add(`fav-${fav.id}`,"dropdown-item","pt-0", "d-flex", "align-items-center", "element-fav");
                favorite.innerHTML=`
                <div class="me-2 col-md-1 align-self-center">
                    <h3 class="mb-1 delete-fav text-danger ml-2 mb-0" role="button">&times</h3>
                </div>
                <a class="ps-2 pe-1 pe-3 text-wrap text-decoration-none text-light" href="movie-detail.html#${fav.id}">${fav.nombre}</a>
                `;
                containerFavs.appendChild(favorite);
            })
            if(favs.length == 0){
                createListaVacia()
            }
        },100);
    }
    function deleteFav(e){
        if(e.target.classList.contains("delete-fav")){
            e.preventDefault();
            const removedElement = e.target.parentElement.parentElement
            const deleteId= removedElement.id.slice(4);
            removedElement.remove();
            deleteFavLS(deleteId);
        }
        if(!containerFavs.querySelector('.element-fav')){
            createListaVacia()
        }
    }
    function deleteFavLS(deleteId){
        let favs = getFavsLS();
        favs.forEach((fav,index)=>{
          if(fav.id == deleteId){
                favs.splice(index,1);
            }
        })
        localStorage.setItem("favs",JSON.stringify(favs));
    }
    document.addEventListener("DOMContentLoaded",renderFavsLS);
    containerFavs.addEventListener("click",deleteFav);
}
favoritos()