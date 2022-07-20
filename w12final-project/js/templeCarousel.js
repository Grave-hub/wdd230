const carouselData = 'json/templeInfo.json';
const templeCards = document.querySelector('.gridStyle');

async function getTemples() {
    let response = await fetch(carouselData);
    if (response.ok) {
        let temples = await response.json();
        buildtmplCard(temples);
    } else {
        throw Error(response.statusText);
    }
}

function buildtmplCard(temple){
    temple.templeInfo.forEach(temple => {
        let card = document.createElement('section');
        let tmplName = document.createElement('p');
        let cardImg = document.createElement('img');
        let dedicated = document.createElement('p');
        let tmplAddress = document.createElement('p');
        let tmplPhonenum = document.createElement('p');
        let closedDates = document.createElement('p');
        let sessionLinks = document.createElement('a');

        cardImg.setAttribute('src', temple.imgSource);
        cardImg.setAttribute('alt', `image of the ${temple.name}`);
        cardImg.setAttribute('loading', 'lazy');
        tmplName.innerHTML = temple.name;
        dedicated.innerHTML = `<bold>Dedicated:</bold> ${temple.dedicationDate}`;
        tmplAddress.innerHTML = `Address: ${temple.addresses}`;
        tmplPhonenum.innerHTML = `Phone number: ${temple.templePhone}`;
        closedDates.innerHTML = `Dates Closed: <br>${temple.templeClosed}`;
        
        sessionLinks.setAttribute('href', temple.ordinanceSchedule);
        sessionLinks.innerHTML = 'Session schedule';
        sessionLinks.setAttribute('rel', 'noopener noreferrer');
        sessionLinks.setAttribute('target', '_blank');

        card.append(tmplName);
        card.append(cardImg);
        card.append(dedicated);
        card.append(tmplAddress);
        card.append(tmplPhonenum);
        card.append(closedDates);
        card.append(sessionLinks);

        templeCards.append(card);
        });

}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  firstTemple(slideIndex);
}

function firstTemple(slideIndex) {
    fetch(carouselData)
    .then((response) => response.json())
    .then((temples) => {
        templeNum = slideIndex-1;
        const selectedTemple = temples.templeInfo[templeNum];
        let currentImg = document.querySelector(`.myslidesImg${slideIndex}`);
        let currentText = document.querySelector(`.slidestext${slideIndex}`);
        let currentDedict = document.querySelector(`#dedicated${slideIndex}`);
        currentImg.setAttribute('src', selectedTemple.imgSource);
        currentImg.setAttribute('loading', "lazy");
        currentImg.setAttribute('alt', `The ${selectedTemple.name}`);
        currentText.innerHTML = selectedTemple.name;
        currentDedict.innerHTML = `Dedicated: ${selectedTemple.dedicationDate}`;
    });
}

const gridbutton = document.querySelector("#cardsGrid");
const listbutton = document.querySelector("#cardsList");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

const stars = document.querySelectorAll('#starRank a');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    let currentSlide = document.querySelector(`.slidestext${slideIndex}`);
    let currentText = currentSlide.innerHTML;
    localStorage.setItem( currentText, `was given ${index+1} star(s) `);
  })
});

getTemples();
