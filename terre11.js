const horaires = process.argv[2];
const [heures, minutes] = horaires.split(":");
const anteMeridiem = "am";
const postMeridiem = "pm";
const heuresSoir = (heures - 12);
const minuit = (heures - 24);

if(heures > 12 && heures < 24){
    console.log(heuresSoir+ ":" +minutes+""+postMeridiem)
}else if(heures <= 12){
    console.log(heures+ ":" +minutes+""+anteMeridiem );
}else if(heures == 24){
    console.log(minuit+ ":" +minutes+""+anteMeridiem);
}else{
    console.log("veuillez rentrer un horaire au format 00:00")
} 



 


