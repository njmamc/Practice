

function handleEventInDOMform(){
    console.log("naman jain")

    // 1. Get the text box.

    const inputTextboxFromUser = document.getElementById("inputTextBox_FromUser");
    console.log(inputTextboxFromUser);

    //2. Get data from text box.
    const getDatafromInputBoxbyUser = inputTextboxFromUser.value;
    console.log(getDatafromInputBoxbyUser);

    createListUsingInputtextBoxFromUser(getDatafromInputBoxbyUser);
}


function createListUsingInputtextBoxFromUser(text){
let liOpeningTag="<li>";
let todoTextLable = "<lable>" + text + "<lable>" ;
let editButton = "<button>Edit</button>";
let deleteButton = "<button>Delete</button>";
let liClosingTag="</li>";

//concat krdia jo upar hmne define kiya
let li = liOpeningTag + todoTextLable + editButton + deleteButton + liClosingTag ;

//find the ul tag .. where we need to add or create the li tag 
let ul = document.getElementById("ulForAddingLI");

// isme innerHTML ka kam h... html m li tag ko append or create krne ul tag ke ander
// innerHTML means = the content between opening and closing tag
ul.innerHTML = ul.innerHTML +  li;
}