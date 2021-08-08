var isloggedin=false;
console.log(isloggedin);



const num=[1,1,25,2,5,8,2,5,2,56,6,851,25,1,2,81,80];
function removeduplicate(name) {
    const unique=[];
    
    for(const element of name){
        if(element >=80){
         unique.push(element);
        
              }
    }
    return unique;

}
const uniquenames=removeduplicate(num);
console.log(uniquenames);