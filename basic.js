// 1. write 3 variables (number, string, boolean)

let age=21;
let name='Wahid ahmed';
let ismarried=false;
console.log("My name is "+name+" My age is "+age+" Is i am married ?"+ismarried);



// 2. 2 variables using (let, const)
let city='Saidpur';
const nationality='Bangladeshi';
city='toronto';
console.log(city,nationality);

// 3. Simple Math Operations() +, -, *, /, %)
let a=100,b=10;
console.log("Sum of a and b is = "+(a+b));
console.log("Substraction of a and b is = "+(a-b));
console.log("Division of a and b is = "+(a/b));
console.log("multiplcation of a and b is = "+(a*b));



// 4. comparison () 


var c=20;
var d=50;
if(c>d  || c<d || c==d || c!=d){
    console.log("c and d");
}

// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition

let e=150;
let f=60;
if(e>f && e>100){
    console.log("e and f");
}



if(e>f || e>100){
    console.log("e and f");
}



// 6. if-else

let savings=60000;
let iphoneprice=80000;
if(savings>=iphoneprice){
    console.log("You can buy iphone");

}else{
    console.log("You need to save more money to buy a phone");
}

//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19

let i = 6;
while (i < 20) {
if(i % 2 !=0){
    console.log(i)
}
  i++;
 
}




// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array

const car =['volvo','bmw','audi','toyoya','rolly royce','Mustang','tesla'];
console.log(car.length);
car.push('mercadge');
car.pop();
car.includes('bmw',1);
car.indexOf('bmw',1);

console.log(car.indexOf('bmw'));
console.log(car.includes('bmw',1));

// 9. use any for loop to display every elements of an array
for(let i=20; i<25; i++) {
    console.log(i);
}
for(const name of car){
    console.log(name);
}

// 10. you have an array of numbers. display only the numbers bigger than 80
const numbers=[20,30,25,80,58,85,95,110,254,155,90,98,92,2,5,50,98];
const bignumb = [];
for (const numb of numbers){
    if(numb>=80){
        bignumb.push(numb);


    }
    
}
console.log(bignumb);




// 11. write a function that takes three numbers and returns the multiplication of the three numbers
function numbmultiplication(num1,num2,num3){
    multiplication=num1*num2*num3;
    return multiplication;

}
const numbers1=numbmultiplication(2,2,2);
console.log("numbmultiplication is : " + numbers1);



// 12. declare an object and change any property of that object.

const person = {
    firstName: "wahid",
    lastName: "ahmed",
    age: 50,
    eyeColor: "black"
  };

//  let newage= person.firstName();
person.firstName="khan";
person.age=20;
  console.log(person);