//  i j
// [1,1,2,2,3,3,3,4,4,5,6,7,7,8,8,9,9]
//Sorted array mei se ... duplicate numbers ko ignore krna h ... aur jo bacha h vo numbers find krne h 

// logic :- 
//         1. compare krna h numbers ko phle index se lekr last tak
//          2. agar same h number to ek rakhna h aur baki ignore krke aage bdna h 

// i=0, j=1,
function countNumbers(array) {
    let i = 0;
    let arr = [];
    for (j = 1; j <= array.length; j++) {
      if (array[i] != array[j]) {
        arr.push(array[i]);
        i++;
        array[i] = array[j];
      }
    }
    return arr;
  }
  const result = countNumbers([1, 1, 2, 2, 5, 6, 7, 7, 8, 8, 9, 10]);
  console.log(result);