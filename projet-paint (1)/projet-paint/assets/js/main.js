
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;

    // le code de l'étape 1 se passe ici
    
    // Sélection de tous les div du header
   /*
   let divsHeader = document.querySelectorAll("header div");
    
    // Vérification du nombre des couleurs % aux div de header
    if(colors.length !== divsHeader.length) {
        // Affichage de l'erreur sur la console
        console.error("La palette des couleurs ne correspond pas au nombre de div de header");
        // sortir de la fonction
        return;
    }
    
     // Boucle pour attribution de chaque couleur à une div de header
     for(let i = 0; i < divsHeader.length; i++) {
      let div = divsHeader[i];
      div.style.backgroundColor = colors[i];
      
      // Ajout de l'écouteur d'événement pour chaque div
       div.addEventListener("click", selectColor);
     }
     */
    
    
}


window.addEventListener("DOMContentLoaded", function(){
    // Bonus 2
    // Déclaration de la variable colors et attribution de 16 couleurs à cette variable
    let colors = (["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#4a4e4d", "#8a8c8e", "#6b8c42", "#b63a3a", "#f6f658", "#5c7a85", "#f88f01", "#c26d5e"]);
        
    // Bonus 2
    // appel de la fonction loadPalette
    loadPalette(colors);
    
    // Selection de header
    let header = document.querySelector("header");
    
    // Boucle pour création de huit div supplémentaire dans header
     for (let m = 0; m < 8; m++) {
         // création de divs
        let newHeaderDivs = document.createElement("div");
        /*
        // Ajout de la couleur aux divs
        newHeaderDivs.style.backgroundColor = colors[m]; */
        header.appendChild(newHeaderDivs);
        
    }
    // Bonus 3
    
     // Sélection de tous les div du header
     let divsHeader = document.querySelectorAll("header div");
     
     // Boucle sur chaque div du header pour création et attachement d' input du type color
     for (let i = 0; i < divsHeader.length; i++) {
        let input = document.createElement("input");
        input.type = "color";
        input.addEventListener("input", function(event) {
            // attribution de la valeur sélectionnée dans l'input de type color au style color de la div de header.
            divsHeader[i].style.backgroundColor = event.target.value;
        });
        divsHeader[i].appendChild(input);
    }
     /*
    // Vérification du nombre des couleurs % aux div de header
     if(colors.length !== divsHeader.length) {
        // Affichage de l'erreur sur la console
        console.error("La palette des couleurs ne correspond pas au nombre de div de header");
        // sortir de la fonction
        return;
    }
    // Boucle pour attribution de chaque couleur à une div de header
     for(let i = 0; i < divsHeader.length; i++) {
      let div = divsHeader[i];
      div.style.backgroundColor = colors[i];
      
      // Ajout de l'écouteur d'événement pour chaque div
       div.addEventListener("click", selectColor);
     }
    
    

    // le code de l'étape 2 se passe ici
    
    /* // Sélection de tous les div du header
    let divsHeader = document.querySelectorAll("header div");  */
    
    // Boucle pour ajout de l'écouteur d'évenement à chaque div de header
     for(let j = 0; j < divsHeader.length; j++) {
        divsHeader[j].addEventListener("click", selectColor);
    }
    // Text de fonctionnalité
    console.log(getSelectedColor());
    
    


    // le code de l'étape 3 se passe ici
    
    // Sélection de tous les div du header et de divs de divs du main
    let divsHeader2 = document.querySelectorAll("header div");
    let divsMain = document.querySelectorAll("main div div");
    
    // Stockage à null de la couleur sélectionnée
    let color = null;
    
    // Ajout de l'écouteur d'évenements à chaque div de header
    for(let k = 0; k < divsHeader2.length; k++) {
        divsHeader2[k].addEventListener("click", function() {
            // Récupération de la dernière couleur sélectionnée
            color = getSelectedColor();
        });
    }
    // Ajout de l'écouteur d'événements pour les divs des divs du main
    for(let l = 0; l < divsMain.length; l++) {
        divsMain[l].addEventListener("click", function() {
            // Vérifier si la couleur est différent de null
            if(color !== null) {
                // étape IV
                // Vérifier si la div du main contient déjà une couleur
                if(divsMain[l].style.backgroundColor) {
                    // éffacer la couleur
                    divsMain[l].style.backgroundColor = "";
                } else {
                   // étape 3
                   divsMain[l].style.backgroundColor = color;
                }
            }
                
        });
    } 
    
});