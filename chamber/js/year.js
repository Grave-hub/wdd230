const d = new Date();
const year = d.getFullYear();
const clock = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("last_updated").textContent = document.lastModified;
document.getElementById("year").textContent = year;

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("datetoday").textContent = (d.toLocaleDateString("en-Uk", options));

const today = d.getDay();
const dayAnnounce = document.getElementById("announcement");

if(today === 1 || today === 2) {
    dayAnnounce.style.display = "block";
}
else {
    dayAnnounce.style.display = "none";
}