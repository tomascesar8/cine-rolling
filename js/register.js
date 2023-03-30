function register(event) {
    event.preventDefault()
    let name = document.getElementById('register-name');
    let email = document.getElementById('register-email');
    let phoneNumber = document.getElementById('register-phone');
    let gender = document.getElementById('register-gender');
    let newUserPass = document.getElementById('register-pass');
    let confirmPass = document.getElementById('pass-repeat');
      
    let nameOk = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]{3,25}$/.test(name.value.trim());
    let emailOk = /^[^\s@]+@[^\s@]+.[^\s@]{1,4}$/.test(email.value);
    let phoneOk = /^(\(\d{4}\)|\d{4})?[-\s]?\d{3}[-\s]?\d{4,}$/ .test(phoneNumber.value);
    let newUserPassOk = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(newUserPass.value); 
    let confirmPassOk = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(confirmPass.value);
    let okValid = true;
  
    function invalidInput(element) {
      setTimeout(()=>{
        element.classList.add('is-invalid')
      },0)
      element.addEventListener('click', ()=>{
        if(document.activeElement === element){
          element.classList.remove('is-invalid')
        }
      })
      setTimeout(()=>{
        element.classList.remove('is-invalid')
      },5000)
    }
    switch (false) {
      case nameOk:
          okValid = false;
          invalidInput(name)
      break;
      case emailOk:
          okValid = false;
          invalidInput(email)
      break;
      case phoneOk:
          okValid = false;
          invalidInput(phoneNumber)
      break;
      case newUserPassOk:
          okValid = false;
          invalidInput(newUserPass)
      break;
      case confirmPassOk:
          okValid = false;
          invalidInput(confirmPassOk)
      break;
      case confirmPass.value == newUserPass.value:
          okValid = false;
          invalidInput(confirmPass)
      break;
      default:
    }
  
    if(okValid){
      let newUser = new User(name.value, email.value, phoneNumber.value, gender.value, newUserPass.value, false, []);
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
                    <td align="center" style="padding:40px 35px;">
                      <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                          <td align="center" style="padding:30px 0px;">
                            <img style="border-radius: 2rem" width="310px" height="auto"src="https://i.ibb.co/whQXZxY/logo-cinerolling.jpg" alt="logo-cinerolling">
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding: 0 0 50px 0;">
                            <h1 style="color:"gainsboro";font-size: large; font-weight:600; margin: 20px 0;">
                              Bienvenid${newUser.gender == "Masculino"? 'o' : newUser.gender == "Femenino"? 'a' : 'x'} a <span style="font-weight:700; color:rgb(15, 59, 95)">CineRolling+</span> ! 
                            </h1>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding:0;">
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
                              <button type="button" style="background-color:#96cae7;text-decoration:none; border: none; color:#ffffff; padding: 10px; border-radius:20px">
                                Verificar cuenta
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
        Subject : `Email de verificación de cuenta CineRolling+`,
        Body : suscribe,
      }).then(message => confirm(message));
        
      async function confirm(message) {
          let response = await message;
          if(response === "OK"){ 
            document.querySelector('#btn-close-register').click()
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
              background: '#0A1A2A',
              color: 'white',
              width: '600px',
              heightAuto: false,
              icon: 'success',
              title: `<h5 class="text-warning">Tus datos se cargaron correctamente!</h5> <p>Te enviamos un email para finalizar tu registro.<br> No te olvides revisar el Spam o correo no deseado.</h4>`
            })
          }else{
              let error = document.createElement('h5');
              error.innerText = 'Ha ocurrido un problema, vuelve a intentarlo.' ;
          }
      }
    }
  }