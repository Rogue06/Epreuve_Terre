
let saisie1 = process.argv[2];
parseInt(saisie1, 10); // permet de "parser" la string récuperé suur argv[2] et la parser en entier 

if(saisie1 % 2 == 0){
    console.log("pair");
    
}else if(saisie1 % 2 == 1 || saisie1 % 2 == -1){ // gestion des entiers pos et neg 
    console.log("impair"); 
}





