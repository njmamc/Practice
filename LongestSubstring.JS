// Question : - 
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestSubstringWithoutRepeatingCharacters(array){
let emptyarray = [];
let checkarray = array.length;

for(i=0; i<checkarray; i++){
    for(j=1; j<checkarray; j++){
    if(array[i] !== array[j]){
        emptyarray.push(array[j]);
            }
        }
    }
}
console.log(longestSubstringWithoutRepeatingCharacters([a,b,c,a,b,c,a,b,c]));