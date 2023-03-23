// import { addFooter, colorScrollNav } from "./footer.js";

//*SIMULAMOS BASE DE DATOS:
class User{
  constructor(name, email, phoneNumber, gender, pass, admin, favs){
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.pass = pass;
    this.admin = admin;
    this.favs = favs;
  }
};
let users = [
  new User('Tomás César', 'tomas@hotmail.com', '351-1234567', 'Masculino', '123456', true, []),
  new User('Nicolás César', 'nicolas@hotmail.com', '351-2345678',  'Masculino', '123456', false, []),
  new User('Celeste César', 'celeste@hotmail.com', '351-3456789',  'Femenino', '123456', false, []),
  new User('Gonzalo César', 'gonzalo@hotmail.com', '351-4567890',  'Masculino', '123456', false, []),
  new User('Viviana Bacha', 'viviana@hotmail.com', '351-5678901',  'Femenino', '123456', true, []),
];

if(!localStorage.getItem('users')){
  let usersJSON = JSON.stringify(users);
  localStorage.setItem('users', usersJSON);
};

let filmsLS = localStorage.getItem('films')
let dataFilms = JSON.parse(filmsLS);
let usersLocalStorage = localStorage.getItem('users'); 
let dataUsersLS = JSON.parse(usersLocalStorage);

