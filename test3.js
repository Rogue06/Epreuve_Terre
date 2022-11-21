let str = process.argv[2]

let length = 0

if(str === undefined){
    console.log("ERROR_404")
    
}else if(process.argv[3] || process.argv[4] != null){ // il aurait été possible d'utiliser la fonction length ou length -1 pour avoir un nombre infini d'argument "à refuser"
    console.log("Vous avez rentrez trop d'arguments !")
}else if(parseInt(str,10)){
    console.log("Erreur : les nombres ne sont pas prit en compte");
}else {

for(let i = 0; str[i] != undefined; i++){
    length++
}
console.log(length)

}
    


