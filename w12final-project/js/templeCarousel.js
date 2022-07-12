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
        dedicated.innerHTML = `Dedicated: ${temple.dedicationDate}`;
        tmplAddress.innerHTML = `Address: ${temple.addresses}`;
        tmplPhonenum.innerHTML = `Phone number: ${temple.templePhone}`;
        closedDates.innerHTML = temple.templeClosed;
        
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
getTemples();
// let btnRight = document.querySelector("#rightarrow");
// let btnLeft = document.querySelector("#leftarrow");

// function firstTemple() {
//     fetch(carouselData)
//     .then((response) => response.json())
//     .then((temples) => {
//         let templeNum = 0;
//         function up() {
//             templeNum +=1;
//         }
//         function down() {
//             templeNum -=1;
//         }
//         btnRight.addEventListener('click', (up));
//         btnLeft.addEventListener('click', (down));

//         console.log(templeNum);
//         const firstTemple = temples.templeInfo[templeNum];
//         document.getElementById("carouselTemplate").src = firstTemple.imgSource;
//         let templeName = document.querySelector(".temple-name");
//         let templeLocation = document.querySelector(".temple-location");
//         let templeDedication = document.querySelector(".temple-dedicated");
//         templeName.innerHTML = firstTemple.name;
//         templeLocation.innerHTML = firstTemple.location;
//         templeDedication.innerHTML = firstTemple.dedicationDate;
//     });
// }

// firstTemple();
