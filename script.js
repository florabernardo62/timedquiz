// Hide the scores part until the quiz is over 
document.getElementById("scores").hidden = true; 
// Quiz questions set in arrays
//THEN a timer starts and I am presented with a question
var questions = [
    {
      question: "How to comment on HTML?",
      choices: ["/* COMMENT */", "<!-- COMMENT --> ", "//COMMENT",],
      answer: "<!-- COMMENT --> "
    },
    //WHEN I answer a question
    //THEN I am presented with another question
    {
      question: "How to comment of CSS",
      choices: ["/* COMMENT */", "<!-- COMMENT --> ", "//COMMENT",],
      answer: "/* COMMENT */"
    },
    //WHEN I answer a question
    //THEN I am presented with another question
    {
    question: "How to comment on JavaScript?",
      choices: ["/* COMMENT */", "<!-- COMMENT --> ", "//COMMENT",],
      answer: "// COMMENT "
    },
  ];
  // Set the initial time
  var currentQuestionIndex = 0;
  var timeLeft = 60;
  var timer;

  // Set necessary variants for the working functtionalities 
  var startButton = document.getElementById("start");
  var submitButton = document.getElementById("submit");
  var initialsInput = document.getElementById("initials");
  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var scoresContainer = document.getElementById("scores");
  
  function startQuiz() {
    // GIVEN I am taking a code quiz
  //WHEN I click the start button
  //THEN a timer starts 
    startButton.style.display = "none";
    timer = setInterval(updateTimer, 1000);
    showQuestion();
  }
  // THEN I am presented with a question
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choice = currentQuestion.choices[i];
      var button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", answerQuestion);
      quizContainer.appendChild(button);
    }
  }
  
  function answerQuestion(event) {
    var selectedChoice = event.target.textContent;
    var currentQuestion = questions[currentQuestionIndex];
  
    if (selectedChoice === currentQuestion.answer) {
      // Correct answer
      resultsContainer.textContent = "Correct!";
    } else {
      // Incorrect answer
      resultsContainer.textContent = "Wrong!";
      timeLeft -= 10; 
      //WHEN I answer a question incorrectly
      //THEN time is subtracted from the clock
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex === questions.length) {
      // Quiz ends
      endQuiz();
    } else {
      // Show next question
      showQuestion();
    }
  }
  
  function endQuiz() {
    document.getElementById("scores").hidden = false;
    clearInterval(timer);
    quizContainer.innerHTML = "<h2>Quiz completed!</h2>";
    resultsContainer.textContent = "Your final score: " + timeLeft;
    initialsInput.style.display = "block";
    submitButton.style.display = "block";
  }
  //WHEN all questions are answered or the timer reaches 0
  //THEN the game is over
  function updateTimer() {
    timeLeft--;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }
  //WHEN the game is over
  //THEN I can save my initials and score
  startButton.addEventListener("click", startQuiz);
  
  submitButton.addEventListener("click", function() {
    var initials = initialsInput.value;
    var score = timeLeft;
  
    // TO get existing scores from local storage
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
  
    // TO add current score to the list
    scores.push({ initials: initials, score: score });
  
    // TO sort scores in descending order
    scores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    //  TO save scores on local Storage 
    localStorage.setItem("scores", JSON.stringify(scores));
  

    displayScores(scores);
  });
  
  function displayScores(scores) {
    scoresContainer.innerHTML = "<h2>High Scores</h2>";
    var ul = document.createElement("ul");
    for (var i = 0; i < scores.length; i++) {
      var li = document.createElement("li");
      li.textContent = scores[i].initials + " - " + scores[i].score;
      ul.appendChild(li);
    }
    scoresContainer.appendChild(ul);
  }
  
  // TO display scores on page load
  var storedScores = JSON.parse(localStorage.getItem("scores")) || [];
  displayScores(storedScores);
  