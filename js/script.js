const ourTeam = [];

const wayne = {
    "name" : "Wayne",
    "surname" : "Barnett",
    "role" : "Founder and CEO",
    "image" : "wayne-barnett-founder-ceo.jpg"
}

ourTeam.push(wayne);

const angelaC = {
    "name" : "Angela",
    "surname" : "Caroll",
    "role" : "Chief Editor",
    "image" : "angela-caroll-chief-editor.jpg"
}

ourTeam.push(angelaC);

const walter = {
    "name" : "Walter",
    "surname" : "Gordon",
    "role" : "Office Manager",
    "image" : "walter-gordon-office-manager.jpg"
}

ourTeam.push(walter);

const angelaL = {
    "name" : "Angela",
    "surname" : "Lopez",
    "role" : "Social Media Manager",
    "image" : "angela-lopez-social-media-manager.jpg"
}

ourTeam.push(angelaL);

const scott = {
    "name" : "Scott",
    "surname" : "Estrada",
    "role" : "Developer",
    "image" : "scott-estrada-developer.jpg"
}

ourTeam.push(scott);

const barbara = {
    "name" : "Barbara",
    "surname" : "Ramos",
    "role" : "Graphic Designer",
    "image" : "barbara-ramos-graphic-designer.jpg"
}

ourTeam.push(barbara);

for(let i=0; i<ourTeam.length; i++){
    console.log(ourTeam[i]);
    for(let key in ourTeam[i]){
        console.log(key, ":", ourTeam[i][key]);
    }
}