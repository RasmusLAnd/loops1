
// når click på måne, skift til img af sun

let buttonElement = document.querySelector("#picture");

buttonElement.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("#picture").src = "img/sun.jpg";
});