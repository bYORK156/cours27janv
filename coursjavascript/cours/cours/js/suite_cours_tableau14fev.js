/// trouver l'index d'i, element du tableau


fruits.indexOf("pomme")
console.log("trouvez l'index",fruits.indexOf("pomme"))


//// MODIFICACTION DE LORIGFINAL DUN TABLEAU

// :::: modifier un element d'un tableau

fruits[0]="fraise"
console.log("fruit modifié",fruits)

///// ajouter un elelment dans un tableau///


fruits.push("mangue") // ajoute  à la fin 
console.log("fruit avec mangue",fruits)

fruits.unshift("cerise")  // ajoute en premier
console.log(fruits)

fruits.splice(1,0,"clementine")  // ajoute en deuxieme
console.log(fruits)

let index=fruits.indexOf("pomme")
let result=fruits.splice(index, 1)  /// supprime pomme
console.log("pomme supprimer",result)

fruits.shift() ///// supprimer des elements d'un tableau
console.log("supprimer 1er element",fruits)


// supprimer des elements

fruits.pop() // supprimer dernier element
console.log(fruits)



// :: MODFOCATION EN CREANT UN NOUVEAU TABLEAU

// extraire une partie d'un tableau SANS modifier l'original




// Exercice

// créer un tabelau utilisateur contenant des sous tabeleau
// [nom, role, email] commme ceci


let utilisateurs = [
    ["alice dupont", "alice@exmail.com", "admin"]
    ["bob martin", "bob@exmail.com", "utilisateur"]
    ["charle durand", "charle@exmail.com", "modérateur"]
];

function trouverUtilisateur(mail){
    let user=utilisateurs[1].includes(mail)
    console.log("user",user) 
  

    if(user===true){

    return "nom:" + utilisateurs[0]+  "mail :" + utilisateurs[1]
}else{
    return "utilsateur non trouvé dans la base de donné"
    }

}

trouverUtilisateur("alice@exmail.com")

console.log ("nom")


//// UTRE FACON DECRIRE

let utilisateurs = [
    ["alice dupont", "alice@exmail.com", "admin"]
    ["bob martin", "bob@exmail.com", "utilisateur"]
    ["charle durand", "charle@exmail.com", "modérateur"]
];

console.log(utilisateurs)

function ajouterUnUser(nom,mail,role){

    utilisateurs.push([nom,mail,role])
    console.log("ajouter")


}

ajouterUnUser("varas", "agmail.com","user")
console.log("user",utilisateurs)






// creer une fonction pour ajouter un utilisateur

function ajouterUtilisateur() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let role = document.getElementById("role").value;

}

console.log(nom)

// creer une fonction pour supprimer  un utilisateur
// creer une fonction pour afficher liste  des utilisateurs










