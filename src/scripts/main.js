AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const constaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minutoMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaMs) / horaMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaMs) / minutoMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoMs) / 1000);

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if ( distanciaAteEvento < 0) {
        clearInterval(constaAsHoras);
        document.getElementById('contador').innerHTML = 'O evento acabou! Mas não se preocupe ainda teremos muito mais';
    }
}, 1000);