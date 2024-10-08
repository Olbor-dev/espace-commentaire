let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    console.log("clic");
})


let position = document.getElementById("comment-list");
let test = document.createTextNode("Texte du test");
position.append(test);
