/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/

const baseUrl = 'https://api.nationalize.io';
let textoFind = ''
function handleInput(event) {
    textoFind += event['data'];
    //console.log(textoFind)
    return textoFind;
    //console.log(event);
}
document.querySelector("input").addEventListener("input", handleInput);
var data;
function botonClick(event){
    fetch(`${baseUrl}?name=${textoFind}`)
    .then(response=>response.json())
    .then(data => console.log(data))
    .then(textoFind = '')
    .then(document.body.appendChild(elemento))
    console.log('data: ',this.data)
    elemento.innerHTML =`El nombre ${textoFind} tiene un porcentaje X de ser de Z`;
}
document.querySelector('button').addEventListener('click',botonClick);


/*2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/

let elemento = document.createElement('div');



