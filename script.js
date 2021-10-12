const text = document.createElement("span");
text.innerText="country : ";
document.body.appendChild(text);

const input1 = document.createElement("SELECT");
input1.setAttribute("type", "number");
input1.setAttribute("id", "input1");
document.body.appendChild(input1);

const option1 = document.createElement("option");
option1.innerText="India";
input1.appendChild(option1);

const option2 = document.createElement("option");
option2.innerText="China";
input1.appendChild(option2);


const input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("id", "input2");
input2.setAttribute("autocomplete", "off");
document.body.appendChild(input2);

const button = document.createElement("button");
button.innerText = "Add new";
button.setAttribute("onclick", "addNew()");
document.body.appendChild(button);

function addNew (){
  var options=document.querySelector("#input2").value;
  const option = document.createElement("option");
  option.innerText=options; 
  input1.appendChild(option);
  var clearform=document.querySelector("#input2");
  clearform.value="";
}