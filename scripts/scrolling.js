window.onscroll = function () { fixElementOnTop() };

var elemento = document.getElementById("brand");
var posicaoElemento = elemento.offsetTop;

const fixElementOnTop = () => {
    if (window.scrollY > posicaoElemento) {
        elemento.classList.add("fixed");
    } else {
        elemento.classList.remove("fixed");
    }
}