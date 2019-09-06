
//for hvert element i array, oprettes textboks,
//  appendes li i UL,
//  UL appends til body


let cool = ["køre bil", "sove", "hygge med familien", "drikke øl", "kysse min kone"];
let ul = document.createElement('ul');

for (i=0; i<cool.length; i++ ){
    let li = document.createElement ('li');
    let tekst = document.createTextNode(cool[i]);
    li.appendChild(tekst);
    ul.appendChild(li);
    document.querySelector(".body").appendChild(ul);
}