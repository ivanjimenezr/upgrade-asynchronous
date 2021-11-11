//Iteración #2: async-await

/*2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut();*/

let runTimeOut = async () =>{
    setTimeout(await function (){
    console.log('Time out!')
    }, 2000);
    console.log('test')
}
runTimeOut();

/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
 Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => console.log(characters));
}*/

async function getCharacters () {
    let llamarFech = await fetch('https://rickandmortyapi.com/api/character');
    let character = await llamarFech.json();
    console.log(character);
}

getCharacters();
