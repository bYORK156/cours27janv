
// COMPARAISONS


/// assignation (=)

// "="est utilisé poir assigné une valeur

alert("hello moussa")

let nb1=123 // number valeur ===123
let nb2="123" // string valeur  === 123


// l'operateur de comparaison  == signifie "éagle à " mais permet d'utiliser que les valeurs de deux variables 


console.log(nb1==nb2) // true

// l'opérateur de comparaison === signifie "strictement égale à"
// il peremt de vérifier la valeur et le type 

console.log(nb1===nb2) // fasle nb1 et nb2 ne sont pas égal car de différent type (number et string)

// l'opérateur != signifie different de... en valeur 

console.log(nb1 != nb2) // false , on demande ici si nb1 et nb2 sont de different valeur


/// l'operatreur "!== " signifie strictement diffetrent de ... valeur et de type 

console.log(nb1 !== nb2) // true , ici les variables sont effectivement differents


// exercice 
// si le prénom indiqué dans le prompt est égale a let prenom alors Alert disanst "bonjour" sinon disant "aurevoir"

let prenom="Nassuf"

bonhomme=prompt("entrer votre prénom")

if (prenom===bonhomme) {
    alert("bonjour")
}
else {
    alert("aurevoir")
}


/// correction

let logiPrenom=prompt("quel est ton prenom?")

let resultPrompt=loginPrenom.charAt(0).toUppercase()+loginPrenom.slice(1)

console.log('result',resultPrompt)

if(resultPrompt===prenom){
    alert("bienvenue")
}else{
    alert('au revoir')
}



