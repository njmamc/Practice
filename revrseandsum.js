

var l3 =[];
var l4= [];
var l7 =[];
function reverseSum(l1,l2){
    for(let i=l1.length-1; i>=0; i--){
        l3.push(l1[i]);
    }
    for(let i=l2.length-1; i>=0; i--){
        l4.push(l2[i]);
    }
    var l5 = l3.join('');
    var l6 = l4.join('');
    var l8 = Number(l5) + Number(l6);
    var l9=l8.toString();
    for(let i=l9.length-1; i>=0; i--){
       l7.push(l9[i]);
    }
   return l7.join('');
}
var l1 = [2,4,3]; 
var l2 = [5,6,4];
console.log(reverseSum(l1,l2));  //708
//console.log(reverseSum([9,9,9,9,9,9,9],[9,9,9,9]));  // 89990001