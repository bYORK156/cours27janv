alert("bonjour Moussa")


// syntaxe de base : 


// commentaire sur une ligne avec 2 "//"

/* commentaire sur plusideurs lignes
je suis la deuxiemee ligne.

*/

// -- 1 : décalrer une variable en JS

// en JS il ya DEUX variables "let" et "const"

// VAR n'est plus trop utilisé ( et si utitlisé il faut justifié)
// *
// 
// pour déclarer une variable:
// "let"+nom 
// exemple: let nom;
// --2 affecter une valeur à une variable
nom="facundo";

let ville="paris"; // on déclare une variable ou on lui affect une valeur en meme temsp

console.log(ville);

ville="londre";

console.log(ville);

//const prenom; (une variable "const" je dois le déclarer et lui affecté directement une valeur sinon erreur)

// cont prenom; une erreur s'affiche

const prenom="Moussa";
console.log(prenom);

// on ne peut pas fonner uenn autre valeuir à une variable const une erreur saffcihera dans la console
//prenom="ousmane" -----> erreur


// ---03 affciher une boite de dialogue

// alert ("je suis une boite de dialogue")

// ---04 affciher dans la console avecv console.log()
console.log("qui est la personne?:" , prenom);

// -----------------------LES TYPES DE VARIABLES-----------------------



// --1 les chaines de caractères (string) : cest du texte en quelque sorte
// un string est entouré de guillemets obligatoirements

let vacances="2017";
let destination="pantin"


// --2 les nombres entiers (integer === int (number))
// pas de guillemets
let annee = 2017

//--3 les nombres décimaux avec "." (float)
// sans guillemets
let nombre_a_virgule=5.32; 

//--4 les booléens TRUE et FALSE 
let boolean_false=false
let boolean_true=true

// --5 TYPEOF permet de connnaitre le type de la variable 

console.log("année :" ,annee)
console.log("type d'année :", typeof annee);

console.log("boolean :" , typeof boolean_false); 
console.log("type de vacances :" , typeof vacances); 


console.log("type en int (number) : " , parsInt (vacances)); 


// string to  number
let vacances_number=parsInt(vacances)

// parseInt: pour passer un string en nombre (ex: pour récuperer les données renseignés d'un formulaire)

// number ou boolean to string
console.log(" vacances_number to string" ,vacances_number.toString())

console.log("boolean to string : ", boolean_false.toString())

// string to float 
let unChiffre= "3.45"
console.log ("string to number", parseInt(unChiffre))//3 ne prend pas la décimale
console.log ("string to float", parseInt(unChiffre))//3.45








