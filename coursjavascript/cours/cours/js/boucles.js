//// LES BOUCLES -----------------------


//// une boucle permet d'exceuter un bloc de code plusieurs fois, tant que la condition est vrai 

// les boucles sont utilisé pour parcourir des tableaux, répeter des actions et automoatiser des taches 

// boucle WHILE  (tant que)

// cette boucle est très utilisé quand on ne connait pas le nombnre de tours de boucle à l'avance 

// let j=1;
// while(j<=10) // tant que j est égale ou inférieur à  10

//     document.write("<h1 style='color:red'>je passe par ici " +j+ "</h1>");
//         j++;

//     document.write("<h2 style='color:blue'>je passe par ici " +j+ "</h2>");

// }

// let maxAge=25
// let age=NaN // initialisation avec une valeur invalide "note a number"
// console.log(typeof age)

// // la boucle continue de tourner tant que age n'est pas un nombre


// while(isNan (age)){
// age+Number(prompt ("indiquer votre age"))

// if(isNaN(age)){
//     alert("erreur : veuillez écrire un nombre")
// }

// }

// console.log(age)

// if(age <maxAge){
//     alert("bonne nuit")
// }else{
//     alert ("Bienvenue")
// }

////////////////-----------------------


 
// let maxAge=25
// let age=NaN// initialisation avec une valeur invalide "not a number"
// console.log( typeof age)
// // comme age est NaN alors la boucle commence automatiquement
// while(isNaN(age)){
// // la boucle continue tant que age n'est pas un nombre
//     age=Number(prompt("indiquez votre age"))//convertit la valeur string en number
 
//     if(isNaN(age)){
 
//         alert("erreur : veuillez ecrire un nombre ")
//     }
// }
 
// console.log(age)
 
// if(age <maxAge){
//     alert("bonne nuit")
// }else{
//     alert("bienvenue ")
// }
 


// LA BOUCLE FOR 
// for a besoin de  3 arguments

// for(let i=1;i<=10;i++){
//     document.write("<h3 style='color:green'>je passe par là :" +i+ "</h3>");
// }

// parcourir un tableau
// let fruits=["pomme","banane", "cerise"]

// const obj ={
//     age: 26,
//    adresse: "4 rue machin"
// }

// console.log ( fuits[0])


// for(let i=0; i<fruits.lenght;i++){
//     console.log("fruit :", fruits[i]);
// }

// const number = [10, 20, 30];
// console.log(numbers);
// console.dir(numbers);



const products=[
    {name:"smartphone" , price: 500},
    {name:"ordinateur" , price: 800},
    {name:"casque" , price: 100},
]

let html=""; // on initialise une variable vide

for(let i=0 ;i< products.length;i++ ){

    // a chaque itération on ajoute ( )

    html += `<div class="product">
    <h3> ${products[i].name} </h3>
    <p> prix ${products[i].price} € </p>

    
    </div>`
}

// apres la boucle html contient maintenant TOUT LE CODE HTML Généré


let productList=document.getElementById("product-list")
productList.innerHTML=html

//"${}" pour inséerer  des variables directement dans des chaines de caractere 