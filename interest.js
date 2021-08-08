
// A	=	final amount
// P	=	initial principal balance
// r	=	annual interest rate
// t	=	time (in years)
// A = P (1 + rt)



function interestcal(ammount,interest,time){
    var finalammount=ammount*(1+interest*time);

    return finalammount;

}

console.log(interestcal(10000,5,5));

function simpleInterest(principal, roi, time) {
    let sI = (principal * roi * time) / 100;
    let total = sI + principal;
    return { sI, total };
    }
    const easternBankInterest = simpleInterest(10000, 5, 5);
    console.log(easternBankInterest);

    for(var i = 1; i <= 10; i++)
{
    var row = "7 * " + i + " = " + 7 * i;
    console.log(row);
}

for(var i = 1; i <= 10; i++)
{
    console.log(i);
    console.log("");
}

function printTable(n)
{
    for(var i = 1; i <= 10; i++)
    {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}


var sum = 0;

for(var i = 1; i <= 10; i++)
{
    sum += i;
    if(true){

    }else{
        
    }
}

console.log(sum);