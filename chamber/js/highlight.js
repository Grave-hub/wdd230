const directoryURL = 'https://grave-hub.github.io/wdd230/chamber/json/data.json';
const highlighted = document.querySelector('.spotlights');
console.log(directoryURL);

async function getHighlights() {
    let response = await fetch(directoryURL);
    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        buildHighlights(data);
    } else {
        throw Error(response.statusText);
    }
}
function buildHighlights(highlight) {
        let card = document.createElement('section');
        let highlightimg = document.createElement('img');
        let name = document.createElement('h1');
        let addyphonenum = document.createElement('p');
        let siteLink = document.createElement('p');

        highlightimg.setAttribute('src', highlight.imageurl);
        highlightimg.setAttribute('alt', `Image of ${highlight.name}`);
        highlightimg.setAttribute('loading', 'lazy');

        card.append(highlightimg);
        card.append(name);
        card.append(addyphonenum);
        card.append(siteLink);

        highlighted.append(card);
}
getHighlights()