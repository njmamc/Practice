 function twoSum(array, target){
    
     for(i=0; i<array.length; i++){
        if(array[i]==target){
            console.log(array[i]);
            return;
        }
         for(j=1; j<array.length; j++){
             if(array[i]+array[j]==target){
                 console.log(array[i], array[j]);
                     return;
             }
         }
     }
 }
 twoSum([2,11,15,25,80], 15);

///////////////////////////////////////////
