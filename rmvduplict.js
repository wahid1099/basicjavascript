const names=['abul','kabul','babul','sabul','nabul','tabul','babul','abul','babul','sayef','rana','babul','afia'];
const num=[1,1,25,2,5,8,2,5,2,56,6,851,25,1,2,];
function removeduplicate(name) {
    const unique=[];
    // for (let i=0;i<=name.length;i++){
    //     const element=name[i];
    //     if(unique.indexOf(element)==-1){
    //         unique.push(element);

    //     }
    // }
    for(const element of name){
        if(unique.indexOf(element)== -1 ){
                   unique.push(element);
        
              }
    }
    return unique;

}
const uniquenames=removeduplicate(num);
console.log(uniquenames);