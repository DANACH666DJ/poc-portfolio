$(document).ready(() => {
    $(".cabecera__menu").click(() => {
        $(".menu").toggleClass("menu--visible");
    });
});

$(document).ready(() => {
    $(".menu").click(() => {
        $(".menu").removeClass("menu--visible");
    });
});
