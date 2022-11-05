function removeDuplicates(array){

    var counter = 1;
    var numTimes = 0;    
    for(let i=0;i<array.length-1;i++){
        counter = 1;
        for(let j=i+1;j<array.length;j++){
            if(array[i] == array[j]){
                array[j] += counter;
                counter++;
                numTimes++;
            }       
        }
    }
    console.log(array,"And number of times is ",numTimes);
}
    var array = [1,5,5,6,7];
    removeDuplicates(array)







    array = [1,4,2,6,9,5]
n = array.length 
k = 3 

array = [1 4 2 6 9 5]
remainders =  [1 1 2 0 0 2]
K-remainder = [2 2 1 2 2 1]
min array  =  [1 1 1 0 0 1]

array = [1, 2]
count = 0
for (let i = 0; i < n; i++){
  if (remianders[i] !== 0){
    if (!array.includes(remainder[i])){
      counter += min(1, 5-1=4) 
        array.push(remainders[i])
    }
  }
}

console.log(counter)