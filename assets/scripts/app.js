
let errorMessage = document.querySelector("#error-message");
let bouton = document.querySelector("button");
let inputPrenom = document.querySelector("#first-name");
let inputNom = document.querySelector("#last-name");
let inputMessage = document.querySelector("#message");

bouton.addEventListener("click", function () {
    console.log("clic");
    //vérification champs non vide
    let prenom = inputPrenom.value;
    let nom = inputNom.value;
    let message = inputMessage.value;
    if (prenom === "" || nom === "" || message === "") {
        console.log("1 champ vide");
        //affichage message erreur
        errorMessage.setAttribute("style", "display: ruby");
    } else {
        errorMessage.setAttribute("style", "display: none");
        nouveauCommentaire();
    }
})


function nouveauCommentaire() {
    let prenom = inputPrenom.value;
    let nom = inputNom.value;
    let message = inputMessage.value;   
    console.log(prenom + nom + message);
    let nouveauH3 = document.createElement("h3");
    nouveauH3.textContent = nom;
    position.append(nouveauH3);
}

let position = document.getElementById("comment-list");
let test = document.createTextNode("Texte du test");
let h3Commentaire = document.getElementsByTagName("h3")[3];
let h3Attribut = h3Commentaire.attributes;
position.append(h3Attribut);
//position.append(test);
