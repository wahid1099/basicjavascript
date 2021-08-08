// 1. conversation
function feetToInch(feet){
    inch=feet*12;
    return inch;

}
const conversation=feetToInch(12);
console.log(conversation);

// 2. conversion
function centimeterToMeter(centimeter){
    meters=centimeter*0.01;
    return meters;

}
const centimtr=centimeterToMeter(100);
console.log(centimtr);


// 3. calculation
// 

// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages
function pageRequirements(book1qnty,book2qnty,book3qnty){
      
    book1totoalpg=book1qnty*100;
    book2totoalpg=book2qnty*200;
    book3totoalpg=book3qnty*300;
    totalpages=book1totoalpg+book2totoalpg+book3totoalpg;
    return totalpages;

}
const qnty=pageRequirements(10,50,80);
console.log("total pages need :" +qnty);
//4. friendsf
function bestFriend(fname){
    let bfname=fname[0];
    for(const name of fname){
        if(bfname.length<name.length){
            bfname=name;

        }
        
    }
   return bfname;    

}
const friendsf=['ashif','sajjad','talha','aman','arshad','sayem','sakib','hassan','jony','arju'];
const bestFriendname =bestFriend(friendsf);
console.log("best friend name is " +bestFriendname);

//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number
function onlyPositive(allnumb){

  let  positive=[];
    for(let number of allnumb){
       // console.log(number);
        if(number>0){
            positive.push(number);

        }else{
            break;
        }

    }
    return positive;

}


const allnumbers=[1,2,3,4,58,8,5,-5,8,4];
const postives=onlyPositive(allnumbers);
console.log(postives);
