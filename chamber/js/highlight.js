const directoryURL = 'json/goldData.json';
const highlighted = document.getElementById("spotlights");

async function getHighlights() {
    let response = await fetch(directoryURL);
    if (response.ok) {
        let data = await response.json();
            buildHighlights(data);
    } else {
        throw Error(response.statusText);
    }
}
function buildHighlights(highlights) {
    highlights.highlightBus.forEach(highlight => {
        let card = document.createElement('section');
        let highlightimg = document.createElement('img');
        let name = document.createElement('h1');
        let addyphonenum = document.createElement('p');
        let siteLink = document.createElement('p');

        highlightimg.setAttribute('src', highlight.imageurl);
        highlightimg.setAttribute('alt', `Image of ${highlight.name}`);
        highlightimg.setAttribute('loading', 'lazy');

        name.innerHTML = highlight.name;
        addyphonenum.innerHTML = `Address: ${highlight.address} <br> Phone: ${highlight.phonenumber}`;
        siteLink.innerHTML = `<a href="${highlight.sitelink}">Website</a>`;


        card.append(highlightimg);
        card.append(name);
        card.append(addyphonenum);
        card.append(siteLink);

        highlighted.append(card);
    });
}
getHighlights();