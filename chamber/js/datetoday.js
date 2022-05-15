const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today  = new Date();
document.getElementById("datetoday").textContent = (today.toLocaleDateString("en-US", options));
