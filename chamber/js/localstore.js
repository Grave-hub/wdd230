const daysFrom = document.getElementById("userVisit");

let lastVisit = Number(window.localStorage.getItem("last-time"));

if(lastVisit !== 0) {
    daysFrom.innerHTML = Math.floor((Date.now() - lastVisit) / 86400000);
} else {
    daysFrom.innerHTML = '<1';
}
localStorage.setItem("last-time", Date.now());