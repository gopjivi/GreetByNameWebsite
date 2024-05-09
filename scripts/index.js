"use strict";

window.onload = init;  

function init() {
    // Find the greetUserBtn
    const greetUserBtn = document.getElementById("greetUserBtn");
 
    
    greetUserBtn.onclick = onGreetUserBtnClicked; 
 
     
 }

 function onGreetUserBtnClicked() {
    // Find the nameField
    let nameField = document.getElementById("nameField");

    let namevalue=nameField.value;
    // Set the contents of the div
   messageDiv.innerHTML = "Hello " +namevalue;
 

 }