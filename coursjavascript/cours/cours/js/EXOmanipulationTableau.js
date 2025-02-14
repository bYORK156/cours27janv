// exo 1 operation de base sur un tableau

// crer un tableau contenant "pomme" "banane" "cerise" "orange"

let courses = [ "pomme", "banane", "cerise", "orange" ]
courses;

console.log (courses[3]);
console.log (courses[2])



// ajourter "kiwi" à la fin et "ananas" au début

let courses1 = [ "ananas", "pomme", "banane", "cerise", "orange", "kiwi" ]

console.log (courses[2]);
console.log (courses[0])



//correction: manipulation de tableau

const fruit=["pomme","banane", "cerise", "orange"]

const b=["pomme", "cerise"]
console.log(b)

// supprimer dernier élément

let myArray = [
    "ananas",
    "pomme",
    "banane",
    "cerise",
    "orange",
    "kiwi",
  ];
  

// affihcier la longueur du tableau

// utiliser les consoles console.log 

// exo 2 recherche Dans un tableau let nombres =[10,25,38,50]
// vérifier si le nombre est 30
correction: 
const fruit1=["pomme","banane","cerise","ananas"]

fruit.push("kiwi")
console.log("fruit",fruit)
fruit.unshift("ananas")
console.log("fruit",fruit)
fruit.pop()
console.log("fruit",fruit) // voir si dernier élément à été éffacé
console.log("longueur tableau", fruit.length)

let nombre=[10,25,45,38,50]

let contient30=nombre.includes(30) // includes retourne comme réponses soit par un boolean (true) ou (false)
// la variable contient30 stock la réponse de nombre.includes(30)
exemple: console.log(contient30) // dans cette exemple la réponse est "false"

console.log(contient30)
if(contient30===true){
    console.log("tableau contient bien 30")
}else{console.log("not 30")
}

//vérifier l'index 45

let i=nombre.indexOf(9)
console.log("index de 45 :",i)

let index2=nombre.indexOf(45)
console.log("index de 45 :",index2)


const tab5=[2,5,8,11,14,17]

const newTab=tab5.filter(
    function maFonction(choucroute){
        return choucroute > 10
    }
)
console.log(wetTab)

