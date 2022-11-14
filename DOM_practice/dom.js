
const arr=[]; // empty array create kra unique id bnane ke liye  

function handleEventInDOMform(){
    console.log("naman jain")

    // 1. Get the text box.

    const inputTextboxFromUser = document.getElementById("inputTextBox_FromUser");
    console.log(inputTextboxFromUser);

    //2. Get data from text box.
    const getDatafromInputBoxbyUser = inputTextboxFromUser.value;
    inputTextboxFromUser.value=""; 
    console.log(getDatafromInputBoxbyUser);

    createListUsingInputtextBoxFromUser(getDatafromInputBoxbyUser);
}


function createListUsingInputtextBoxFromUser(text){
    arr.push(text);
let liOpeningTag="<li>";
let todoTextLable = "<label id= label_ID" + arr.length + " style='width:70%'>" + text + "</label>" ;
let editButton = "<button id= editBtn_ID"+ arr.length + " onclick='handleEditButton(event)' class='btn btn-primary'>Edit</button>"; //event is keyword.. event word as object work krta hai... event mei bahut sare option aa jate hai... jisse ap kisi tag ki id access kr skte ho
let deleteButton = "<button id= dltBtn_ID"+ arr.length + "onclick='handleDeleteButton(event)' class='btn btn-danger'> Delete</button>";
let liClosingTag = "</li>";

//concat krdia jo upar hmne define kiya
let li = liOpeningTag + todoTextLable + editButton + "&nbsp&nbsp&nbsp"  + deleteButton + liClosingTag ;

//find the ul tag .. where we need to add or create the li tag 
let ul = document.getElementById("ulForAddingLI");

// isme innerHTML ka kam h... html m li tag ko append or create krne ul tag ke ander
// innerHTML means = the content between opening and closing tag
ul.innerHTML = ul.innerHTML +  li;
}


function handleEditButton(event){
    console.log(event.target.id); // access id of button using event object

const fetchLabelID = event.target.id.toString().replace("editBtn_ID" , "label_ID");
const getAccessofLabelID = document.getElementById(fetchLabelID);

console.log(getAccessofLabelID); // label ki id ko access krne ke liye hmne edit btn ki id se label id replace kri

getAccessofLabelID.style.display = "none"; //  label id get hone ke baad label ko nahi dikhane ke liye 


console.log("ye edit button ke liye hai");

}

function handleDeleteButton(event){
    console.log("ye delete button ke liye hai");
}