function loginCheck(event){
  event.preventDefault();
  let email = document.querySelector('#login-email').value;
  let pass = document.querySelector('#login-pass').value;
  const userLoged = dataUsersLS.find(user=>user.email === email);
  console.log(email);
  if(userLoged){
    console.log('LCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
    const passUserLoged = userLoged.pass === pass;
    console.log(pass);
    if (passUserLoged){
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    // function enviarEmail(){  
    //   Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "tomascesar1993@gmail.com",
    //     Password : "D19478D06661B455EB35D0C3E6D2BCEC7099",
    //     To : 'tomcesar@hotmail.com',
    //     From : "tomascesar1993@gmail.com",
    //     Subject : "Bienveni3 enaukj",
    //     Body : `Hola CULIADASO te damos la bienvenida a CineRolling! Tu cuenta ha sido creada correctamente. Ahora solo queda a disfrutar!`
    //   }).then(message => alert(message));

    //   localStorage.setItem('user', JSON.stringify(newUser));
    //   window.location.assign(`${window.location.origin}/main.html`);
    // }
    // enviarEmail()


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

function capitalizeWords(string) {
  // dividir el string en un array de palabras
  let words = string.split(' ');

  // iterar sobre cada palabra y aplicar mayúscula a la primera letra
  words = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // unir las palabras en un string
  return words.join(' ');
}

function prueba() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 10000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    showCloseButton: true,
    background: '#141d32',
    color: 'white',
    width: '600px',
    heightAuto: false,
    icon: 'success',
    title: `<h5 class="text-warning">Tus datos se cargaron correctamente!</h5> <p>Te enviamos un email para finalizar tu registro.<br> No te olvides revisar el Spam o correo no deseado.</h4>`
  })
}


function register(event) {
  event.preventDefault()
  let name = document.getElementById('register-name').value;
  let email = document.getElementById('register-email').value;
  let phoneNumber = document.getElementById('register-phone').value;
  let gender = document.getElementById('register-gender').value;
  let newUserPass = document.getElementById('register-pass').value;
  // let confirmPass = document.getElementById('pass-repeat').value

  // let nameOk = /^[A-Z\s]+$/i.test(name.trim());
  // let emailOk = /([a-z]\w+@[a-z]{2,5})/.test(email);
  // let newUserPassOk = /^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}$/.test(newUserPass); 
  // let confirmPassOk = /^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}$/.test(confirmPass);


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
  let newUser = new User(name, email, phoneNumber, gender, newUserPass, false, []);
  let data = localStorage.getItem('users');
  let usersParseados = JSON.parse(data);
  usersParseados.push(newUser);
  data = JSON.stringify(usersParseados);
  localStorage.setItem('users', data);

  let suscribe = `
    <html>
      <style>
        body: Verdana, sans-serif;}
      </style>
    </head>
    <body style="margin:0;padding: 0;">
      <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
          <td align="center" style="padding:0">
            <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
              <tr>
                <td style="padding:40px 35px;">
                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                    <tr>
                      <td style="padding: 0 0 50px 0;">
                        <h1 style="color:"gainsboro";font-size: large; font-weight:600; margin: 20px 0;">
                          Bienvenid${newUser.gender == "Masculino"? 'o' : newUser.gender == "Femenino"? 'a' : 'x'} a <span style="font-weight:700; color:rgb(15, 59, 95)">CineRolling+</span> ! 
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0;">
                        <p style="margin: 0 0 20px 0; line-height: 1.2em;">
                          Hola <span style="font-weight:700">${capitalizeWords(newUser.name)}</span>, gracias por unirte a nuestra plataforma de video!
                          <br>
                          Para confirmar tu cuenta, simplemente presiona el boton de abajo:
                        </p>
                      </td>
                        <tr><td style="background-color:rgb(15, 59, 95); padding: 1px; "></td></tr>
                    </tr>
                    <tr>
                      <td align="center" style="padding:60px 0 0 0;">
                        <a href="#" type="button" style="background-color:#96cae7;text-decoration:none; color:#ffffff; padding: 10px; border-radius:20px">
                          <button type="button" style="background-color:#96cae7;text-decoration:none; color:#ffffff; padding: 10px; border-radius:20px">
                            Verifica tu cuenta
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="padding: 40px 0 0 0;">
                        <p style="font-size: small; text-align:center;margin: 0 0 20px 0; "> 
                          Si el botón no funciona, hace click en el siguiente enlace: <a href="#">Reintentar validación</a> 
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background:#537aa3;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px">
                <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                <tr>
                  <td style="padding:0;width:42%;" align="left">
                    <h4 style="color:#96cae7">CineRolling+</h4>
                  </td>
                  <td style="padding:0;width:58%;" align="left">
                    <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td align="center"style="padding:0 0 0 16px;width:36px;">
                          <a href="http://www.twitter.com/">
                            <img src="https://i.ibb.co/2MG0xbd/gorjeo.png" alt="logo-twitter" width="38" style="height:auto;display:block;border:0;" /> 
                          </a>
                        </td>
                        <td align="center"style="padding:0 0 0 16px;width:36px;">
                          <a href="https://github.com/tomascesar8/cine-rolling">
                            <img src="https://i.ibb.co/48WGS5q/github-7.png" alt="logo-github" width="36" style="height:auto;display:block;border:0;" /> 
                          </a>
                        </td>
                        <td align="center" style="padding:0 0 0 10px;width:38px;">
                          <a href="http://www.facebook.com/">
                            <img src="https://i.ibb.co/7zMxkKG/logo-de-facebook.png" alt="logo-Facebook" width="38" style="height:auto;display:block;border:0;" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  <td style="padding-right:25px; align:right">
                    <a href="#" style="text-decoration:none; color:#96cae7;"><h4>Ayuda</h4></a>
                  </td>
                  </td>
                </tr>
              </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "tomascesar1993@gmail.com",
      Password : "D19478D06661B455EB35D0C3E6D2BCEC7099",
      To : 'tomcesar@hotmail.com',
      From : "tomascesar1993@gmail.com",
      Subject : `Último paso para confirmar tu nuevo usuario en CineRolling+`,
      Body : suscribe,
    }).then(message => confirm(message));
    
  async function confirm(message) {
      let response = await message;
      console.log('paperrrr');
      if(response === "OK"){ 
        console.log('Llego a if response async')
          // alert('Llego a if response async')
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 10000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            background: '#6b986b',
            // color: ,
            width: '700px',
            heightAuto: false,
            icon: 'success',
            title: `Registro exitoso! Revisá tu casilla de mensajes para finalizar la confirmación.`
          })
      }else{
          let error = document.createElement('h5');
          error.innerText = 'Ha ocurrido un problema, vuelve a intentarlo.' ;
          console.log('Error en else async');
          alert('Error en else async')
          alert(error)
          // let father = document.querySelector('.register_form');
          // father.appendChild(error);
          // fullpage()
      }
  }
}

const addLandingMain =()=>{
  let landingMain = document.createElement('div');
  landingMain.classList.add('container-fluid', 'text-light');
  landingMain.setAttribute('id', 'container-landing');
  landingMain.innerHTML = `
    <div class="row">
      <div class="col col-md-6 mb-3" id="titulo-landing">
        <div class="container-landing-title animate__animated animate__fadeInDown">
        <h1 class="slide-left m-0 p-0 h1-1"> HISTORIAS ÚNICAS. </h1> <br />
        <h1 class="slide-left m-0 p-0 h1-1"> ESTRELLAS ICÓNICAS. </h1> <br />
        <h1 class="slide-left m-0 p-0 h1-1">
          UNA MONTAÑA DE <br /> <span class="text-warning"> ENTRETENIMIENTO.</span>
        </h1>
        </div>
        <h3 id="main-subtitle" class="fs-2 fw-bold text-dark  mt-2 mb-1">Películas y series ilimitadas</h3>
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
    `
  document.getElementsByTagName('main')[0].appendChild(landingMain);
}
addLandingMain()

const addPreguntasFrecuentes =()=>{
  let preguntasFrecuentes = document.createElement('div');
  preguntasFrecuentes.classList.add('container-preguntas','container', 'col', 'col-md-7', 'd-flex', 'flex-column', 'text-center', 'justify-content-center', 'pb-5')
  preguntasFrecuentes.setAttribute('data-aos' , 'fade-up')
  preguntasFrecuentes.setAttribute('data-aos-duration' , '3000')
  preguntasFrecuentes.innerHTML = `
    <div class="preguntas-frecuentes text-white text-center text-sm-start fw-bold fs-1 mt-4 mb-4  mb-lg-4">
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
}
addPreguntasFrecuentes()

const rubberBandBtnSus =()=>{
  let buttonSuscript = document.querySelector('.button-landing-suscript');
  setInterval(() => {
    buttonSuscript.classList.add('animate__rubberBand');
  }, 5000);  
  setInterval(() => {
    buttonSuscript.classList.remove('animate__rubberBand');
  }, 6000);
}
rubberBandBtnSus()