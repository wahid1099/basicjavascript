const greetings="Hello how are you";


function reverseletter(text){
    let reverse=''
    for(const letter of text){
        reverse=letter+reverse;
    }
    return reverse;
}


const reversed=reverseletter(greetings);
console.log(reversed);