

  // Load popups
  fetch("popup.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("popup-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading popups:", error));





function showLoginPopup() {
  document.getElementById("login-popup").style.display = "block";
}

function closeLoginPopup() {
  document.getElementById("login-popup").style.display = "none";
}

function showSignupPopup() {
  document.getElementById("signup-popup").style.display = "block";
}

function closeSignupPopup() {
  document.getElementById("signup-popup").style.display = "none";
}

// Quiz

const quizData = [
  {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
  },
  {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborghinis",
      correct: "a",
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "None of the above",
      correct: "b",
  },
  {
    question: "What will be the output of the following code snippet?print(typeof(NaN));",
    a: "Object",
    b: "Number",
    c: "String",
    d: "None of the above",
    correct: "b",
},
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");

let currentQuiz = 0;
let score = 0;
let timeLeft = 15;
let timer;
let quizStarted = false;

// Create and add the Start Quiz button
const startBtn = document.createElement("button");
startBtn.innerText = "Start Quiz";
startBtn.classList.add("ans-btn");
startBtn.addEventListener("click", startQuiz);
quiz.appendChild(startBtn);

// Function to start the quiz
function startQuiz() {
  if (!quizStarted) {
    quizStarted = true;
    startBtn.style.display = "none";
    submitBtn.style.display = "block";
    loadQuiz();
  }
}

// Function to load a new question
function loadQuiz() {
  clearInterval(timer); 
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  timeLeft = 30;
  timerEl.innerText = `Time left: ${timeLeft}s`;

  // Start countdown only after the quiz has started
  timer = setInterval(() => {
      timeLeft--;
      timerEl.innerText = `Time left: ${timeLeft}s`;

      if (timeLeft === 0) {
          clearInterval(timer);
          nextQuestion(); // Move to the next question when time runs out
      }
  }, 1000);
}

// Function to deselect radio buttons
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// Function to get selected answer
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

// Function to move to the next question
function nextQuestion() {
  const answer = getSelected();
  if (answer && answer === quizData[currentQuiz].correct) {
      score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
      loadQuiz();
  } else {
      clearInterval(timer);
      quiz.innerHTML = `
          <h2>You scored ${score}/${quizData.length}!</h2>
          <button onclick="location.reload()">Restart Quiz</button>
      `;
  }
}

// Event listener for submit button
submitBtn.addEventListener("click", () => {
  clearInterval(timer);
  nextQuestion();
});

// Hide the submit button initially
submitBtn.style.display = "none";




//  video

function openVideo(src) {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");

  video.src = src; 
  popup.style.display = "block";
  video.play(); 
}

function closeVideo() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");

  video.pause();
  video.src = ""; 
  popup.style.display = "none";
}






// PDF

function openPdf(pdfUrl) {
  document.getElementById("pdf-frame").src = pdfUrl;
  document.getElementById("pdf-viewer").style.display = "block";
}

function closePdf() {
  document.getElementById("pdf-frame").src = "";
  document.getElementById("pdf-viewer").style.display = "none";
}






// Regiatrtion validation

function validation(event) {
  event.preventDefault(); // Prevent default form submission behavior

  let firstname = document.getElementById("firstname").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let gender = document.getElementById("gender").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;

  // Validate required fields
  if (!firstname) {
      alert("Firstname is required");
      return false;
  }
  if (!lastname) {
      alert("Lastname is required");
      return false;
  }
  if (gender === "gender") {
      alert("Gender is required");
      return false;
  }
  if (!city) {
      alert("City is required");
      return false;
  }

  // Validate email format
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email");
      return false;
  }

  // Validate password complexity
  let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!password || !confirmpassword) {
      alert("Password and Confirm Password are required");
      return false;
  }
  if (!passwordPattern.test(password)) {
      alert("Password must have at least 8 characters, one uppercase letter, one number, and one special character");
      return false;
  }
  if (password !== confirmpassword) {
      alert("Passwords do not match");
      return false;
  }

  // Store email and password in localStorage after successful validation
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Registered Successfully");

  // Close the registration popup **only** if all validation passes
  document.getElementById("signup-popup").style.display = "none";

  // Reset the form
  document.getElementById("signup-form").reset();

  return true;
}



// Login
function loginValidation(event) {
  event.preventDefault(); // Prevent form submission and page reload
  console.log("Login form submitted"); // Debugging line

  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  console.log("Username:", username); // Debugging line
  console.log("Password:", password); // Debugging line

  if (username === "" || password === "") {
      alert("Username and Password are required.");
      return false;
  }

  let storedEmail = localStorage.getItem("email");
  let storedPassword = localStorage.getItem("password");

  console.log("Stored Email:", storedEmail); // Debugging line
  console.log("Stored Password:", storedPassword); // Debugging line

  if (username !== storedEmail || password !== storedPassword) {
      alert("Invalid username or password.");
      return false;
  }

  alert("Login successful!");
  closeLoginPopup(); // Close the popup after successful login
  return true;
}
