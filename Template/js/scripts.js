/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.



var button = document.querySelector('.targetClassName');

button.addEventListener('click', function(e) {

  
});*/
function toggleDivShow(){
    var cardDiv = document.getElementById("cardListDiv"),
    button = document.getElementById("btnShowHide");
    if (cardDiv.style.display === "none"){
        cardDiv.style.display = "flex";
        button.value = "HIDE CONTENT";
    } else {
        cardDiv.style.display = "none";
        button.value = "SHOW CONTENT";
    }
}