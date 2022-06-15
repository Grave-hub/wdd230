const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    prophets.forEach(displayProphets);
  });
const prophets = jsonObject['prophets'];
function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    
} 
