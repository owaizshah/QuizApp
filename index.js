"use strict";

const quiz = [
  {
    question: "Which is best programming language?",
    a: "Python",
    b: "C++",
    c: "Java",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Who is the president of Pakistan?",
    a: "Imran khan",
    b: "Nawaz sharif",
    c: "Arif Alvi",
    d: "Bilawal Bhutto",
    correct: "c",
  },
  {
    question: "What color does yellow and green make?",
    a: "Lime",
    b: "Blue",
    c: "Ocean Mist",
    d: "Maroon",
    correct: "a",
  },
  {
    question: "What is the Full Form of Html",
    a: "Hypertext major language",
    b: "Hydro markup london",
    c: "Hypertext markup Language",
    d: "His Technical Materials Language",
    correct: "c",
  },
  {
    question: "What is the national Animal of Pakistan",
    a: "Lion",
    b: "Markhor",
    c: "Deer",
    d: "Punjabi",
    correct: "b",
  },
];

const container = document.querySelector(".container");
const questionEl = document.querySelector("h2");
const a_El = document.querySelector(".a");
const b_El = document.querySelector(".b");
const c_El = document.querySelector(".c");
const d_El = document.querySelector(".d");
const btn = document.querySelector(".btn");
const answersEl = document.querySelectorAll(".answer");
let quizNo = 0;
let correctAnswer = 0;

const loadQuestion = function () {
  questionEl.textContent = quiz[quizNo].question;
  a_El.textContent = quiz[quizNo].a;
  b_El.textContent = quiz[quizNo].b;
  c_El.textContent = quiz[quizNo].c;
  d_El.textContent = quiz[quizNo].d;
};
loadQuestion();

const getAnswer = function () {
  let inputAnswer;
  answersEl.forEach((el) => {
    if (el.checked) {
      inputAnswer = el.id;
    }
    el.checked = false;
  });
  return inputAnswer;
};

///Event Listner//
btn.addEventListener("click", function () {
  let answerInput = getAnswer();
  if (answerInput) {
    if (answerInput === quiz[quizNo].correct) {
      correctAnswer++;
    }
    quizNo++;
    if (quizNo < quiz.length) {
      loadQuestion();
    } else {
      container.innerHTML = `<h1 class="result">Correct Answers ${correctAnswer}/${quiz.length}</h1>`;
    }
  }
});

console.log(container);
