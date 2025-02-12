
//------- LES CONDITIONS --------

// en javascript une condition permet d'executer un bloc  de code  seulement si certains conditions sont vrais (true)


/// strucuture avec "if"

// if veut dire SI
// ELSE veut dire SINON
// nb1=49
// if(nb1 < 50){
//     // si la condition dans les paranethèses est vrai alors le code à l'intérieur des accolades s'éxecute

//     alert("je suis inférieur à 50")

// }



//  if(true){
// // si la codnition est vrai , le conde s'exécute
// }

// else{
//     //si la conditon estr fausse c'est le code qui s'execute
// }


// //exemple

// let  nb2=30
// if( nb2 < 50 ){  // SI LA condition  est vrai ici si nb2 est inférieur ou égal à 50 alors le code s'execute
//     alert("nb2 est inférieur à 50")

// }

// else{ /// sinon si la conditiipon est fausse  c'est ce cpde qui s'execute 
//     alert("nb2 est superier à 50")
// }

// let age= prompt('quel est ton âge?')
// console.log(age);
// console.log(typeof age);



// EXERCICE

// on va utiliser les conditions pour vérifier l'age d'un user

// s'il a plus de 25 ans ou plus alors on lui souhaite bienvenue dans la console
// on lui dit aurevoir  dans la console



// let maxAge=25

// let age= prompt('quel est ton age?')

// // console.log("let age comme valeur:" ,age " et son type est :" ,typeof age)

// // correction

// // pseudo-code: if age <= { code }else{ code }



// if(age<=maxAge){
//     console.log("a revoir")
// }else{
//     console.log("bienvenue")
// }


//isNaN (si c'est pas un nombre)


    // si age n'est pas un nombre alors le code s'éxecute 

// if (isNaN(age)){
//     alert("erreur : données invalides, écriver un numéro")
//     age=number(prompt('quel est ton age?'))    
//     //si age est un nombre mais est inférieur à 25 alors le code s'exécute
// }else if(age<= maxAge){alert("rentre chez toi petit")

// }else{
//     alert ("bienvenue")
// }

//SWITCH 
// L'instruction switch est utilisé pour remplacer une série de conditions "if else else if" lorsque l'on doit comparer une valeurs à plusieurs cas possible

const jour="dimanche"

switch(jour){
    case"lundi":
        console.log("début de semaine")
        break
    
    case "mardi":
    case "mercredi":
        console.log("milieu de semaine")
        break
    case "jeudi":
    case "vendredi":
        console.log("fin de semaine")
        break
    case "samedi":
    case "dimanche":
        console.log("c'est le weekend")
        break
    default:
        console.log("jour inconnu")
    
}
