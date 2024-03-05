const $dias = document.getElementById("dias");
const $horas = document.getElementById("horas");
const $minutos = document.getElementById("minutos");
const $segundos = document.getElementById("segundos");
const $finalMensaje = document.querySelector(".final-sms");

//fecha futura
const countdownDate = new Date("April 6, 2024 00:00:00").getTime();

let interval = setInterval(function() {
    //para obtener la fecha actual en milisegundos
    const now = new Date().getTime();
    //obtener la diferencia entre ambas fechas

    let diferenciaDias = countdownDate - now;

    //calculos a días-horas-minutos-segundos
    let days= Math.floor(diferenciaDias / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diferenciaDias % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((diferenciaDias % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((diferenciaDias % (1000*60)) / (1000));

    //Resultados
    $dias.innerHTML=days;
    $horas.innerHTML=hours;
    $minutos.innerHTML=minutes;
    $segundos.innerHTML=("0" + seconds).slice(-2);

    //Para cuando llegue a cero
    if(diferenciaDias < 0){
        clearInterval(interval);
        $finalMensaje.style.transform= "translateY(0)"
    }

},1000);