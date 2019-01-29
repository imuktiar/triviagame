var card = $("#quiz-area");

// Question set
var questions = [
  {
    question: "What are the Nissan Models?",
    answers: ["Supra", "370Z", "Shaker", "Z4"],
    correctAnswer: "370Z"
  },
  {
    question: "How many gears can a manual transmission have ?",
    answers: ["Seven", "Five", "Six", "Four"],
    correctAnswer: "Six"
  },
  {
    question: "Which car manafacutered the The FairLady ?",
    answers: ["Toyota", "Honda", "Nissan", "Mercedes"],
    correctAnswer: "Nissan"
  },
  {
    question: "What other brand Nissan created as a luxury subsidary ?",
    answers: ["Honda", "Infiniti", "GTR", "Audi"],
    correctAnswer: "Infiniti"
  },
  {
    question: "Nissan was also know as what other brand?",
    answers: ["Fissan", "Gissan", "Datsun", "Pacsun"],
    correctAnswer: "Datsun"
  },
  {
    question:
      "Nissan headquarters are situated in which country",
    answers: ["USA", "China", "Egpyt", "Japan"],
    correctAnswer: "Japan"
  },
  {
    question: "What was year was Nissan founded?",
    answers: ["1953", "1991", "1933", "1999"],
    correctAnswer: "1933"
  },
  {
    question: "What is the name of the Cheif ececutive of the company ?",
    answers: ["Page Zhou", "Hung Pow", "Carlos Ghosn", "Carlos Bean"],
    correctAnswer: "Carlos Ghosen"
  }
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 100,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>100</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
