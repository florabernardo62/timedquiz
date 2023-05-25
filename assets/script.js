document.getElementById("questionOne").hidden = true;
document.getElementById("questionTwo").hidden = true;
document.getElementById("questionThree").hidden = true;
document.getElementById("questionFour").hidden = true;
document.getElementById("questionFive").hidden = true;
document.getElementById("questionSix").hidden = true;
document.getElementById("questionSeven").hidden = true;
document.getElementById("questionEight").hidden = true;
document.getElementById("questionNine").hidden = true;
document.getElementById("questionTen").hidden = true;
document.getElementById("finalMessage").hidden = true;
document.getElementById("buttonTwo").hidden = true;
document.getElementById("buttonThree").hidden = true;
document.getElementById("buttonFour").hidden = true;
document.getElementById("buttonFive").hidden = true;
document.getElementById("buttonSix").hidden = true;
document.getElementById("buttonSeven").hidden = true;
document.getElementById("buttonEight").hidden = true;
document.getElementById("buttonNine").hidden = true;
document.getElementById("buttonTen").hidden = true;
document.getElementById("results").hidden = true;
document.getElementById("ranking").hidden = true;

function startQuiz(){
    if (document.getElementById("name").value.length == 0)
      { 
         alert("please type your name");  	
         return false; 
      }  
    else if(!timer) {
        timer = window.setInterval(function() { 
          myFunction();
        }, 1000); // every second
      }	
      document.getElementById("name").hidden = true,
      document.getElementById("start").hidden = true; 
      document.getElementById("questionOne").hidden = false;
    } 
document.getElementById("timer").innerHTML="2:00";




 
var seconds=120;
var timer;
function myFunction() {
  if(seconds < 120) { 
    document.getElementById("timer").innerHTML = seconds;
      }
  if (seconds >0 ) { // so it doesn't go to -1
    seconds--;
  } else {
    clearInterval(timer);
    alert("time over");
    }
}

function question2(){
    document.getElementById("questionOne").hidden = true;
    document.getElementById("questionTwo").hidden = false;  
}

function question3(){
  document.getElementById("questionTwo").hidden = true;
  document.getElementById("questionThree").hidden = false;
}

function question4(){
  document.getElementById("questionThree").hidden = true;
  document.getElementById("questionFour").hidden = false;
}

function question5(){
  document.getElementById("questionFour").hidden = true;
  document.getElementById("questionFive").hidden = false;
}

function question6(){
  document.getElementById("questionFive").hidden = true;
  document.getElementById("questionSix").hidden = false;
}

function question7(){
  document.getElementById("questionSix").hidden = true;
  document.getElementById("questionSeven").hidden = false;
}

function question8(){
  document.getElementById("questionSeven").hidden = true;
  document.getElementById("questionEight").hidden = false;
}

function question9(){
  document.getElementById("questionEight").hidden = true;
  document.getElementById("questionNine").hidden = false;
}

function question10(){
  document.getElementById("questionNine").hidden = true;
  document.getElementById("questionTen").hidden = false;
}




function optionOne()
{
  seconds -= 10;
  output.innerText= "Incorrect! Try again!"
}

function optionTwo()
{
  output.innerText= "Correct!";
  document.getElementById("buttonTwo").hidden = false;
}

function optionThree()
{
  seconds -= 10;
  output.innerText= "Incorrect! Try again!"
}

function optionFour()
{
  seconds -= 10;
  output.innerText= "Incorrect! Try again!"
}

function optionFive()
{
  seconds -= 10;
  outputTwo.innerText= "Incorrect! Try again!"
}

function optionSix()
{
  outputTwo.innerText= "Correct!"
  document.getElementById("buttonThree").hidden = false;
}

function optionSeven()
{
  seconds -= 10;
  outputTwo.innerText= "Incorrect! Try again!"
}

function optionEight()
{
  seconds -= 10;
  outputTwo.innerText= "Incorrect! Try again!"
}

function optionNine()
{
  outputThree.innerText= "Correct!"
  document.getElementById("buttonFour").hidden = false;
}

function optionTen()
{
  seconds -= 10;
  outputThree.innerText= "Incorrect! Try again!"
}
function optionEleven()
{
  seconds -= 10;
  outputThree.innerText= "Incorrect! Try again!"
}

function optionTwelve()
{
  seconds -= 10;
  outputThree.innerText= "Incorrect! Try again!"
}

function optionThirteen()
{
  seconds -= 10;
  outputFour.innerText= "Incorrect! Try again!"
}

function optionFourteen()
{
  seconds -= 10;
  outputFour.innerText= "Incorrect! Try again!"
}

function optionFifteen()
{
  seconds -= 10;
  outputFour.innerText= "Incorrect! Try again!"
}

