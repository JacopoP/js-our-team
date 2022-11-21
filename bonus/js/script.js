const container = document.getElementById("container");
const ourTeam = [];

// creazione objects
const wayne = {
    "image" : "wayne-barnett-founder-ceo.jpg",
    "name" : "Wayne",
    "surname" : "Barnett",
    "role" : "Founder and CEO"
}

ourTeam.push(wayne);

const angelaC = {
    "image" : "angela-caroll-chief-editor.jpg",
    "name" : "Angela",
    "surname" : "Caroll",
    "role" : "Chief Editor"
}

ourTeam.push(angelaC);

const walter = {
    "image" : "walter-gordon-office-manager.jpg",
    "name" : "Walter",
    "surname" : "Gordon",
    "role" : "Office Manager"
}

ourTeam.push(walter);

const angelaL = {
    "image" : "angela-lopez-social-media-manager.jpg",
    "name" : "Angela",
    "surname" : "Lopez",
    "role" : "Social Media Manager"
}

ourTeam.push(angelaL);

const scott = {
    "image" : "scott-estrada-developer.jpg",
    "name" : "Scott",
    "surname" : "Estrada",
    "role" : "Developer"
}

ourTeam.push(scott);

const barbara = {
    "image" : "barbara-ramos-graphic-designer.jpg",
    "name" : "Barbara",
    "surname" : "Ramos",
    "role" : "Graphic Designer"
}

ourTeam.push(barbara);

// creazione cards
for(let i=0; i<ourTeam.length; i++){
    const newElement = document.createElement("div");
    // inserimento immagine
    newElement.innerHTML += `<img src="img/${ourTeam[i].image}">`
    // inserimento nome e cognome
    newElement.innerHTML += `<h3>${ourTeam[i]["name"]} ${ourTeam[i]["surname"]}</h3>`
    // inserimento ruolo
    newElement.innerHTML += `<h4>${ourTeam[i]["role"]}</h4>`

    newElement.classList += "card";

    container.appendChild(newElement);
}
