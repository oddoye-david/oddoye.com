var links = document.querySelectorAll(".js-fx");
var panel = document.querySelector(".flick");

function flickOff() {
    panel.classList.remove("flick-on");
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        panel.classList.add("flick-on");
        setTimeout(flickOff, 1000)
    });
}
console.log('Loaded')