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
  new User('Nicolás César', 'nicolas@hotmail.com', '351-2345678',  'Masculino', '123456', false),
  new User('Celeste César', 'celeste@hotmail.com', '351-3456789',  'Femenino', '123456', false),
  new User('Gonzalo César', 'gonzalo@hotmail.com', '351-4567890',  'Masculino', '123456', false),
  new User('Viviana Bacha', 'viviana@hotmail.com', '351-5678901',  'Femenino', '123456', true),
];

let peliculas = [
  {
    "id": 1,
    "nombre": "El sexto sentido",
    "descripcion": "El doctor Malcom Crowe es un conocido psicólogo infantil de Philadelphia que vive obsesionado por el doloroso recuerdo de un joven paciente desequilibrado al que fue incapaz de ayudar. Cuando conoce a Cole Sear, un aterrorizado y confuso niño de ocho años que necesita tratamiento, ve que se le presenta la oportunidad de redimirse haciendo todo lo posible por ayudarlo. Sin embargo, el doctor Crowe no está preparado para conocer la terrible verdad acerca del don sobrenatural de su paciente: recibe visitas no deseadas de espíritus atormentados",
    "director": "M. Night Shyamalan",
    "genero": "Drama",
    "categoria": "+13",
    "publicada": true,
    "destacada": false,
    "año": "1999",
    "tapa": "https://www.themoviedb.org/t/p/w1280/vR8XCfaA2G3QdZmghuaXO5GdEYC.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/6TjllWT3cGrPFyqDXurVZ3L8bBi.jpg",
    "video": "https://www.youtube.com/embed/cqJFb5ggwjk"
  },
  {
    "id": 2,
    "nombre": "Pulp Fiction",
    "descripcion": "Jules y Vincent, dos asesinos a sueldo con no demasiadas luces, trabajan para el gángster Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su atractiva mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra . Su misión: recuperar un misterioso maletín",
    "director": "Tarantino",
    "genero": "Acción",
    "categoria": "+18",
    "publicada": false,
    "destacada": true,
    "año": "1994",
    "tapa": "https://www.themoviedb.org/t/p/w1280/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/tamCUHl16mptimLh1ZwJ1XH6QOr.jpg",
    "video": "https://www.youtube.com/embed/tGpTpVyI_OQ"
  },
  {
    "id": 3,
    "nombre": "Todo Sobre Mi Madre",
    "descripcion": "Madrid. Manuela, una madre soltera, ve morir a su hijo el día en que cumple 17 años, por echarse a correr para conseguir el autógrafo de Huma Rojo, su actriz favorita. Destrozada, Manuela viaja entonces a Barcelona en busca del padre del chico",
    "director": "Almodobar",
    "genero": "Drama",
    "categoria": "+18",
    "publicada": false,
    "destacada": false,
    "año": "1999",
    "tapa": "https://www.themoviedb.org/t/p/w1280/zmghiLIx11UZscUF3axGAUZ22Cn.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/u2CvJwAWDNk9w63gbOifmqd4W9r.jpg",
    "video": "https://www.youtube.com/embed/jzMRQQmHBq4"
  },
  {
    "id": 4,
    "nombre": "Pacto de fuga",
    "descripcion": "La noche del 29 de enero de 1990, poco antes de iniciarse la reconstrucción democrática en Chile, medio centenar de presos políticos se fugaron de la cárcel pública de Santiago por un túnel que 24 militantes del Frente Patriótico Manuel Rodríguez (FPMR) habían excavado durante 18 meses, 80 metros de longitud con herramientas tan rudimentarias como cucharas, tenedores y un solo destornillador; escondiendo 55 toneladas de tierra dentro del centro penitenciario",
    "director": "David Albala",
    "genero": "Accion",
    "categoria": "+18",
    "publicada": true,
    "destacada": false,
    "año": "2020",
    "tapa": "https://www.themoviedb.org/t/p/w1280/ziao1KWNkw4X5qL7rWCSJ6lyjX9.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/y1j02Kchix0fULJCrPZSzzR2qg9.jpg",
    "video": "https://www.youtube.com/embed/qPx074pFbW8"
  },
  {
    "id": 5,
    "nombre": "Raya y el último dragón",
    "descripcion": "Raya, una niña de gran espíritu aventurero, se embarca en la búsqueda del último dragón del mundo con el objetivo de devolver el equilibrio a Kumandra, un lejano y recóndito territorio habitado por una civilización milenaria.",
    "director": "Don Hall",
    "genero": "Animación, Familia, Fantasía",
    "categoria": "ATP",
    "publicada": true,
    "destacada": true,
    "año": "2021",
    "tapa": "https://www.themoviedb.org/t/p/w1280/67ZrxjUEXPObtc2D5BDAjsXrnnR.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/79AoH5WVm4cWDZ20NGPhahLxNDX.jpg",
    "video": "https://www.youtube.com/watch?v=R3AECE35Anw&t=3s&ab_channel=DisneyEspa%C3%B1a"
  },
  {
    "nombre": "Up",
    "descripcion": "Tras atar miles de globos a su casa, Carl Fredricksen, un vendedor de globos jubilado, se embarca en el mundo de los sueños de la infancia. Pero sin que Carl lo sepa, Russell, un explorador de 8 años, se encuentra en el lugar equivocado en el momento equivocado: el porche delantero de la casa. El dúo más improbable conoce a fantásticos amigos como Dug, un perro con un collar especial que le permite hablar, y Kevin, un pájaro de cuatro metros de altura que no vuela. Atrapados en la selva, Carl se da cuenta de que a veces las mayores aventuras de la vida son las que menos esperabas.",
    "director": "Pete Docter",
    "genero": "Animación, Familia, Comedia",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": true,
    "año": "2009",
    "tapa": "https://www.themoviedb.org/t/p/w1280/zPlR7FOi4bqCZmPRvyox3FrNggc.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/hGGC9gKo7CFE3fW07RA587e5kol.jpg",
    "video": "https://www.youtube.com/watch?v=qoZo9MiICo0&ab_channel=DisneyEspa%C3%B1al",
    "id": 6
  }, 
  {
    "nombre": "Avatar: El sentido del agua",
    "descripcion": "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
    "director": "James Cameron",
    "genero": "Acción, Ciencia Ficción",
    "categoria": "+13",
    "codigo": "pls",
    "año": "2022",
    "publicada": true,
    "destacada": true,
    "tapa": "https://www.themoviedb.org/t/p/w1280/hP12za13SKPffvIVf8S59KzqSpZ.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/zENT3sNfL2HONYS99sFEYlE6R28.jpg",
    "video": "https://www.youtube.com/watch?v=inT3MvpxRqE&ab_channel=20thCenturyStudiosEspa%C3%B1a",
    "id": 7
  },
  {
    "id": 8,
    "nombre": "Big Fish",
    "descripcion": "Cuenta la historia entre un padre moribundo, Edward Bloom (Albert Finney), y su hijo Will (Ewan McGregor), quien trata de aprender más acerca de su progenitor, reuniendo las distintas historias que este le ha contado. Así, Will recrea su vida en una serie de leyendas y mitos inspirados por los pocos hechos que conoce. Pero a partir del deseo de su madre Sandy, por reunir al padre con su hijo, este comienza a comprender la debacle de su padre. En sus relatos hay viajes alrededor del mundo, y delirios que incluyen gigantes, tornados y brujas.",
    "director": "Tim Burton",
    "genero": "Aventura, Fantasía, Drama",
    "categoria": "+13",
    "publicada": true,
    "destacada": true,
    "año": "2003",
    "tapa": "https://www.themoviedb.org/t/p/w1280/280BefgqWyLX0Z4jcbibB6l7xyx.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/zw2E53sYPSlBraYbrNnYRzcOaYr.jpg",
    "video": "https://www.youtube.com/watch?v=R3AECE35Anw&t=3s&ab_channel=DisneyEspa%C3%B1a"
  },
  {
    "id": 9,
    "nombre": "Ted 2",
    "descripcion": "Se trata de una secuela de la exitosa comedia escrita y dirigida por el cómico Seth MacFarlane. Recién casados Ted y Tami-Lynn deciden tener un bebé. John se ofrece en donar su esperma para que su mejor amigo pueda cumplir su sueño de tener un hijo, pero inesperadamente reciben una carta legal que dice que el estado no le permite ser padre ya que no está demostrado que sea una persona. Todos juntos tendrán que unir fuerzas para luchar por sus derechos en un tribunal de justicia.",
    "director": "Kelly Cronin, Seth MacFarlane",
    "genero": "Comedia",
    "categoria": "A+13",
    "codigo": "pls",
    "destacada": false,
    "publicada": true,
    "año": 2015,
    "tapa": "https://www.themoviedb.org/t/p/w1280/qMOt0uy1x49OBW0jzodgRM9waW0.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/kjOKnYJakcZ0sApcgcW3hBR8WPu.jpg",
    "video": "https://www.youtube.com/embed/S3AVcCggRnU"
  },
  {
    "id": 10,
    "nombre": "La boda de rosa",
    "descripcion": "Rosa tiene un trabajo extenuante, un hermano mandón, un padre pegado como un mejillón, una hermana que no echa una mano, una hija que tras haberse emancipado vuelve a casa con dos bebés y un novio al que no consigue ver el pelo. Demasiado acostumbrada a poner a todo el mundo primero que a sí misma, Rosa se encuentra, a punto de cumplir cuarenta y cinco, no solo con que no tiene control sobre su vida, sino que por el camino que va, no lo va a tener nunca. Rosa decide dar un giro y tomar las riendas de su vida, o al menos intentarlo. Quiere cumplir el sueño de tener un negocio propio, pero antes, quiere casarse y embarcarse en un matrimonio muy especial.",
    "director": "Icíar Bollaín",
    "genero": "Comedia",
    "categoria": "ATP",
    "codigo": "pls",
    "destacada": false,
    "publicada": true,
    "año": 2020,
    "tapa": "https://www.themoviedb.org/t/p/w1280/sxKwMF4rOyAaKiXcU5RfMyiIN8P.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/jp3LfaGGkXXS9Fq6361IzKoIy8v.jpg",
    "video": "https://www.youtube.com/embed/jrAML3wM1ug"
  },
  {
    "nombre": "Bastardos sin gloria",
    "descripcion": "Segunda Guerra Mundial. Durante la ocupación de Francia por los alemanes, Shosanna Dreyfus presencia la ejecución de su familia por orden del coronel nazi Hans Landa. Ella consigue huir a París, donde adopta una nueva identidad como propietaria de un cine. En otro lugar de Europa, el teniente Aldo Raine adiestra a un grupo de soldados judíos 'Los bastardos' para atacar objetivos concretos. Los hombres de Raine y una actriz alemana, que trabaja para los aliados, deben llevar a cabo una misión que hará caer a los jefes del Tercer Reich. El destino quiere que todos se encuentren bajo la marquesina de un cine donde Shosanna espera para vengarse.",
    "director": "Quentin Tarantino",
    "genero": "Acción, Bélica",
    "categoria": "+13",
    "codigo": "pls",
    "publicada": true,
    "destacada": true,
    "año": "2009",
    "tapa": "https://www.themoviedb.org/t/p/w1280/2dUYqrrxA9Ar6LXGqaTftX286Jx.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/1Jpkm9qZcsT0mSyVXgs4VlGjPNI.jpg",
    "video": "https://www.youtube.com/watch?v=PIoyKApfOsg&t=4s&ab_channel=20thCenturyStudiosEspa%C3%B1a",
    "id": 11
  },
  {
    "id": 12,
    "nombre": "Se busca papá",
    "descripcion": "Su mamá le prohibió inscribirse en una carrera de BMX, y esta pequeña cazadora de adrenalina no tiene mejor idea que contratar a un actor para el rol de su papá.",
    "director": "Javier Colinas",
    "genero": "Comedia",
    "categoria": "ATP",
    "publicada": false,
    "destacada": false,
    "año": "2020",
    "tapa": "https://www.themoviedb.org/t/p/w1280/pkGH2TfJpK9CnOB3qS8uVqAqdp9.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/fsDs4nGpA1w28mglVMu5LPgaeAj.jpg",
    "video": "https://www.youtube.com/embed/UcUwCFSgGVQ"
  },
  {
    "id": 13,
    "nombre": "Los elegidos",
    "descripcion": "Los Barret son una familia que vive en los suburbios. Lacey y Daniel (Keri Russell & Josh Hamilton) presencian una serie de extraños acontecimientos perturbadores que afectan a su familia, a su seguridad y a su tranquilidad. Cuando descubren que su familia es el objetivo de una inimaginable y terrorífica fuerza mortal, ambos tendrán que hacer todo lo que esté en sus manos para resolver este oscuro misterio.",
    "director": "Jean-Paul Chreky, Renetta G. Amador, Scott Stewart",
    "genero": "Ciencia ficción, Suspense, Terror",
    "categoria": "+16",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2013",
    "tapa": "https://www.themoviedb.org/t/p/w1280/mwqQ5QTJ0lDTm8Zd50vJZS5zGne.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/oLuAgHcYk9UrulfFJCmYfcnvmgB.jpg",
    "video": "https://www.youtube.com/embed/7axk1-oDckA"
  },
  {
    "id": 14,
    "nombre": "Matrix Revolutions",
    "descripcion": "La tercera parte de “Matrix” forma junto a “Matrix Reloaded” una película dividida en dos debido a su larga duración. Matrix Revolutions tiene lugar en su mayor parte en en el mundo real, en el que Neo, Trinity y Morpheo lucharán contra el avance de las máquinas hacia la ciudad de Zion, último reducto de la raza humana.",
    "director": "James McTeigue, Lana Wachowski, Lilly Wachowski",
    "genero": "Accion",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": true,
    "año": "2003",
    "tapa": "https://www.themoviedb.org/t/p/w1280/oCB8tMvo5dd4j1NN2bLlXbgoeRB.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/9yJrf74rgOMfF5LrgUmLiJAEBSv.jpg",
    "video": "https://www.youtube.com/embed/hMbexEPAOQI"
  },
  {
    "id": 15,
    "nombre": "A.I. Rising",
    "descripcion": "Año 2048, Milutin ha emprendido un viaje a Alfa Centauri con la ayuda de Nimani, una androide con forma de mujer que, entre otras cosas, proporcionará compañía a Milutin, que la somete a una tórrida relación sexual. Harto de las funciones preestablecidas de la androide, el astronauta decide configurarla a partir de las experiencias que esta ha vivido… el resultado, sin embargo, no será el que él espera.",
    "director": "Lazar Bodroža",
    "genero": "Accion",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2018",
    "tapa": "https://www.themoviedb.org/t/p/w1280/cvSjrRXBKzh5vGk01fUfrqSrkKO.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/kcsWiGL1HmtEeEpnR5zlCTt1RRS.jpg",
    "video": "https://www.youtube.com/embed/iDdYMOiIn3Q"
  },
  {
    "id": 16,
    "nombre": "Bob Esponja: Un héroe fuera del agua",
    "descripcion": "La vida en Fondo de Bikini no podría ser mejor para un eterno optimista como Bob Esponja (Tom Kenny) y sus amigos: la fiel estrella de mar Patricio (Bill Fagerbakke), el sarcástico Calamardo (Rodger Bumpass), la ardilla y científica Arenita (Carolyn Lawrence) y el crustáceo capitalista, Sr. Cangrejo (Clancy Brown). Cuando alguien roba la receta ultrasecreta de las Cangreburgers, los perpetuos enemigos Bob Esponja y Plankton (Mr. Lawrence) tendrán que unir sus fuerzas en un viaje a través del tiempo y el espacio para controlar sus superpoderes internos y enfrentarse al malvado pirata Barba Burger (Antonio Banderas), quien tiene sus propios planes para esas deliciosas exquisiteces.",
    "director": "Bob Camp, Carla Rose Ponzio",
    "genero": "Accion",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2015",
    "tapa": "https://www.themoviedb.org/t/p/w1280/16XIGkJgoYwtecgF2OFavSnisZ7.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/c1ys6GmNTx8zWafOj2V4J8E2BGo.jpg",
    "video": "https://www.youtube.com/embed/ISUMMHr1D3A"
  },
  {
    "nombre": "Books of Blood",
    "descripcion": "Un viaje a territorios inexplorados y prohibidos a través de tres historias enredadas en el espacio y el tiempo.",
    "director": "Brannon Braga",
    "genero": "Terror",
    "categoria": "ATP",
    "año": "2020",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "tapa": "https://www.themoviedb.org/t/p/w1280/bXLVZGgLgd7OwbfP6fC5GCfrxuD.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/a883xNT7wlw6GH38lvUkRRG1dIr.jpg",
    "video": "https://www.youtube.com/embed/k-BVMDGFMkA",
    "id": 17
  },
  {
      "id": 18,
      "nombre": "El señor de los anillos: El retorno del rey",
      "descripcion": "Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de que se decida el destino de la Tierra Media, y por primera vez en mucho tiempo, parece que hay una pequeña esperanza. La atención del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, y del cual Aragorn tendrá que reclamar el trono para ocupar su puesto de rey. Pero las fuerzas de Sauron ya se preparan para lanzar el último y definitivo ataque contra el reino de Gondor, la batalla que decidirá el destino de todos. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, a la espera de que Sauron no repare en que dos pequeños Hobbits se acercan cada día más al final de su camino, el Monte del Destino.",
      "director": "Peter Jackson",
      "genero": "Aventura, Fantasía, Acción",
      "categoria": "+13",
      "publicada": true,
      "destacada": true,
      "año": "2003",
      "tapa": "https://www.themoviedb.org/t/p/original/5fsbtdPKfpD3pZ7brNoRUOVlfK7.jpg",
      "imagen": "https://www.themoviedb.org/t/p/original/rOmd5Beem8FNcEA2DrmlBMjf6v5.jpg",
      "video": "https://www.youtube.com/watch?v=cUuz3-QCg58&ab_channel=ESmaugQDanVS"
  },
  {
    "id": 19,
    "nombre": "Scarface",
    "descripcion": "Cuenta la historia entre un padre moribundo, Edward Bloom (Albert Finney), y su hijo Will (Ewan McGregor), quien trata de aprender más acerca de su progenitor, reuniendo las distintas historias que este le ha contado. Así, Will recrea su vida en una serie de leyendas y mitos inspirados por los pocos hechos que conoce. Pero a partir del deseo de su madre Sandy, por reunir al padre con su hijo, este comienza a comprender la debacle de su padre. En sus relatos hay viajes alrededor del mundo, y delirios que incluyen gigantes, tornados y brujas.",
    "director": "Brian De Palma",
    "genero": "Acción, Crimen, Drama",
    "categoria": "+16",
    "publicada": true,
    "destacada": false,
    "año": "1983",
    "tapa": "https://www.themoviedb.org/t/p/w1280/oCd2HakBSfNU1J4LHY2nTvDs9W5.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/cCvp5Sni75agCtyJkNOMapORUQV.jpg",
    "video": "https://www.youtube.com/watch?v=vSp_kLkNdnE&embeds_euri=https%3A%2F%2Fwww.themoviedb.org%2F&embeds_origin=https%3A%2F%2Fwww.themoviedb.org&source_ve_path=MjM4NTE&feature=emb_title"
  },  
  {
    "nombre": "Pledge",
    "descripcion": "Un grupo de estudiantes universitarios de primer año se comprometen a una fraternidad exclusiva, pero pronto se dan cuenta de que hay más en juego de lo que jamás hubieran imaginado.",
    "director": "Daniel Robbins",
    "genero": "Terror",
    "categoria": "+13",
    "codigo": "pls",
    "año": "2019",
    "publicada": true,
    "destacada": false,
    "tapa": "https://www.themoviedb.org/t/p/w1280/3eol8FnndIY8drMknjUnRCjYaIe.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/aqdjM6chmFlOtt1bzW0uLVIJWan.jpg",
    "video": "https://www.youtube.com/embed/o-fFgAQl0oM",
    "id": 20
  },
  {
    "id": 21,
    "nombre": "The Purge 2: Anarchy",
    "descripcion": "Secuela de la película The Purge. La noche de las bestias (2013). En la película original, el gobierno de Estados Unidos permite que, durante una noche, cualquier acto vandálico sea legal. De esta forma intentan reducir el número de criminales, ya que las cárceles del país se encuentran saturadas. La idea surge de la teoría de que todo ser humano tiene maldad en su interior, maldad que en algún momento saldrá a la luz. En esta situación, las personas que tienen dinero tienen más posibilidades que las pobres, ya que estas últimas no tienen los medios necesarios para defenderse de los que les quieran hacer daño. Así, una pregunta sale a la luz: ¿Cómo poder sobrevivir a los criminales sin convertirse en uno?",
    "director": "Amy Price-Francis",
    "genero": "Terror",
    "categoria": "+18",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2014",
    "tapa": "https://www.themoviedb.org/t/p/w1280/lai6rkzGDOZk5CsPdKZAkzUhjlH.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/blfZnm6StMPnTY35kaooPBCsSVp.jpg",
    "video": "https://www.youtube.com/embed/osI4Ii6a3D4"
  },
  {
    "nombre": "Yo no soy tu mami",
    "descripcion": "Una periodista sostiene en su columna semanal las razones por las cuales no quiere tener hijos, defendiendo su posición frente a la vida y la maternidad. Pero la misma comenzará a aflojarse cuando un nuevo vecino y su pequeña hija lleguen al edificio.",
    "director": "Marcos Carnevale",
    "genero": "Comedia",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2019",
    "tapa": "https://www.themoviedb.org/t/p/w1280/5yRBIxOAnEaQOqy0eYHX1rJWGQh.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/gDeuJUEjrZTETMnYNGWubvrNmvT.jpg",
    "video": "https://www.youtube.com/embed/cJVBYkA57yc",
    "id": 22
  },
  {
    "nombre": "Frozen Fever",
    "descripcion": "Llega el cumpleaños de Anna, y Elsa y Kristoff están decididos a brindarle la mejor celebración de su vida, pero cuando Elsa se resfría, sus poderes helados pueden poner la fiesta – y algo más – en riesgo.",
    "director": "Chris Buck, Jennifer Lee",
    "genero": "Animación, Familia, Comedia",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": true,
    "año": "2015",
    "tapa": "https://www.themoviedb.org/t/p/w1280/2yvEHPlUky1b8nKaiWbI9k77Z6L.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/wD7s8gT9F89gIINlafDJNjYjzZ8.jpg",
    "video": "https://www.youtube.com/embed/bQRLVxZHKPs",
    "id": 23
  },
  {
    "nombre": "3022",
    "descripcion": "Un grupo de astronautas que viven en el inquietante vacío del espacio profundo despierta para encontrar la tierra ha sufrido un evento de nivel de extinción.",
    "director": "John Suits",
    "genero": "Ciencia Ficcion",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2019",
    "tapa": "https://www.themoviedb.org/t/p/w1280/qgdj1IjOs5ubfHaiexhuHNwPsYd.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/ailBwpIwzUcNpuKSHtSwyqXAYCe.jpg",
    "video": "https://www.youtube.com/embed/zF3VsTjoQS0",
    "id": 24
  },
  {
    "id": 25,
    "nombre": "El hombre invisible",
    "descripcion": "Después de que su abusivo ex novio se suicide, la ingenua viuda Cecilia comienza a reconstruir su vida para mejor. Sin embargo, su sentido de la realidad se pone en tela de juicio cuando comienza a sospechar que su ex novio en realidad no está muerto, como había pensado.",
    "director": "Leigh Whannell",
    "genero": "Accion",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2020",
    "tapa": "https://www.themoviedb.org/t/p/w1280/wCnsOikA3iab1MVE0zUjRtqz758.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/dYty1QmTwRANDfbm19Gu2PmNOEs.jpg",
    "video": "https://www.youtube.com/embed/Yghnm_17a8w"
  },
  {
    "nombre": "La caverna",
    "descripcion": "Un grupo de estudiantes queda atrapado dentro de una cueva misteriosa donde descubren que el tiempo pasa de forma diferente bajo tierra que en la superficie.",
    "director": "Ben Foster, Mark Dennis",
    "genero": "Ciencia Ficcion",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2017",
    "tapa": "https://www.themoviedb.org/t/p/w1280/2RV6aJqBztmkL0faL1aQsowtkPt.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/lRFtFFIoGQfHxyHNS254Ew7PV9c.jpg",
    "video": "https://www.youtube.com/watch?v=6T3Z0JTf77k&ab_channel=IndieWire",
    "id": 26
  },
  {
    "nombre": "Starfish",
    "descripcion": "Una chica intenta superar la pérdida de su mejor amiga justo cuando el mundo está apunto de desaparecer tal y como se ha conocido hasta el momento..",
    "director": "AT White",
    "genero": "Ciencia Ficcion",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2017",
    "tapa": "https://www.themoviedb.org/t/p/w1280/bn1uKQnkA32TjvLOvmYcQFe5NNe.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/kLksdhO1XzlweAOpRi3zVyNOexh.jpg",
    "video": "https://www.youtube.com/embed/4inpM9tlock",
    "id": 27
  },
  {
    "nombre": "Incident at Montauk",
    "descripcion": "Después de presenciar un OVNI, Jed Logan pronto descubre que su avistamiento puede estar relacionado con un proyecto secreto del gobierno que lo lleva por un camino peligroso para descubrir la verdad.",
    "director": "Owen Mulligan",
    "genero": "Ciencia Ficcion",
    "categoria": "+18",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2017",
    "tapa": "https://www.themoviedb.org/t/p/w1280/xW8IgkpKPICmBeLjBi4SXFu48Zb.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/3vZvgDdgdCWAbvELiA21uAFhu9z.jpg",
    "video": "https://www.youtube.com/embed/bIBi8cdclHs",
    "id": 28
  },
  {
    "nombre": "Welcome to Sudden Death",
    "descripcion": "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team’s owner and Jesse’s daughter during opening night. Facing a ticking clock and impossible odds, it’s up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
    "director": "Dallas Jackson",
    "genero": "Acción",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2020",
    "tapa": "https://www.themoviedb.org/t/p/w1280/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/akflTTOROZVIyxvzzvCAOVChdbL.jpg",
    "video": "https://www.youtube.com/embed/TpWiJWRSKIQ",
    "id": 29
  },
  {
    "nombre": "Primal",
    "descripcion": "Un cazador que se dedica a capturar animales para luego venderlos a distintos zoológicos compra un pasaje para embarcarse en un crucero repleto de animales exóticos con los que piensa hacerse de oro, entre los que se incluye un jaguar y otros animales del Amazonas. Sin embargo, desconoce que en el mismo barco se está extraditando a un asesino en serie que, tras escapar del control de sus captores, liberta a los animales y con ellos el caos total.",
    "director": "Nick Powell",
    "genero": "Acción",
    "categoria": "+18",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2019",
    "tapa": "https://www.themoviedb.org/t/p/w1280/v0Air5GTsfgtjsnZyji2lH6r2b8.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/5t7W5wuY3hlWjKRfgPIOWcWaDCL.jpg",
    "video": "https://www.youtube.com/embed/xpxT6lWQDA4",
    "id": 30
  },
  {
    "nombre": "24 Hours In London",
    "descripcion": "Un ex convicto vengativo realiza una matanza de 24 horas sin decir una palabra. El detective desacreditado que investiga el caso está convencido de que hay más de lo que sugiere la evidencia.",
    "director": "Damien Morley, Dave Wiltshire, Paul Knight",
    "genero": "Acción",
    "categoria": "+18",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2020",
    "tapa": "https://www.themoviedb.org/t/p/w1280/3RrXYB2QilQ1xQXlRIncdVXTKIU.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/hlfFrHOCkdP7VgwRsJeeN5bJGRD.jpg",
    "video": "https://www.youtube.com/embed/zKdbz4KNNAI",
    "id": 31
  },
  {
    "nombre": "Force of Nature",
    "descripcion": "Una banda de ladrones planea un atraco durante un huracán y se encuentra con problemas cuando un policía en desgracia intenta obligar a todos en el edificio a evacuar.",
    "director": "Michael Polish",
    "genero": "Acción",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2020",
    "tapa": "https://www.themoviedb.org/t/p/w1280/1qG8FzwGUlFMK3WCqPR0nJBwKUW.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/za4sjEoamjs1Ho7fGVpczjVYgTm.jpg",
    "video": "https://www.youtube.com/embed/d61GX5VoEJc",
    "id": 32
  },
  {
    "nombre": "The Lie",
    "descripcion": "Un padre y una hija se dirigen al campamento de baile cuando ven al mejor amigo de la niña al costado de la carretera. Cuando se detienen para ofrecerle un aventón al amigo, sus buenas intenciones pronto resultan en terribles consecuencias.",
    "director": "Veena Sud",
    "genero": "Drama",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2016",
    "tapa": "https://www.themoviedb.org/t/p/w1280/qjlpRjvnjDKwLJmK3Q2PPkj6PtU.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/tBJa5DSyDggtcbMSMNAKQQtpwBt.jpg",
    "video": "https://www.youtube.com/embed/lrwhHRYDkgs",
    "id": 33
  },
  {
    "nombre": "The Last Boy",
    "descripcion": "Con el fin del mundo, una madre moribunda envía a su hijo pequeño en una búsqueda para encontrar el lugar que concede deseos.",
    "director": "Perry Bhandal",
    "genero": "Drama",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2019",
    "tapa": "https://www.themoviedb.org/t/p/w1280/l1Cy0hcTDbjAntFfUneAUvazSiq.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/bNTBWrSLZrOdB4NLCV2LmA3fuiK.jpg",
    "video": "https://www.youtube.com/embed/QB69KYPOKe8",
    "id": 34
  },
  {
    "nombre": "The Boys in the Band",
    "descripcion": "Un grupo de homosexuales se reúne en un apartamento de Nueva York para celebrar el cumpleaños de un amigo. Cuando transcurren las horas, después de beber y de subir el volumen de la música, la velada comienza a exponer las fisuras que existen entre su amistad y el dolor auto-infligido que amenaza con hacer trizas su concepto de la solidaridad.",
    "director": "Joe Mantello",
    "genero": "Drama",
    "categoria": "+16",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2020",
    "tapa": "https://www.themoviedb.org/t/p/w1280/2D2gi13hnrXWaspWuWmdbEZ8bef.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/oviYLyXIFKWiEdX8CXo0UD4tmUx.jpg",
    "video": "https://www.youtube.com/embed/862Pb9oDDAo",
    "id": 35
  },
  {
    "nombre": "Clemency",
    "descripcion": "Mientras se prepara para ejecutar a otro recluso, Bernadine debe enfrentarse a los demonios psicológicos y emocionales que crea su trabajo y, en última instancia, conectarla con el hombre al que está autorizada a matar.",
    "director": "Chinonye Chukwu",
    "genero": "Drama",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2019",
    "tapa": "https://www.themoviedb.org/t/p/w1280/uQgi5hq29saWiG4DbmQfz2EEnKI.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/17OdaqbR7JbavPrhKZsUWUSvqQz.jpg",
    "video": "https://www.youtube.com/embed/HzUhz2XkFfE",
    "id": 36
  },
  {
    "nombre": "Carga",
    "descripcion": "Un camión, una carretera y un destino impredecible, todos ellos intersecciones en una red de tráfico humano. Atrapada en esta red, Viktoriya solo tiene una opción: luchar para sobrevivir.",
    "director": "Bruno Gascon",
    "genero": "Drama",
    "categoria": "ATP",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2018",
    "tapa": "https://www.themoviedb.org/t/p/w1280/uLVjYX0q0wdX9CyILF6nMTRIP3x.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/ymePqzMInqJnyKBqul4x4SQpt68.jpg",
    "video": "https://www.youtube.com/embed/IWyrDba0lDc",
    "id": 37
  },
  {
    "nombre": "Avatar",
    "descripcion": "Año 2154. Jake Sully , un exmarine en silla de ruedas, es enviado al planeta Pandora, donde se ha creado el programa Avatar, gracias al cual los seres humanos pueden controlar de forma remota un cuerpo biológico con apariencia y genética de la especie nativa. Pronto se encontrará con la encrucijada entre seguir las órdenes de sus superiores o defender al mundo que le ha acogido y siente como suyo.",
    "director": "James Cameron",
    "genero": "Acción, Ciencia Ficción",
    "categoria": "+13",
    "codigo": "pls",
    "publicada": true,
    "destacada": false,
    "año": "2009",
    "tapa": "https://www.themoviedb.org/t/p/w1280/unbrtK8zEjPANvNkbwhjpSxYWzN.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/3BhYo9HUBlQ5XY3unbuqc2HaeYn.jpg",
    "video": "https://www.youtube.com/watch?v=PIoyKApfOsg&t=4s&ab_channel=20thCenturyStudiosEspa%C3%B1a",
    "id": 38
  },
  {
    "nombre": "El vuelo",
    "descripcion": "Tras un aterrizaje de emergencia en medio del campo gracias al cual salvan la vida un centenar de pasajeros, el comandante Whip Whitaker, que pilotaba el avión, es considerado un héroe nacional. Sin embargo, cuando se pone en marcha la investigación para determinar las causas de la avería, se averigua que el capitán tenía exceso de alcohol en la sangre y que puede ir a la cárcel si se demuestra que pilotó el avión en estado de embriaguez.",
    "director": "Robert Zemeckis",
    "genero": "Drama",
    "categoria": "+13",
    "codigo": "pls",
    "publicada": true,
    "destacada": true,
    "año": "2012",
    "tapa": "https://www.themoviedb.org/t/p/w1280/wc9INXYUM38pzpyZIgcCDhjv1a2.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/m9JmRJjqqh4SnHAEf7LQI8B07Kt.jpg",
    "video": "https://www.youtube.com/watch?v=r-96m8c_o-E&ab_channel=ParamountPicturesInternational",
    "id": 39
  }, 
  {
    "id": 40,
    "nombre": "Perfume de mujer",
    "descripcion": "Frank Slade es un malhumorado Coronel en la reserva del ejército norteamericano, retirado pues sufre de ceguera. Durante el fin de semana de Acción de Gracias el joven estudiante Charlie Simms, contratado por la familia de Slade, se queda en su casa para servirle de lazarillo y procurar que no beba mucho. Pero Frank tiene otros planes: irse a la gran ciudad de Nueva York... Remake de la película italiana de 1974 'Profumo di donna' (Perfume de mujer).",
    "director": "Martin Brest",
    "genero": "Drama",
    "categoria": "+13",
    "publicada": true,
    "destacada": true,
    "año": "1992",
    "tapa": "https://www.themoviedb.org/t/p/w1280/o4SBXaqUV6Xo11GE9xiQrRW3PtG.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/229egMytQoaZ79iRkVYuKKxmjJV.jpg",
    "video": "https://www.youtube.com/watch?v=R3AECE35Anw&t=3s&ab_channel=DisneyEspa%C3%B1a"
  },
  {
    "id": 41,
    "nombre": "Pets united",
    "descripcion": "Un astuto perro y una gatita consentida lideran a un equipo de héroes inesperados después de que su ciudad se vea asediada por el malvado alcalde y su ejército de robots.",
    "director": "Reinhard Klooss",
    "genero": "Comedia",
    "categoria": "ATP",
    "codigo": "pls",
    "destacada": false,
    "publicada": true,
    "año": 2019,
    "tapa": "https://www.themoviedb.org/t/p/w1280/wzJIhB6qrHJg75A0wGBiDeqS2mx.jpg",
    "imagen": "https://www.themoviedb.org/t/p/original/dp3jTcbb4KPOSOoItuUmp5ZvwEX.jpg",
    "video": "https://www.youtube.com/embed/4Yq15X_gj9A"
  },

];

