/*var myHeading = document.querySelector("h1");

myHeading.textContent = "Hello World!";*/

var myImage = document.querySelector("img");

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-logo-300x310.png"){
        myImage.setAttribute("src","images/firefox2.png");
    }else{
        myImage.setAttribute("src","images/firefox-logo-300x310.png");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name",myName);
    myHeading.textContent = "Mozilla is Cool ," + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla is Cool ," + myName;
}

myButton.onclick = function(){
    setUserName();
}