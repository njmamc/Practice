
function findSumOfNumber(a,b){
    let emptyArrayforA = [];
    let emptyArrayforB = [];

for(i=a.length-1; i>=0; i--){
  emptyArrayforA = a[i];
}
for(j=a.length-1; j>=0; j--){
    emptyArrayforB = b[j];
  }

  console.log(emptyArrayforA+emptyArrayforB);

}
findSumOfNumber( [2,4,3] , [5,6,4] );

//////////////////////////////////////////////////////


let numberOfTestCases = parseInt(readline())

while(numberOfTestCases--){
	let [n, x] = readline().split(' ').map(Number)
	let array = readline().split(' ').map(Number)

	let numOperations = 0
	// 2 1 2 
	// sum = 4
	// X = 3 
	// change = 1
	for (let index = 0; index < n; index++){
		var adjSum = array[index] + array[index + 1]
		if (adjSum > x){
			numOperations += adjSum - x 
			array[index + 1] -= numOperations
		}
		console.log(array)
	}
	console.log(numOperations)
	
}