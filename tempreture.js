function celtofer(celcius){

   var fahr = (celcius * 9.0/5.0) + 32.0; //Cels to fahr  
    return fahr;
}

console.log(celtofer(37));

// cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
function fartocels(farh){
    cels = (farh - 32.0) * 5.0/9.0;
    return cels; //Fahr to cels
}

console.log(fartocels(100));
var marks=prompt("Enter your marks");
// var marks=70;
if(marks>=80 && marks<=100){
    console.log("You got A+ ",marks);
}
else if(marks>=70 && marks<80){
    console.log("You got A ",marks);
}
else if(marks>=60 && marks<70){
    console.log("You got B ",marks);
}
else if(marks>=50 && marks<60){
    console.log("You got C",marks);
}
else if(marks>=40 && marks<50){
    console.log("You got D ",marks);
}
else if(marks>=1 && marks<40){
    console.log("You got F ",marks);
}
else{
    console.log("Not a number",marks);
}