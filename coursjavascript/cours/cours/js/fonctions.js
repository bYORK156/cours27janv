//-------------------- LES FONCTIONS -------------------


// une fonction en Javascript est un bloc de code réutilisable  qui exécute une tache spécifique
// elle peut reçevoir des paramètre, effectuer des operations etr retourner  un résultat


/// on peut déclarer une fonction en utilisant les mot clé "function" 

function direBonjour() {
console.log("bonjour")


}

// ici direBonjour est une fonction qui affiche bonjour dans la console
// pour exécuter cetter fonction on doit l'appeler, ne pas oublier les parenthèses

direBonjour()  //affiche "bonjour" dans la console"


function console(message){

    console.log(message)
}
consol.log("message")


consol("j'écris mon message")


let b=12
consol(typeof b)


// creer une fonction reutilisable avec parametre qui multiplie par 2 une variable

let c=3
let d=4

// function *2{
//     console.log("5")

// console.log("5")


// correction

function fois2(n){

    return n*2
}

console.log( fois2(c))
console.log( fois2(d))
consol( fois2(d))


// deuxieme exo: écrire une fonction réutilisable avec paramètre qui écris un texte dans le dom avec write()

let text = "je suis le texte"
let text2 = "je suis le 2eme texte"

// function (write){

//     returnText
// }

console.log(write)
consol(write)



//correction

// let text = "je suis le texte"
// let text2 "je suis le2eme texte"

// function textDom(text){
//     document.write( "<h1")
// }