if(!localStorage.getItem('films')){
  let pelisJSON = JSON.stringify(peliculas)
  localStorage.setItem('films', pelisJSON)
};
let filmsLS = localStorage.getItem('films')
let dataFilms = JSON.parse(filmsLS);

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
// document.getElementsByTagName('main')[0].appendChild(landingMain);


let preguntasFrecuentes = document.createElement('div');
preguntasFrecuentes.classList.add('container-preguntas','container', 'col', 'col-md-7', 'd-flex', 'flex-column', 'text-center', 'justify-content-center', 'pb-5')
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

let footer = document.createElement('div');
footer.classList.add('footer-landing', 'sticky-bottom')
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





// const peliculas = JSON.parse(localStorage.getItem('films'));

// function isOutstanding(peliculas) {
//     if (peliculas.destacada === true) {
//         // console.log(peliculas);
//         return peliculas;
//     }
// }

// let filmsLS = localStorage.getItem('films')
// let dataFilms = JSON.parse(filmsLS);

// let peliculasDestacadas = dataFilms.filter(isOutstanding);
// // console.log(peliculasDestacadas);
// //! ---------------------

// let imagenes = peliculasDestacadas.map(element => element.imagen);
// console.log(imagenes);

// document.Imagen.src = imagenes[0]

// let sliderDerecho = document.querySelector('.slider-derecho');

// function moverDerecha() {
//     contador++
//     if (contador>imagenes.length -1 ) {
//         contador = 0;
//     }
//     document.Imagen.src = imagenes[contador]

// }

// sliderDerecho.addEventListener('click', moverDerecha)
