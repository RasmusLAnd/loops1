//opret en calculator med to inputfelter og en dropdown med +,-,*, /..

let buttonElement = document.querySelector("#calculate");
let udprint =[];

buttonElement.addEventListener("click", function(event){
    event.preventDefault();
    let val1= document.querySelector("#firstValue").value ;
    let val2= document.querySelector("#secondValue").value;
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    let result;

   let valgMath = document.querySelector("#valg").value;
     
    switch(valgMath){
        default:
        break;

        case "+":
        result = val1+val2;
        break;

        case "-":
        result = val1-val2;
        break;

        case "*":
        result = val1*val2;
        break;

        case"/":
        result = val1/val2;
        break        
    }      

    udprint.push(result);
    
    let ul = document.createElement('ul');

    for (i=0; i<udprint.length; i++ ){
        let li = document.createElement ('li');
        let tekst = document.createTextNode(udprint[i]);
        li.appendChild(tekst);
        ul.appendChild(li);
        console.log(ul);
        document.querySelector(".body").appendChild(ul);
}
});

