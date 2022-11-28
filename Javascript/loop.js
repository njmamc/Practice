function printStar(n){
    let a="";
    for(i=1; i<n; i++){
        for(let j=1; j<=n-i; j++){
            a += " ";
        }
        for(let j=1; j<=i; j++){
            a+= "*";
            
        }
        console.log(a);
    }
}
printStar(4);




MAX EVEN SUBSEQUENCE SUM
// 1. find how many odd number are there:
//   1.1 if there are even number of odd
// elements:
//       res => sum(array)
//   1.2 if there are odd number of odd
// elements
//       remove smallest odd number:
//       res => sum(array)
// 2. minNegativeOddNumber = min([-2, -8, -4, -7])
//       res = minNegativeOddNumber + res from
//       condition 1
array = [-1, -2, -3, 2, 3, 4, 5, 6, 7]
n = array.length
oddNumbers = 0
allSum = 0
maxOddNegativeNumber = Math.min(...array)
smallestOddNumber = Math.max(...array)
isNegativePresent = false
for(let i = 0; i < n; i++){
  if (array[i] > 0 ){
    if (array[i] % 2 !== 0){
      oddNumbers += 1
    }
    allSum += array[i]
    if (array[i] % 2 != 0 && array[i] < smallestOddNumber){
      smallestOddNumber = array[i]
    }
  }else{
    isNegativePresent = true
    if (array[i] % 2 != 0 && array[i] > maxOddNegativeNumber){
      maxOddNegativeNumber = array[i]
    }
  }
}
if(oddNumbers % 2 === 0){
  console.log(allSum)
}else{
    solution1 = allSum - smallestOddNumber
    if(isNegativePresent){
        solution2 = allSum + maxOddNegativeNumber
    }
    if(isNegativePresent){
        if(solution1 > solution2){
            console.log(solution1)
        }else{
            console.log(solution2)
        }
    }else{
        console.log(solution1)
    }
}