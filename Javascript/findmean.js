
//find mean
// Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2.

function a(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = (sum + arr[i]) / arr.length;
    }
    console.log(sum);
    }
    a([1,2]);
    
    ////////////////////////
    
    
    // right approach and answer:-
    function mean(data) {
    
        let sum = 0;
      
        for (let i = 0; i < data.length; i ++) {
          sum = sum + data[i];
        }
      
        return sum / data.length;
      };
    
      console.log(mean([1,2]));