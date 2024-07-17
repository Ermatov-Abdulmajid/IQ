let currentQuestion = 1;

function nextQuestion(questionNumber) {
  const radios = document.querySelectorAll(`input[name="q${questionNumber}"]`);
  const button = document.querySelector(
    `#question${questionNumber} .button-next`
  );
  let selected = false;

  radios.forEach((radio) => {
    if (radio.checked) {
      selected = true;
      const label = radio.parentElement;
      if (radio.value === "correct") {
        label.classList.add("correct");
      } else {
        label.classList.add("wrong");
      }
    }
  });

  if (selected) {
    const currentQuiz = document.getElementById(`question${questionNumber}`);
    currentQuiz.style.display = "none";

    if (questionNumber < 12) {
      const nextQuiz = document.getElementById(`question${questionNumber + 1}`);
      nextQuiz.style.display = "block";
    } else {
      document.getElementById("loadingAnimation").style.display = "block";
      setTimeout(showFinalMessage, 15000);
    }

    updateProgressBar(questionNumber);
  } else {
    alert("Пожалуйста, выберите ответ.");
  }
}

function updateProgressBar(questionNumber) {
  const progressBar = document.getElementById("progressBar");
  const progress = (questionNumber / 12) * 100;
  progressBar.style.width = `${progress}%`;

  if (progress === 100) {
    progressBar.style.backgroundColor = "#3bde7c";
  }
}

function showFinalMessage() {
  document.getElementById("loadingAnimation").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";
  document.querySelector(".site-header__text").textContent = "Готово!";
  startTimer(10 * 60);
}

function startTimer(duration) {
  let timer = duration,
    minutes,
    seconds;
  const timerElement = document.getElementById("timer");

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.querySelectorAll("label").forEach((label) => {
      label.classList.remove("selected");
    });
    if (this.value === "correct") {
      this.parentElement.classList.add("selected");
    }
  });
});
