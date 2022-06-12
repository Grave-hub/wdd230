const d = new Date();
const year = d.getFullYear();
const clock = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("last_updated").textContent = document.lastModified;
document.getElementById("year").textContent = year;

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("datetoday").textContent = (d.toLocaleDateString("en-Uk", options));

// announcement code
const today = d.getDay();
const dayAnnounce = document.getElementById("announcement");
if(today === 1 || today === 2) {
    dayAnnounce.style.display = "block";
}
else {
    dayAnnounce.style.display = "none";
}
const formDate = document.getElementById('join-form-date');

formDate.value = d;
// Window adjustment trial
// function windowAdjust() {
//     const width = window.innerWidth;
//     if (width <= 300) {
//         document.getElementById('screenWidth').textContent = "Small sized image";
//     } else if (width <= 600) {
//         document.getElementById('screenWidth').textContent = "Medium sized image";
//     } else if (width <= 900) {
//         document.getElementById('screenWidth').textContent = "Large sized image";
//     }
// }

// window.addEventListener('resize', windowAdjust);