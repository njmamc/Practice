

// fibonacci series = 0, 1 , 1 , 2 , 3 , 5 , 8 

function fibonachi(n){
    if(n<2){
        return n
    }

   return fibonachi(n-1) + fibonachi(n-2) ;
}
console.log(fibonachi(6)); // 0+1=1 , 1+1 =2 , 2+1 = 3, 3+2 = 5