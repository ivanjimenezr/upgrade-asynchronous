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

function botonClick(event){
    fetch(`${baseUrl}?name=${textoFind}`)
    .then(response=>response.json())
    .then(data => console.log(data))
    .then(textoFind = '');
}
document.querySelector('button').addEventListener('click',botonClick);

