// function enviarMail(){
//     Email.send({
//      Host : "smtp.elasticemail.com",
//      Username : "tomascesar1993@gmail.com",
//      Password : "D19478D06661B455EB35D0C3E6D2BCEC7099",
//      To : 'tomcesar@hotmail.com',
//      From : "tomascesar1993@gmail.com",
//      Subject : "Bienveni3 enaukj",
//      Body : `Hola CULEAO te damos la bienvenida a CineRolling+! Tu cuenta ha sido creada correctamente. Ahora solo queda a disfrutar!`
//    }).then(message => alert(message)
//    );
// }
function recoveryPass() {
    let emailUserRecovery = document.querySelector('#email-recovery').value;
    let users = JSON.parse(localStorage.getItem('users'))
    let userRecovery = users.find(user=>user.email = emailUserRecovery)
    console.log();
}


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
                    <img width="310px" height="auto"src="https://i.ibb.co/whQXZxY/logo-cinerolling.jpg" alt="logo-cinerolling">
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 0 0 50px 0;">
                    <h1 style="color:"gainsboro";font-size: large; font-weight:600; margin: 20px 0;">
                      Recuperá tu clave <span style="font-weight:700; color:rgb(15, 59, 95)">CineRolling+</span> ! 
                    </h1>
                  </td>
                </tr>
                <tr>
                <br/> <br>
                Para proceder con la recuperacion presiona el boton que esta debajo, y sigue las instrucciones.  
                 <br /> <br> Recorda ModoGamer nunca va a solicitarte esta u otra informacion sobre tu cuenta.<br />
                
                  <td align="center" style="padding:0;">
                    <p style="margin: 0 0 20px 0; line-height: 1.2em;">
                      Hola <span style="font-weight:700">${capitalizeWords(userRecovery.name)}</span>, 
                      recibimos una solicitud para recuperar tu contraseña; si no lo hiciste desestima este e-mail.
                    </p>
                  </td>
                    <tr><td style="background-color:#364852; padding: 1px; "></td></tr>
                </tr>
                <tr>
                  <td align="center" style="padding:40px 0 0 0;">                  
                    <p>Tu clave registrada es: <span style="background-color:#96cae7; color:#ffffff; padding: 10px; border-radius:20px">${userRecovery.pass}</span></p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 40px 0 0 0;">
                    <p style="font-size: small; text-align:center;margin: 0 0 20px 0; "> 
                      Si deseas modificar tu clave, hace click en el siguiente enlace: <a href="#">Cambiar contraseña</a> 
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
`
{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/whQXZxY/logo-cinerolling.jpg" alt="logo-cinerolling" border="0"></a> */}


