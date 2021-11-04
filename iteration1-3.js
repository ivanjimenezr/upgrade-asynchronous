/*2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.*/

const baseUrl = 'https://api.nationalize.io';
let textoFind = '';
let textoPrint = '';
function handleInput(event){
    textoFind += event['data'];
    console.log(textoFind);
}
document.querySelector('input').addEventListener('input', handleInput);

console.log('textoPrint: ',textoPrint)

function botonClick(event){
    fetch(`${baseUrl}?name=${textoFind}`)
    .then(response=>response.json())
    .then(data=>{
        textoPrint=`El nombre ${data.name} tiene`;
        let arr = data.country;
        for (i=0;i < arr.length;i++){
            let country_id = arr[i]['country_id'];
            let probability = arr[i]['probability'];
            probability = probability.toFixed(2)*100+'%';
            let fin = ''
            if (i+1 < arr.length){
                fin = ',';
            }else {
                fin = '.';
            }
            textoPrint = textoPrint + ` un ${probability} de ser ${country_id}${fin}`;
        }
        let crearDiv = document.createElement('div')
        document.body.appendChild(crearDiv);
        crearDiv.id = data.name;
        let textosJuntos = document.createTextNode(textoPrint)
        crearDiv.appendChild(textosJuntos)
       
        //Creamos el botón de cierre
        let botonRemove = document.createElement('button')
        botonRemove.id = data.name;
        let textoX = document.createTextNode('X')
        botonRemove.appendChild(textoX)
        crearDiv.appendChild(botonRemove)
        function botonRemove2 (event) {
            console.log('funcion de borrado')
            console.log(document.getElementById(data.name))
            document.getElementById(data.name).remove()
        }
        document.getElementById(data.name).addEventListener('click', botonRemove2)
        console.log('textoPrint: ', textoPrint)
    })
    .then(textoFind = '')
    let valueInput = document.querySelector('input')
    valueInput.value = null;
}
document.querySelector('button').addEventListener('click',botonClick)
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'Enter') {
      botonClick();
    }
  }, false);