function largestelement(number){
    let  largest=number[0];
    for(let i=0; i< number.length;i++){
        const element = number[i];
        // console.log(element);

        if(largest<element){
            largest=element;

        }

    }
    return largest;


}



const ages=[240,12,54,50,20,30,14,75,95];
const oldest=largestelement(ages);
console.log("oldest",oldest);

const ages2=[-240,-12,-54,-50,-20,-30,-14,-75,-95];
const oldest2=largestelement(ages2);
console.log("oldest2",oldest2);