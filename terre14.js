arg1 = parseInt(process.argv[2], 10);
arg2 = parseInt(process.argv[3], 10);
arg3 = parseInt(process.argv[4], 10);


//objections
if(arg1 === undefined ||arg2 === undefined || arg3 ===undefined){
    console.log("Vous devez rentrer 3 entiers (ex du format : 11 40 34)");
    process.exit(1);

}else if(isNaN(arg1) || isNaN(arg2) || isNaN(arg3)){
    console.log("Vous devez rentrer seulement des entiers !");
    process.exit(1);
}else if(process.argv[5] !== undefined){
    console.log("Veuillez ne rentrer que 3 entiers, pas un de plus petit malin :)")
    process.exit(1);
}else if (arg1 === arg2 || arg2 === arg3 || arg3 === arg1){
    console.log("Erreur, vous devez rentrer 3 entiers différents");
    process.exit(1);
}

function middleOfThree(arg1, arg2, arg3)
{
    // Checking for arg3
    if ((arg1 < arg2 && arg2 < arg3) || (arg3 < arg2 && arg2 < arg1)){
       return arg2;
  }

    // Checking for arg1
    else if ((arg2 < arg1 && arg1 < arg3) || (arg3 < arg1 && arg1 < arg2)){
       return arg1;

  }else{
       return arg3;
}
   }

    // print
    console.log(middleOfThree(arg1, arg2, arg3));
    