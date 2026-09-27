$(document).ready(function(){

    $("#lista-link img").hover(
        function(){
            $(this).stop().animate({
                opacity: 0.8,
                width: "290px",
                height: "211px"
            }, 300);
        },
        function(){
            $(this).stop().animate({
                opacity: 1,
                width: "275px",
                height: "200px"
            }, 300);
        }
    );

});


let diapositiva = 1;

setInterval(function() {

    if (diapositiva == 1) {
        document.getElementById("slide2").checked = true;
        diapositiva = 2;
    }
    else if (diapositiva == 2) {
        document.getElementById("slide3").checked = true;
        diapositiva = 3;
    }
    else {
        document.getElementById("slide1").checked = true;
        diapositiva = 1;
    }

}, 3000);


/* ============================= */
/* EFECTO DE LA PORTADA */
/* ============================= */

let portada = document.querySelector('.portada-ia');
let animandoPortada = false;

function actualizarPortada(){

    let scrollY = window.scrollY;

    let maxScroll = 500;

    let progreso = Math.min(scrollY / maxScroll, 1);

    let escala = 1 + progreso * 2;

    let opacidad = 1 - progreso;

    portada.style.transform = `scale(${escala})`;
    portada.style.opacity = opacidad;

    animandoPortada = false;
}

window.addEventListener('scroll', function(){

    if(!animandoPortada){

        animandoPortada = true;

        requestAnimationFrame(actualizarPortada);

    }

});


/* =====================================================
   CARRUSEL 3D DE INTELIGENCIAS ARTIFICIALES
   ===================================================== */

const imagenes3D =
    document.querySelectorAll('.imagen-3d');

const izquierda3D =
    document.querySelector('.flecha.izquierda');

const derecha3D =
    document.querySelector('.flecha.derecha');

const botonStop =
    document.querySelector('.boton-stop');


/* =====================================================
   COMPROBAR QUE EL CARRUSEL EXISTE
   ===================================================== */

