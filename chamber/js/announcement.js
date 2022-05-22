const d = new Date();
const today = d.getDay();
const dayAnnounce = document.getElementById("announcement");

if(today === 1 || today === 2) {
    dayAnnounce.style.display = "block";
}
else {
    dayAnnounce.style.display = "none";
}