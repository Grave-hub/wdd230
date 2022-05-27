document.getElementById('temp').value = temperature;
document.getElementById('windS').value = windSpeed;

if (temperature <= 50 && windSpeed > 3.0) {
    function windChill(temperature, windSpeed) {
        return 35.74 + (0.6215 * temperature) - (35.75 *(windSpeed ^ 0.16)) + (.4275(temperature * (windSpeed ^ 0.16)));
    }
    document.getElementById("windC").innerHTML = windChill;
} else {
    document.getElementById("windC").innerHTML = "N/A";
}
