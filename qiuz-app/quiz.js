const timerText = document.getElementById("timer-text");
const nextButton = document.getElementById("next-button");
const question = document.getElementById("question");
const option_A = document.getElementById("option-a");
const option_B = document.getElementById("option-b");
const option_C = document.getElementById("option-c");
const option_D = document.getElementById("option-d");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

const radio_option_a = document.getElementById("radio-option-a");
const radio_option_b = document.getElementById("radio-option-b");
const radio_option_c = document.getElementById("radio-option-c");
const radio_option_d = document.getElementById("radio-option-d");

let timerId = 0;
let currentQuestionIndex = 0;
let score = 0;

const questionBank = [
  {
    id: 1,
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
    category: "Science",
  },
  {
    id: 2,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
    category: "Literature",
  },
  {
    id: 3,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Gd"],
    answer: "Au",
    category: "Science",
  },
  {
    id: 4,
    question: "Which country is home to the Great Barrier Reef?",
    options: ["Belize", "Australia", "Brazil", "South Africa"],
    answer: "Australia",
    category: "Geography",
  },
  {
    id: 5,
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1932"],
    answer: "1912",
    category: "History",
  },
  // {
  //   id: 6,
  //   question: "What is the capital city of Canada?",
  //   options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
  //   answer: "Ottawa",
  //   category: "Geography",
  // },
  // {
  //   id: 7,
  //   question: "What is the main ingredient in guacamole?",
  //   options: ["Tomato", "Onion", "Avocado", "Pepper"],
  //   answer: "Avocado",
  //   category: "Food",
  // },
  // {
  //   id: 8,
  //   question: "How many sides does a hexagon have?",
  //   options: ["Five", "Six", "Seven", "Eight"],
  //   answer: "Six",
  //   category: "Mathematics",
  // },
  // {
  //   id: 9,
  //   question: "Who painted the Mona Lisa?",
  //   options: [
  //     "Vincent van Gogh",
  //     "Pablo Picasso",
  //     "Leonardo da Vinci",
  //     "Claude Monet",
  //   ],
  //   answer: "Leonardo da Vinci",
  //   category: "Art",
  // },
  // {
  //   id: 10,
  //   question: "What is the world's longest river?",
  //   options: ["Amazon", "Mississippi", "Yangtze", "The Nile"],
  //   answer: "The Nile",
  //   category: "Geography",
  // },
];

const startTimer = () => {
  let counter = 60;
  timerId = setInterval(() => {
    timerText.textContent = counter;
    counter--;
    if (counter < 0) {
      clearInterval(timerId);
      if (currentQuestionIndex < questionBank.length) {
        calculateResult();
        nextQuestion();
      } else {
        calculateResult();
        // alert("your score is " + score + "/10");
      }
      return;
    }
  }, 1000);
};

const nextQuestion = () => {
  radio_option_a.checked = false;
  radio_option_b.checked = false;
  radio_option_c.checked = false;
  radio_option_d.checked = false;

  // timerText.textContent = "10";
  clearInterval(timerId);
  startTimer();
  question.textContent =
    currentQuestionIndex +
    1 +
    "." +
    questionBank[currentQuestionIndex].question;
  option_A.textContent = questionBank[currentQuestionIndex].options[0];
  option_B.textContent = questionBank[currentQuestionIndex].options[1];
  option_C.textContent = questionBank[currentQuestionIndex].options[2];
  option_D.textContent = questionBank[currentQuestionIndex].options[3];
  // update progress UI
  if (progressText && progressBar) {
    const progressNum = Math.min(currentQuestionIndex + 1, questionBank.length);
    progressText.textContent = `Question ${progressNum} of ${questionBank.length}`;
    const pct = Math.round((progressNum / questionBank.length) * 100);
    progressBar.style.width = pct + "%";
    progressBar.setAttribute('aria-valuenow', pct);
  }
  if (currentQuestionIndex < questionBank.length - 1) {
    currentQuestionIndex++;
  } else {
    currentQuestionIndex++;
    nextButton.textContent = "Submit"; //
    // nextButton.href = "result.html";
  }
};

const calculateResult = () => {
  if (radio_option_a.checked) {
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[0]
    ) {
      console.log(true);
      score++;
    }
  } else if (radio_option_b.checked) {
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[1]
    ) {
      console.log(true);
      score++;
    }
  } else if (radio_option_c.checked) {
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[2]
    ) {
      console.log(true);
      score++;
    }
  } else if (radio_option_d.checked) {
    if (
      questionBank[currentQuestionIndex - 1].answer ==
      questionBank[currentQuestionIndex - 1].options[3]
    ) {
      console.log(true);
      score++;
    }
  }
  console.log("current score " + score);
};

startTimer();
nextQuestion();
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questionBank.length) {
    calculateResult();
    nextQuestion();
  } else {
    calculateResult();
    localStorage.setItem("quizScore", score);
    localStorage.setItem("totalQuestions", questionBank.length);

    // ✅ Redirect to result page
    window.location.href = "result.html";
  }
});
