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
favoritos()