






















































































































// - - - - - - - - script accordéon - - - - - - -

let acc = document.getElementsByClassName("column_nav");
let panel = document.getElementsByClassName("column_nav_list");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    panel[i].classList.toggle("is-hidden");
  })
}






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
    e.preventDefault();
    element.removeEventListener("click", onClick);  
}

button_carroussel.forEach(element => {
    
    element.addEventListener("click", onClick);
   
});















    

