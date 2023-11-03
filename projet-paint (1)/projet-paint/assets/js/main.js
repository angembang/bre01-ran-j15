
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
    
    
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    
     // Sélection de tous les div du header
    let divsHeader = document.querySelectorAll("header div");
    
    // Boucle pour ajout de l'écouteur d'évenement à chaque div de header
    for(let j = 0; j < divsHeader; j++) {
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