let multiDimensionalArray = (arr) => {
let arrLength = parseInt(arr.length/2);
let emptyArr = [];
for(i=arrLength; i<arr.length/2; i++){
    for(j=i; j>=0; j--){
        emptyArr.push(arr[i][j]);        
    }    
  }
  for(i=0; i<arr.length/2-1; i++){
    for(j=0; j<arr[i].length; j++){
        emptyArr.push(arr[i][j]);        
    }    
  }
//   console.log(emptyArr);
  for(i=0; i<arr.length/2-1; i++){
    for(j=0; j<arr[i].length; j++){
        emptyArr.push(arr[i][j]);        
    }    
  }
  console.log(emptyArr);
}
multiDimensionalArray([
[1,2,3],
[4,5,6],
[7,8,9]
]
);