//funciones que se activan al poner cada icono en el mapa

function mostrarInicio() {
    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");

    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";

    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";

    //Subimos el dialog para verlo mejor
    espacio_dialogo.style.top = "45%";
    //tambien lo ajustamos hacia la izquierda
    espacio_dialogo.style.left = "18%";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //los datos que vamos a poner
    const titulo = "Inicio Mapa";
    const texto = "Bienvenido y Bienvenida al mapa interactivo del Páramo de la Rusia. Aquí podrás ver las partes más representativas del lugar, de una forma mucho más cercana y que estoy seguro de que disfrutarás; Imagen de fondo paisaje de la carretera al Páramo un domingo al amanecer. ";
    const rutaImagen1 = "./imagenes mapa/foto_carretera.jpg";
    const rutaImagen2 = "./imagenes mapa/foto_carretera2.jpg";
    //los ponemos junto con los recursos graficos
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen1;
    espacio_imagen2.src = rutaImagen2;


}



function mostrarCascadas() {
    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");

    //Subimos el dialog para verlo mejor
    espacio_dialogo.style.top = "40%";
    //tambien lo ajustamos hacia la izquierda
    espacio_dialogo.style.left = "18%";


    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos los datos que vamos a mostrar
    const titulo = "Cascadas en la via";
    const texto = "Como la mayoría de Los páramos, en la Rusia nacen muchas quebradas que abastecen a los municipios del valle del Tundama en Boyacá; es muy fácil verlas, pues están al lado de la carretera. Realmente es algo muy hermoso.";
    const rutaImagen = "./imagenes mapa/cascadas.jpg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
}

function mostrarPuente() {

    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto

    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");

    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    // y que se vea el espacio del video
    espacio_video.style.display = "block";

    //Subimos el dialog para verlo mejor
    espacio_dialogo.style.top = "35%";
    //tambien lo ajustamos hacia la izquierda
    espacio_dialogo.style.left = "18%";


    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";

    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos los datos 
    const titulo = "Puente rio Surba";
    const texto = "Seguimos avanzando en la carretera, y encontramos el Rio Surba, bastante importante para el abastecimiento de agua de la región. Su agua es bastante fría, y desconozco si esté limpia a la totalidad. Podemos apreciar un vídeo del puente en bicicleta.";
    const rutaVideo = "./imagenes mapa/videoPuente.MP4";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;

    espacio_video.src = rutaVideo;
}

function mostrarBosque() {

    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";

    //Subimos el dialog para verlo mejor
    espacio_dialogo.style.top = "30%";
    //tambien lo ajustamos hacia la izquierda
    espacio_dialogo.style.left = "18%";


    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos los datos
    const titulo = "Bosque del paramo";
    const texto = "Lo encontramos cuando subimos por un sendero adyacente al rio. Está bien señalizado y podemos encontrar todo tipo de flora nativa, y nacimientos de agua. Así mismo, si seguimos el sendero que tiene llegamos a la punta del páramo Pan de Azúcar (Cercano al de La Rusia).";
    const rutaImagen = "./imagenes mapa/bosque_rio.jpg";
    const rutaImagen2 = "./imagenes mapa/bosque_rio2.jpg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
    espacio_imagen2.src = rutaImagen2;
}

function mostrarCurvas() {

    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";
    //Subimos el dialog para verlo mejor
    espacio_dialogo.style.top = "30%";
    //tambien lo ajustamos hacia la izquierda
    espacio_dialogo.style.left = "18%";


    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos los datos
    const titulo = "Curvas Peligrosas";
    const texto = "Estas curvas peligrosas que observamos son los remanentes de una carretera que uniría a Duitama con Charalá, Santander. Sin embargo, el proyecto nunca se terminó y ahora es un lugar poco transitado. ";
    const rutaImagen = "./imagenes mapa/curvas_peligrosas.jpg";
    const rutaImagen2 = "./imagenes mapa/curvas_peligrosas2.jpg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
    espacio_imagen2.src = rutaImagen2;
}

function mostrarParamo() {

    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";

    //Subimos el dialog para verlo mejor
    espacio_dialogo.style.top = "25%";
    //tambien lo ajustamos hacia la izquierda
    espacio_dialogo.style.left = "36%";

    //ponemos que sea visible el video
    espacio_video.style.display = "block";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos los datos
    const titulo = "Paramo";
    const texto = "El páramo es un lugar muy extenso, y es difícil representarlo en un solo punto. Sin embargo, creo que su parte más linda es el valle de los frailejones que pueden apreciar en las fotos; este lugar es muy ventoso y frio por lo que es aconsejable ir con buena ropa antes de subir hasta allá.";
    const rutaImagen = "./imagenes mapa/paramo.jpg";
    const rutaVideo = "./imagenes mapa/videoParamo.mp4";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
    espacio_video.src = rutaVideo;
}


function mostrarLagunas() {
    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";

    //Subimos el dialog para verlo mejor
    espacio_dialogo.style.top = "8%";
    //tambien lo ajustamos hacia la izquierda
    espacio_dialogo.style.left = "40%";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos datos
    const titulo = "Lagunas";
    const texto = "Son 3 lagunas en total las que encontramos en el páramo. Su agua tiene una alta pureza y son completamente aptas para nadar (Aunque eso si, con ese frio no me metería). Por otro lado, alrededor de ellas hay muchas historias, como que si le tiras una piedra al agua, el páramo se llenará de una bruma muy espesa y te perderás.";
    const rutaImagen = "./imagenes mapa/lagunas.jpg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
}