// const fibo=[0,1];
// for(i=2;i<=5;i++){
//     //nth =(n-1)th +(n-2)
//     //ith =(i-1)+(i-2)
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }

// console.log(fibo);
// //creat a fibonacci sequence
function fibonacciseries(number){
    if(typeof number != 'number'){
        return "Please give a number";
    }
     if(number <2){
         return "Please enter a positive number greater than 1";


    }
    const fibo=[0,1];
    for (i=2;i<number; i++){
        fibo[i]=fibo[i-1]+fibo[i-2];

    }
    return fibo;
}
const fibosieris=fibonacciseries(31);
console.log(fibosieris);