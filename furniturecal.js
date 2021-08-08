function woodcal(chairquantity,bedquantity,tablequantity){
      
    const perchairwood=3;
    const perbedWood=45;
    const pertablewood=20;


    const chairwoodquantity =chairquantity*perchairwood;
    const bedwoodquantity =bedquantity*perbedWood;
    const tablewoodquantity =tablequantity*pertablewood;


    const totalwoodquntitiy=chairwoodquantity+bedwoodquantity+tablewoodquantity;


     return totalwoodquntitiy;


       
}


const firstoption=woodcal(2,1,1);
console.log(firstoption);