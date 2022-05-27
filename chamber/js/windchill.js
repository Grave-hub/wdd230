const tempSpan = document.getElementById('temp');
const windSpan = document.getElementById('windS');

const temperature = tempSpan.textContent;
const windSpeed = windSpan.textContent;

function chillFunction(temperature, windSpeed) {
    const w = parseInt(windSpeed);
    const t = parseFloat(temperature);
    return (35.74 + (0.6215 * t) - (35.75 * (Math.pow(w, .16))) + (.4275 * (t * (Math.pow(w, .16)))));
} 
let windChill = chillFunction(temperature,windSpeed).toFixed(1);

if (temperature <= 50 && windSpeed > 3.0) {
    const element = document.getElementById("windC")
    element.textContent = windChill;
} else {
    document.getElementById("windC").innerHTML = "N/A";
}
