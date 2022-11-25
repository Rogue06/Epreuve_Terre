const saisie = process.argv[2];
myArray = ["00:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00"]
switch (saisie){
    case "13:00" : console.log(myArray[1]+ " pm");
    break;
    case "14:00" : console.log(myArray[2]+ " pm");
    break;
    case "15:00" : console.log(myArray[3]+ " pm");
    break;
    case "16:00" : console.log(myArray[4]+ " pm");
    break;
    case "17:00" : console.log(myArray[5]+ " pm");
    break;
    case "18:00" : console.log(myArray[6]+ " pm");
    break;
    case "19:00" : console.log(myArray[7]+ " pm");
    break;
    case "20:00" : console.log(myArray[8]+ " pm");
    break;
    case "21:00" : console.log(myArray[9]+ " pm");
    break;
    case "22:00" : console.log(myArray[10]+ " pm");
    break;
    case "23:00" : console.log(myArray[11]+ " pm");
    break;
    case "00:00" : 
    case "24:00" : console.log(myArray[0]+ " pm");
    break;
    case "12:00" : console.log(myArray[12]+ " am");
    break;
}