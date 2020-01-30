var firstEle = document.body.querySelector(".first");
var secondEle = document.body.querySelector(".second");
var thirdEle = document.body.querySelector(".third");
var sumEle = document.body.querySelector(".sum");

// prompts return string values
// use Number() to convert value into a numerical value
var firstPrompt = Number(prompt("What is your bill price?"));
var secondPrompt = Number(prompt("What is your tip?"));
var thirdPrompt = Number(prompt("What is your tax?"));

//process

var summation = (firstPrompt*(secondPrompt+thirdPrompt))+firstPrompt;

firstEle.innerHTML="Your bill is "+firstPrompt;
secondEle.innerHTML="The tip is "+secondPrompt;
thirdEle.innerHTML="Your tax is "+thirdPrompt;
sumEle.innerHTML = "The total bill is "+summation