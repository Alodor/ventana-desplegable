$(document).on("ready", main);
function main() {
    $("#window-trigger").on("click", desplegar);
    $("#box-close").on("click", solapar);
}

// Animacion para desplegar
function desplegar() {
    $("#box-window").animate({
        marginRight: '0'
    });
}

// Animacion para solapar
function solapar() {
    $("#box-window").animate({
        marginRight: '-450px'
    });
}