if(
    imagenes3D.length > 0 &&
    izquierda3D &&
    derecha3D &&
    botonStop
){

    /* Imagen que empieza en el centro */

    let posicion3D = 0;


    /* Estado del movimiento automático */

    let reproduciendo = true;


    /* Cambio automático cada 3 segundos */

    const tiempoAutomatico = 3000;


    /* Separación entre imágenes */

    const separacion = 40;


    /* =================================================
       OBTENER ANCHO REAL DE LA IMAGEN
       ================================================= */

    function obtenerAncho(imagen){

        const img =
            imagen.querySelector('img');

        return img.offsetWidth;

    }


    /* =================================================
       ACTUALIZAR POSICIONES
       ================================================= */

    function actualizarCarrusel3D(){

        const cantidad =
            imagenes3D.length;


        const imagenCentral =
            imagenes3D[posicion3D];


        const anchoCentral =
            obtenerAncho(imagenCentral);


        imagenes3D.forEach(function(imagen, indice){

            let diferencia =
                indice - posicion3D;


            /* Hacer que el carrusel sea circular */

            if(diferencia > cantidad / 2){

                diferencia -= cantidad;

            }


            if(diferencia < -cantidad / 2){

                diferencia += cantidad;

            }


            /* Ancho real de la imagen */

            const anchoImagen =
                obtenerAncho(imagen);


            /* =========================================
               IMAGEN CENTRAL
               ========================================= */

            if(diferencia === 0){

                imagen.style.transform =
                    "translate(-50%, -50%) " +
                    "translateX(0) " +
                    "rotateY(0deg) " +
                    "scale(1)";

                imagen.style.opacity = "1";

                imagen.style.zIndex = "5";

            }


            /* =========================================
               IMAGEN IZQUIERDA
               ========================================= */

            else if(diferencia === -1){

                const distancia =
                    (anchoCentral / 2) +
                    (anchoImagen * 0.85 / 2) +
                    separacion;


                imagen.style.transform =
                    "translate(-50%, -50%) " +
                    "translateX(-" +
                    distancia +
                    "px) " +
                    "rotateY(35deg) " +
                    "scale(0.85)";

                imagen.style.opacity = "1";

                imagen.style.zIndex = "2";

            }


            /* =========================================
               IMAGEN DERECHA
               ========================================= */

            else if(diferencia === 1){

                const distancia =
                    (anchoCentral / 2) +
                    (anchoImagen * 0.85 / 2) +
                    separacion;


                imagen.style.transform =
                    "translate(-50%, -50%) " +
                    "translateX(" +
                    distancia +
                    "px) " +
                    "rotateY(-35deg) " +
                    "scale(0.85)";

                imagen.style.opacity = "1";

                imagen.style.zIndex = "2";

            }


            /* =========================================
               IMAGEN IZQUIERDA LEJANA
               ========================================= */

            else if(diferencia === -2){

                const indiceAnterior =
                    (posicion3D - 1 + cantidad) % cantidad;


                const imagenAnterior =
                    imagenes3D[indiceAnterior];


                const anchoAnterior =
                    obtenerAncho(imagenAnterior);


                const distancia =
                    (anchoCentral / 2) +
                    (anchoAnterior * 0.85 / 2) +
                    separacion +
                    (anchoImagen * 0.7 / 2) +
                    separacion;


                imagen.style.transform =
                    "translate(-50%, -50%) " +
                    "translateX(-" +
                    distancia +
                    "px) " +
                    "rotateY(55deg) " +
                    "scale(0.7)";

                imagen.style.opacity = "1";

                imagen.style.zIndex = "1";

            }


            /* =========================================
               IMAGEN DERECHA LEJANA
               ========================================= */

            else if(diferencia === 2){

                const indiceSiguiente =
                    (posicion3D + 1) % cantidad;


                const imagenSiguiente =
                    imagenes3D[indiceSiguiente];


                const anchoSiguiente =
                    obtenerAncho(imagenSiguiente);


                const distancia =
                    (anchoCentral / 2) +
                    (anchoSiguiente * 0.85 / 2) +
                    separacion +
                    (anchoImagen * 0.7 / 2) +
                    separacion;


                imagen.style.transform =
                    "translate(-50%, -50%) " +
                    "translateX(" +
                    distancia +
                    "px) " +
                    "rotateY(-55deg) " +
                    "scale(0.7)";

                imagen.style.opacity = "1";

                imagen.style.zIndex = "1";

            }


            /* =========================================
               RESTO DE LAS IMÁGENES
               ========================================= */

            else{

                imagen.style.transform =
                    "translate(-50%, -50%) " +
                    "translateZ(-500px) " +
                    "scale(0.4)";

                imagen.style.opacity = "0";

                imagen.style.zIndex = "0";

            }

        });

    }


    /* =================================================
       SIGUIENTE IMAGEN
       ================================================= */

    function siguienteImagen(){

        posicion3D++;


        if(posicion3D >= imagenes3D.length){

            posicion3D = 0;

        }


        actualizarCarrusel3D();

    }


    /* =================================================
       IMAGEN ANTERIOR
       ================================================= */

    function imagenAnterior(){

        posicion3D--;


        if(posicion3D < 0){

            posicion3D =
                imagenes3D.length - 1;

        }


        actualizarCarrusel3D();

    }


    /* =================================================
       FLECHA DERECHA
       ================================================= */

    derecha3D.addEventListener(
        'click',
        function(){

            siguienteImagen();

        }
    );


    /* =================================================
       FLECHA IZQUIERDA
       ================================================= */

    izquierda3D.addEventListener(
        'click',
        function(){

            imagenAnterior();

        }
    );


    /* =================================================
       CAMBIO AUTOMÁTICO
       ================================================= */

    setInterval(function(){

        if(reproduciendo){

            siguienteImagen();

        }

    }, tiempoAutomatico);


    /* =================================================
       BOTÓN STOP / PLAY
       ================================================= */

    botonStop.addEventListener(
        'click',
        function(){

            reproduciendo =
                !reproduciendo;


            if(reproduciendo){

                botonStop.textContent =
                    "⏸";

            }else{

                botonStop.textContent =
                    "▶";

            }

        }
    );


    /* =================================================
       INICIAR CARRUSEL
       ================================================= */

    window.addEventListener(
        'load',
        function(){

            actualizarCarrusel3D();

        }
    );

}