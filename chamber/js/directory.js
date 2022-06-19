const directoryURL = 'https://grave-hub.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.grid');

async function getBusineses() {
    let response = await fetch(directoryURL);
    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        buildCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildCards(business) {
    business.businesses.forEach(business => {
        let card = document.createElement('section');
        let businessimg = document.createElement('img');
        let name = document.createElement('h1');
        let addyphonenum = document.createElement('p');
        let siteLink = document.createElement('p');
        let membrlevel = document.createElement('p');

        businessimg.setAttribute('src', business.imageurl);
        businessimg.setAttribute('alt', `Image of ${business.name}`);
        businessimg.setAttribute('loading', 'lazy');
        name.innerHTML = business.name;
        addyphonenum.innerHTML = `Address: ${business.address} <br> Phone: ${business.phonenumber}`;
        siteLink.innerHTML = `Visit site: <a href="${business.sitelink}">Website</a>`;
        membrlevel.innerHTML = `Member Level: ${business.memberlvl}`;

        card.append(businessimg);
        card.append(name);
        card.append(addyphonenum);
        card.append(siteLink);
        card.append(membrlevel);

        cards.append(card);
    });
}

const gridbutton = document.querySelector("#gridselect");
const listbutton = document.querySelector("#listselect");
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

getBusineses();