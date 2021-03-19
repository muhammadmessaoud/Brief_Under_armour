

let nouveaute = document.getElementById("nouveaute");
let chaussures = document.getElementById("chaussures");
let homme = document.getElementById("homme");
let femme = document.getElementById("femme");
let enfant = document.getElementById("enfant");
let bonneAffaires = document.getElementById("bonnesaffaires") 
let accor1 = document.getElementById("accordeon1");
let accor2 = document.getElementById("accordeon2");
let accor3 = document.getElementById("accordeon3");
let accor4 = document.getElementById("accordeon4");
let accor5 = document.getElementById("accordeon5");
let accor6 = document.getElementById("accordeon6")



nouveaute.addEventListener("mouseover", addFunction1);
nouveaute.addEventListener("mouseleave",removeFunction1);
accor1.addEventListener("mouseover", addFunction1);
accor1.addEventListener("mouseleave",removeFunction1);

function addFunction1() {
  accor1.classList.add("red")
};

function removeFunction1() {
    accor1.classList.remove("red")
};

chaussures.addEventListener("mouseover", addFunction2);
chaussures.addEventListener("mouseleave",removeFunction2);
accor2.addEventListener("mouseover", addFunction2);
accor2.addEventListener("mouseleave",removeFunction2);

function addFunction2() {
  accor2.classList.add("red")
};

function removeFunction2() {
    accor2.classList.remove("red")
};

homme.addEventListener("mouseover", addFunction3);
homme.addEventListener("mouseleave",removeFunction3);
accor3.addEventListener("mouseover", addFunction3);
accor3.addEventListener("mouseleave",removeFunction3);

function addFunction3() {
  accor3.classList.add("red")
};

function removeFunction3() {
    accor3.classList.remove("red")
};

femme.addEventListener("mouseover", addFunction4);
femme.addEventListener("mouseleave",removeFunction4);
accor4.addEventListener("mouseover", addFunction4);
accor4.addEventListener("mouseleave",removeFunction4);

function addFunction4() {
  accor4.classList.add("red")
};

function removeFunction4() {
    accor4.classList.remove("red")
};

enfant.addEventListener("mouseover", addFunction5);
enfant.addEventListener("mouseleave",removeFunction5);
accor5.addEventListener("mouseover", addFunction5);
accor5.addEventListener("mouseleave",removeFunction5);

function addFunction5() {
  accor5.classList.add("red")
};

function removeFunction5() {
    accor5.classList.remove("red")
};

bonneAffaires.addEventListener("mouseover", addFunction6);
bonneAffaires.addEventListener("mouseleave",removeFunction6);
accor6.addEventListener("mouseover", addFunction6);
accor6.addEventListener("mouseleave",removeFunction6);

function addFunction6() {
  accor6.classList.add("red")
};

function removeFunction6() {
    accor6.classList.remove("red")
};


let affichage = document.getElementById("affichage")
let listPays = document.getElementById("list-pays")

affichage.addEventListener("mouseover", addFunction10);
affichage.addEventListener("mouseleave",removeFunction10);
listPays.addEventListener("mouseover", addFunction10);
listPays.addEventListener("mouseleave",removeFunction10);

function addFunction10() {
  listPays.classList.add("block")
};

function removeFunction10() {
    listPays.classList.remove("block")
};


const iconBurger = document.getElementById("container-icon-burger");

iconBurger.addEventListener("click", change,);

function change() {
  iconBurger.classList.toggle('change');
}





// - - - - - - - - script accordéon - - - - - - -

let acc = document.getElementsByClassName("column_nav");
let panel = document.getElementsByClassName("column_nav_list");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    panel[i].classList.toggle("is-hidden");
  })

// - - - - - - - script carroussel - - - - - - - - 
let cards_tendance = document.querySelectorAll(".card-tendance");
let index = 0;
let imageActuelle = [];

for (index; index < 5; index++) {
    imageActuelle.push(cards_tendance[index]);

    imageActuelle.forEach(cardActuelle =>{
        cardActuelle.classList.add("carrou-is-hidden");
    })

}

let button_carroussel = document.querySelectorAll(".button-tendance");

// pour chaque boutons au click on veut afficher /cacher les card du carroussel

let onClick = function afficheCards(e) {
    cards_tendance.forEach(card=>{
        let containHidden = card.classList.contains("carrou-is-hidden");
        if (containHidden) {
            card.classList.remove("carrou-is-hidden");
        }else{
            card.classList.add("carrou-is-hidden");
        }
    });
    // e.preventDefault();
    // element.removeEventListener("click", onClick);  
}

button_carroussel.forEach(element => {
    
    element.addEventListener("click", onClick);
   
});







