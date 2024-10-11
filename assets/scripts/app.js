//Variables de départ
let errorMessage = document.querySelector("#error-message");
let bouton = document.querySelector("button");
let inputPrenom = document.querySelector("#first-name");
let inputNom = document.querySelector("#last-name");
let inputMessage = document.querySelector("#message");

//Remplace le bouton de type "submit" par un type "button" (empêchele rechargement de la page)
bouton.setAttribute("type", "button");

//Actions sur le bouton "Envoyer"
bouton.addEventListener("click", function () {
    console.log("clic");//Contôle du clic
    //vérification champs non vide
    const prenom = inputPrenom.value;
    const nom = inputNom.value;
    const message = inputMessage.value;
    if (prenom === "" || nom === "" || message === "") {
        console.log("au moins 1 champ vide");//Contrôle de la condition
        //affichage message erreur
        errorMessage.setAttribute("style", "display: ruby");
    } else {
        //efface le message erreur
        errorMessage.setAttribute("style", "display: none");
        //affiche le nouveau commentaire
        commentaire();
    }
})

//Fonction qui affiche le nouveau commentaire et réinitialise le formulaire
function commentaire () {
    const prenom = inputPrenom.value;
    const nom = inputNom.value;
    const message = inputMessage.value;
    const position = document.querySelector("#comment-list");
    const nouveauCommentaire = document.createElement("div");
    nouveauCommentaire.setAttribute("class", "flex space-x-4 text-sm text-gray-500");
    position.appendChild(nouveauCommentaire);
    nouveauCommentaire.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${message}</p>
            </div>
        </div>`;
    document.querySelector("#last-name").value = "";
    document.querySelector("#first-name").value = "";
    document.querySelector("#message").value = "";
}
