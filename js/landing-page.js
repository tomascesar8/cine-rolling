//SIMULAMOS BASE DE DATOS:
class User{
  constructor(name, email, phoneNumber, gender, pass, admin){
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.pass = pass;
    this.admin = admin;
  }
};
let users = [
  new User('Tomás César', 'tomas@hotmail.com', '351-1234567', 'Masculino', '123456', true),
  new User('Nicolás César', 'nicolas@hotmail.com', '351-2345678',  'Masculino', '234567', false),
  new User('Celeste César', 'celeste@hotmail.com', '351-3456789',  'Femenino', '345678', false),
  new User('Gonzalo César', 'gonzalo@hotmail.com', '351-4567890',  'Masculino', '456789', false),
  new User('Viviana Bacha', 'viviana@hotmail.com', '351-5678901',  'Femenino', '567890', true),
];

if(!localStorage.getItem('users')){
  let usersJSON = JSON.stringify(users);
  localStorage.setItem('users', usersJSON);
};
let usersLocalStorage = localStorage.getItem('users'); 
console.log(usersLocalStorage);
let dataUsersLS = JSON.parse(usersLocalStorage);
console.log(dataUsersLS);

function loginCheck(event){
  event.preventDefault();
  let email = document.querySelector('#login-email').value;
  let pass = document.querySelector('#login-pass').value;
  const userLoged = dataUsersLS.find(user=>user.email === email);
  console.log(email);
  if(userLoged){
    console.log('email verificado');
    const passUserLoged = userLoged.pass === pass;
    console.log(pass);
    if (passUserLoged){
      localStorage.setItem('user', JSON.stringify(userLoged));
      window.location.assign(`${window.location.origin}/main.html`);
      console.log('Iniciaste sesión');
    }else{
      let invalidPass = document.createElement('div');
      invalidPass.innerText = '*Contraseña incorrecta'
      invalidPass.classList.add('alert', 'alert-danger', 'fw-bold', 'text-secondary', 'p-2', 'w-fluid', 'mt-2');
      let parentElement = document.getElementById('invalid-data');
      parentElement.append(invalidPass);
      console.log('Contraseña incorrecta');
      setTimeout(() => {parentElement.removeChild(invalidPass)}, 5000);            
    }
  }else{
    let invalidEmail = document.createElement('div');
    invalidEmail.innerText = '*El usuario no existe'
    invalidEmail.classList.add('alert', 'alert-danger', 'fw-bold', 'text-secondary', 'p-2', 'w-fluid', 'mt-2');
    let parentElement = document.getElementById('invalid-data');
    parentElement.append(invalidEmail);
    console.log('El email no se corresponde con ningún usuario');
    setTimeout(() => {parentElement.removeChild(invalidEmail)}, 5000);
  }
};

function register() {
  let name = document.getElementById('register-name').value;
  let email = document.getElementById('register-email').value;
  let phoneNumber = document.getElementById('register-phone').value;
  let gender = document.getElementById('register-gender').value;
  let newUserPass = document.getElementById('register-pass').value;
  let confirmPass = document.getElementById('pass-repeat').value

  let nameOk = /^[A-Z\s]+$/i.test(name.trim());
  let emailOk = /([a-z]\w+@[a-z]{2,5})/.test(email);
  let newUserPassOk = /^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}$/.test(newUserPass); 
  let confirmPassOk = /^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}$/.test(confirmPass);
  // switch (false) {
  //   case nameOk:
  //       alert('Nombre Incorrecto');
  //   break;
  //   case emailOk:
  //       alert('Email Incorrecto');
  //   break;
  //   case newUserPassOk:
  //       alert('Contraseña Incorrecta');
  //   break;
  //   case confirmPassOk === newUserPassOk:
  //       alert('Validación de contraseña incorrecta');
  //   default:
        let newUser = new User(name, email, phoneNumber, gender, newUserPass)
        console.log(newUser);
        let data = localStorage.getItem('users');
        let usersParseados = JSON.parse(data);
        usersParseados.push(newUser);
        data = JSON.stringify(usersParseados);
        localStorage.setItem('users', data);
  // }
}

