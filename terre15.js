const trié = (saisie) => {
    if(!saisie.length) {
        return "Erreur, vous n'avez fournis aucun nombre entier ! "
    }
    for (let i = 0 ; i < saisie.length  ; i++) {
        if (isNaN(saisie[i])) {
            return "Erreur, veuillez uniquement entrer un ou plusieurs nombres entiers !"
        } else if (parseInt(saisie[i]) > parseInt(saisie[i+1])) {
            return "pas trié !"
        } 
    } return "trié"
}

console.log(trié(process.argv.slice(2)))