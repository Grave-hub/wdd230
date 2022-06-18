const directoryURL = 'https://grave-hub.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

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

        businessimg.src = business.imageurl;
        name.innerHTML = business.name;
        addyphonenum.innerHTML = `Address: ${business.address} <br> Phone: ${business.phonenumber}`;
        siteLink.innerHTML = `Visit site: ${business.sitelink}`;
        membrlevel.innerHTML = `Member Level: ${business.memberlvl}`;

        card.append(name);
        card.append(addyphonenum);
        card.append(siteLink);
        card.append(membrlevel);

        cards.append(card);
    });
}

getBusineses();