const navItems = document.querySelectorAll("header .header-container nav ul li a");
const container = document.querySelector(".content-container");

let path = "https://jessjacks11.github.io/green-energy/hot-topics/artials/home.html";

function handleClick(ev) {
    ev.preventDefault();
    path = ev.target.href;
    handleAjax(path);

}

function handleAjax(urlValue) {
    fetch(urlValue)
        .then(function (rsp) {
            return rsp.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
}

handleAjax(path);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);