let navbar = document.createElement('nav');
navbar.classList.add('navbar-landing', 'navbar', 'navbar-dark', 'fixed-top')
navbar.innerHTML = `
<div class="container ms-lg-0 ps-lg-5 ps-sm-0">
  <a class="navbar-element navbar-brand fw-bold ms-xl-5" href="#"
    >CineRolling+</a
  >
  <div class="buttons-landing-nav">
    <button
      class="navbar-element register-button-navbar fw-bold btn btn-warning border border-0"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Registro
    </button>
    <button
      class="login-nav-button navbar-element btn text-white border border-0"
      type="button"
      data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
    >
      Iniciar sesion
    </button>
  </div>
</div>
`
document.getElementById('header-landing').appendChild(navbar);



let main = document.createElement('main');
main.innerHTML = `
<div class="container-fluid text-light" id="container-landing">
 <div class="row">
  <div class="col col-md-6 mb-3" id="titulo-landing">
    <div class="container-landing-title animate__animated animate__fadeInDown">
    <h1 class="slide-left m-0 p-0 h1-1"> HISTORIAS ÚNICAS. </h1> <br />
    <h1 class="slide-left m-0 p-0 h1-1"> ESTRELLAS ICÓNICAS. </h1> <br />
    <h1 class="slide-left m-0 p-0 h1-1">
      UNA MONTAÑA DE <br /> <span class="text-warning"> ENTRETENIMIENTO.</span>
    </h1>
    </div>
    <h3 class="fs-2 fw-bold text-dark  mt-2 mb-1">Películas y series ilimitadas</h3>
    <p class="text-landing me-5 col-11 col-sm-8 col-md-10 fs-6">
      No pierdas más tiempo buscando por internet o esperando a que se
      transmitan tus series y películas favoritas en la televisión.
      ¡Disfruta de ellas en CineRolling y aprovecha al máximo tu tiempo
      libre!
    </p>
    <div class="buttons-landing-main col-10">
      <button
        class="button-landing-suscript register-button btn btn-secondary mb-2 me-2 animate__animated"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <h6>SUSCRÍBETE A CINEROLLING+</h6>
      </button>
      <button
        class="landing-ingreso-btn btn btn-secondary text-light mb-2"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <h6>YA TENGO CINEROLLING+</h6>
      </button>
    </div>
  </div>
 </div>
</div>
`
document.getElementsByTagName('main')[0].appendChild(main);


let preguntasFrecuentes = document.createElement('div');
preguntasFrecuentes.classList.add('container-preguntas','container', 'col', 'col-md-7', 'd-flex', 'flex-column', 'text-center', 'justify-content-center', 'pb-5')
preguntasFrecuentes.innerHTML = `
<div class="preguntas-frecuentes text-white text-center text-sm-start fw-bold fs-1 mt-4 mb-5 mb-lg-4">
  Preguntas frecuentes
</div>
<div class="w-100 d-flex flex-column accordion" id="accordionExample">
  <div class="accordion-item fs-6 bg-secondary bg-secondary">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button text-light fw-bold fs-5 bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Qué es CineRolling+?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        CineRolling+ es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
        <br><br>
        Todo lo que quieras ver, sin límites ni comerciales. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
      </div>
    </div>
  </div>
  <div class="accordion-item fs-6 bg-secondary">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button text-light fw-bold fs-5 bg-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ¿Desde qué dispositivos puede utilizarse?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Disfruta donde quieras, cuando quieras.</strong> Inicia sesión en tu cuenta para ver contenido al instante a través de tu computadora personal o en cualquier dispositivo con conexión a internet, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos. 
      </div>
    </div>
  </div>
  <div class="accordion-item fs-6 bg-secondary">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button text-light fw-bold fs-5 bg-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ¿Qué puedo ver en CineRolling+?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        CineRolling+ tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.
      </div>
    </div>
  </div>
</div>
`
document.getElementsByTagName('main')[0].appendChild(preguntasFrecuentes);

let nav = document.querySelector('.navbar-landing');
window.addEventListener('scroll', function () {
  if(window.pageYOffset>20){
    nav.classList.add('bg-scroll-nav', 'shadow');
  }else{
    nav.classList.remove('bg-scroll-nav', 'shadow')
  }
})

let buttonSuscript = document.querySelector('.button-landing-suscript');
setInterval(() => {
  buttonSuscript.classList.add('animate__rubberBand');
}, 5000);  
setInterval(() => {
  buttonSuscript.classList.remove('animate__rubberBand');
}, 6000);