function optionSixteen()
{
  outputFour.innerText= "Correct!"
  document.getElementById("buttonFive").hidden = false;
}

function optionSeventeen()
{
  seconds -= 10;
  outputFive.innerText= "Incorrect! Try again!"
}

function optionEighteen()
{
  seconds -= 10;
  outputFive.innerText= "Incorrect! Try again!"
}

function optionNineteen()
{
  seconds -= 10;
  outputFive.innerText= "Incorrect! Try again!"
}

function optionTwenty()
{
  outputFive.innerText= "Correct!"
  document.getElementById("buttonSix").hidden = false;
}

function optionTwentyOne()
{
  seconds -= 10;
  outputSix.innerText= "Incorrect! Try again!"
}

function optionTwentyTwo()
{
  outputSix.innerText= "Correct!"
  document.getElementById("buttonSeven").hidden = false;
}

function optionTwentyThree()
{
  seconds -= 10;
  outputSix.innerText= "Incorrect! Try again!"
}

function optionTwentyFour()
{
  seconds -= 10;
  outputSix.innerText= "Incorrect! Try again!"
}

function optionTwentyFive()
{
  seconds -= 10;
  outputSeven.innerText= "Incorrect! Try again!"
}

function optionTwentySix()
{
  seconds -= 10;
  outputSeven.innerText= "Incorrect! Try again!"
}

function optionTwentySeven()
{
  outputSeven.innerText= "Correct!"
  document.getElementById("buttonEight").hidden = false;
}

function optionTwentyEight()
{
  seconds -= 10;
  outputSeven.innerText= "Incorrect! Try again!"
}

function optionTwentyNine()
{
  outputEight.innerText= "Correct!"
  document.getElementById("buttonNine").hidden = false;
}

function optionThirty()
{
  seconds -= 10;
  outputEight.innerText= "Incorrect! Try again!"
}

function optionThirtyOne()
{
  seconds -= 10;
  outputEight.innerText= "Incorrect! Try again!"
}

function optionThirtyTwo()
{
  seconds -= 10;
  outputEight.innerText= "Incorrect! Try again!"
}

function optionThirtyThree()
{
  seconds -= 10;
  outputNine.innerText= "Incorrect! Try again!"
}

function optionThirtyFour()
{
  outputNine.innerText= "Correct!"
  document.getElementById("buttonTen").hidden = false;
}

function optionThirtyFive()
{
  seconds -= 10;
  outputNine.innerText= "Incorrect! Try again!"
}

function optionThirtySix()
{
  seconds -= 10;
  outputNine.innerText= "Incorrect! Try again!"
}

function optionThirtySeven()
{
  seconds -= 10;
  outputTen.innerText= "Incorrect! Try again!"
}

function optionThirtyEight()
{
  seconds -= 10;
  outputTen.innerText= "Incorrect! Try again!"
}

function optionThirtyNine()
{
  outputTen.innerText= "Correct!"
  document.getElementById("finalMessage").hidden = false;
  document.getElementById("results").hidden = false;
}

function optionFourty()
{
  seconds -= 10;
  outputTen.innerText= "Incorrect! Try again!"
}




function endQuiz(){
  document.getElementById("questionTen").hidden = true;
  document.getElementById("ranking").hidden = false;
  document.getElementById("timer").hidden = true;
  
  // var name = document.querySelector('input[name=yourName]').value;
  // document.getElementById("scores").innerHTML = name + "'s score is " + (seconds);


  }

var initials = document.querySelector("#initials");
var scores = document.querySelector("#scores");

var finalScores = [];

function displayRanking(){
  for (var i = 0; i < todos.length; i++) {
    var scoresList = finalScores[i] + "'s score is " + seconds;

    var li = document.createElement("li");
    li.textContent = scoresList;
    li.setAttribute("data-index", i);


    todoList.appendChild(li);
  }
3
}

  var todoInput = document.querySelector("#todo-text");
  var todoForm = document.querySelector("#todo-form");
  var todoList = document.querySelector("#todo-list");

  
  var todos = [];
  
  // The following function renders items in a todo list as <li> elements
  function renderTodos() {
  

    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i] + "'s score is " + seconds;
  
      var li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("data-index", i);
  
  
      todoList.appendChild(li);
    }
  }
  
  // This function is being called below and will run when the page loads.
  function init() {
    // Get stored todos from localStorage
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    // This is a helper function that will render todos to the DOM
    renderTodos();
  }
  
  function storeTodos() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  // Add submit event to form
  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var todoText = todoInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  });
  
  // Add click event to todoList element
  todoList.addEventListener("click", function(event) {
    var element = event.target;
  
    // Checks if element is a button
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      todos.splice(index, 1);
  
      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
  });
  
  // Calls init to retrieve data and render it to the page on load
  init()
  
  