// str lene se actual m hum rows bna rahe hai agar ye na lege to 
// stars sidhi line m print krege 
/*
function str(rows, col){
let str;
for (let i=1; i<=rows; i++){
    str="";
    for(let j=1; j<=col; j++){
        str+= "*";
    }
    console.log(str);
}

}
str(5, 5);
*/
///////////////////////////////////

//  print star in the pyramid format 
function str(rows){
    let str;
    for (let i=1; i<=rows; i++){
        str="";
        for(let k=1; k<=(rows-i); k++)
         str +=" ";
        for(let j=1; j<=(2*i-1); j++){
            str+= "*";
        }
        console.log(str);
    }
    
    }
    str(4);


