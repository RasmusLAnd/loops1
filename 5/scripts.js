// opret variabel til button

//ved click opret div element
// opret variabel til inputfelt.value
// vis indtastet navn i div
// gem i localStorage
//opret knap til fjernelse af indhold
//tildel funktionalitet til den "nye" knap"

let buttonElement = document.querySelector("#ok");

//kalder funktionen "load...localstorage"
loadFromLocalStorage();

function loadFromLocalStorage(){
    if (localStorage != "" && localStorage.length > 0 ){
        // tjek først om newdiv eksisterer, før du fjerner den.
        if (document.querySelector(".newdiv")){
            document.querySelector(".newdiv").remove();}
        else{}

        let old = document.createTextNode(localStorage.getItem("name"));
        let element = document.createElement("div");
        element.appendChild(old);
        // console.log(element);
        document.querySelector(".body").appendChild(element);
       
    } 
    else {
        console.log("LS er tom");
    }
    
}

buttonElement.addEventListener("click", function(event){
    event.preventDefault();
    let div = document.createElement("div");
    div.className = "newdiv";
    let inputText = document.querySelector("#tekst").value;
    let textnode = document.createTextNode(inputText);
    console.log(typeof inputText);
    div.appendChild(textnode);
    document.querySelector(".body").appendChild(div);
    let value2 = textnode.wholeText;
    // benytter wholeText, da indholdet af textnode er et object
    localStorage.setItem("name", value2);
    
    // opret knap til fjernelse af indhold fra LS
    let delButton = document.createElement("button");  
    delButton.innerHTML="Delete localStorage";  
    delButton.id = "delKnap";
    document.querySelector(".body").appendChild(delButton);

    // tildel funktionalitet til knappen
    let buttonElement2 = document.querySelector("#delKnap");
    buttonElement2.addEventListener("click",function(event){
        event.preventDefault();
        document.querySelector(".newdiv").remove();
        localStorage.clear();
    });

});