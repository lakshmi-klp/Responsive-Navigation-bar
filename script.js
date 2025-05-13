const levelNames = [
  "Novice Nexus 🚀", "Brain Blitz 🌟", "Knowledge Kickoff 🧠", "Wisdom Warmup 🔥", "Intellect Ignite ⚡",
  "Clever Climb 🏞️", "Mind Mash 🌈", "Smart Spark ✨", "Genius Gateway 🏰", "Thinker’s Trail 🛤️",
  "Puzzle Peak ⛰️", "Insight Isle 🏝️", "Brainy Bridge 🌉", "Quiz Quest 🗺️", "Logic Leap 🦘",
  "Wit Whirlwind 🌪️", "Knowledge Knoll 🏔️", "Mind Marathon 🏃", "Intellect Inferno 🔥", "Cognition Canyon 🏜️",
  "Smart Summit 🗻", "Brain Breeze 🍃", "Wisdom Wave 🌊", "Think Tank ⚙️", "Genius Grove 🌳",
  "Insight Inferno 🌋", "Quiz Quell ☔", "Mind Mirage 🪐", "Logic Labyrinth 🌀", "Wit Wilderness 🌲",
  "Brain Bastion 🏯", "Knowledge Nexus 🌌", "Smart Storm ⛈️", "Intellect Island 🏖️", "Clever Citadel 🏛️",
  "Puzzle Plateau 🏞️", "Mind Matrix 🔢", "Wisdom Whirlpool 🌀", "Thinker’s Throne 👑", "Genius Glacier ❄️",
  "Insight Odyssey 🚢", "Quiz Quantum ⚛️", "Brain Blaze 🌞", "Logic Legends 🏆", "Wit Wonderland 🎡",
  "Knowledge Knight ⚔️", "Smart Sanctuary 🕍", "Intellect Empire 🏰", "Clever Cosmos 🌠", "Mastery Mountain 🗻"
];

const quizData = [
  [
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], correct: "Delhi", type: "Places" },
    { question: "What is 2 + 3?", options: ["4", "5", "6", "7"], correct: "5", type: "Maths" },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: "Carbon Dioxide", type: "Science" },
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Control Processing Unit", "Computer Power Unit", "Central Power Unit"], correct: "Central Processing Unit", type: "Computer" },
    { question: "Which country is the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], correct: "Japan", type: "Places" },
    { question: "What is 10 - 4?", options: ["5", "6", "7", "8"], correct: "6", type: "Maths" },
    { question: "What is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: "Jupiter", type: "Science" },
    { question: "Which key copies text?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"], correct: "Ctrl+C", type: "Computer" },
    { question: "Where is the Taj Mahal?", options: ["Mumbai", "Agra", "Delhi", "Jaipur"], correct: "Agra", type: "Places" },
    { question: "What is 4 × 2?", options: ["6", "8", "10", "12"], correct: "8", type: "Maths" },
    { question: "Which animal is the king of the jungle?", options: ["Tiger", "Lion", "Elephant", "Cheetah"], correct: "Lion", type: "GK" },
    { question: "What is the extension for Python files?", options: [".py", ".java", ".cpp", ".html"], correct: ".py", type: "Computer" },
    { question: "Which continent is Australia in?", options: ["Asia", "Africa", "Australia", "Europe"], correct: "Australia", type: "Maps" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correct: "100°C", type: "Science" },
    { question: "Which city has the Eiffel Tower?", options: ["London", "Paris", "Rome", "Berlin"], correct: "Paris", type: "Places" }
  ],
  [
    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Brasilia", "Sao Paulo", "Salvador"], correct: "Brasilia", type: "Places" },
    { question: "What is 15 ÷ 3?", options: ["4", "5", "6", "7"], correct: "5", type: "Maths" },
    { question: "What gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correct: "Nitrogen", type: "Science" },
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "Home Text Markup Language"], correct: "Hyper Text Markup Language", type: "Computer" },
    { question: "Which country has the Great Wall?", options: ["India", "China", "Japan", "Korea"], correct: "China", type: "Places" },
    { question: "What is 12 + 7?", options: ["18", "19", "20", "21"], correct: "19", type: "Maths" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "N2"], correct: "H2O", type: "Science" },
    { question: "Which command prints in Python?", options: ["print()", "echo()", "write()", "display()"], correct: "print()", type: "Computer" },
    { question: "Where is Machu Picchu?", options: ["Mexico", "Peru", "Brazil", "Chile"], correct: "Peru", type: "Places" },
    { question: "What is 8 × 5?", options: ["35", "40", "45", "50"], correct: "40", type: "Maths" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correct: "Leonardo da Vinci", type: "GK" },
    { question: "What is the full form of RAM?", options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Rapid Access Memory"], correct: "Random Access Memory", type: "Computer" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: "Pacific", type: "Maps" },
    { question: "What is the main energy source for Earth?", options: ["Moon", "Sun", "Stars", "Wind"], correct: "Sun", type: "Science" },
    { question: "Which city is the Big Apple?", options: ["Los Angeles", "New York", "Chicago", "Miami"], correct: "New York", type: "Places" }
  ],
  [
    { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], correct: "Cairo", type: "Places" },
    { question: "Solve: 2x = 14. What is x?", options: ["6", "7", "8", "9"], correct: "7", type: "Maths" },
    { question: "Which element has the symbol Fe?", options: ["Iron", "Gold", "Silver", "Copper"], correct: "Iron", type: "Science" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], correct: "Cascading Style Sheets", type: "Computer" },
    { question: "Where is the Colosseum?", options: ["Greece", "Italy", "Spain", "Turkey"], correct: "Italy", type: "Places" },
    { question: "What is 6 × 8?", options: ["42", "48", "54", "60"], correct: "48", type: "Maths" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], correct: "Mitochondria", type: "Science" },
    { question: "Which language is primary for web development?", options: ["Python", "JavaScript", "C++", "Java"], correct: "JavaScript", type: "Computer" },
    { question: "Which country has the Pyramids of Giza?", options: ["Mexico", "Egypt", "India", "China"], correct: "Egypt", type: "Places" },
    { question: "What is 24 ÷ 3?", options: ["6", "8", "10", "12"], correct: "8", type: "Maths" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correct: "William Shakespeare", type: "GK" },
    { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"], correct: "Uniform Resource Locator", type: "Computer" },
    { question: "Which continent has the Sahara Desert?", options: ["Asia", "Africa", "Australia", "South America"], correct: "Africa", type: "Maps" },
    { question: "What gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: "Carbon Dioxide", type: "Science" },
    { question: "Which city has the Statue of Liberty?", options: ["Boston", "New York", "Philadelphia", "Washington D.C."], correct: "New York", type: "Places" }
  ],
  [
    { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], correct: "Canberra", type: "Places" },
    { question: "Solve: 3x + 5 = 14. What is x?", options: ["2", "3", "4", "5"], correct: "3", type: "Maths" },
    { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], correct: "Mercury", type: "Science" },
    { question: "What is a firewall in computing?", options: ["A virus", "A security system", "A hardware component", "A programming language"], correct: "A security system", type: "Computer" },
    { question: "Where is the Leaning Tower of Pisa?", options: ["France", "Italy", "Spain", "Greece"], correct: "Italy", type: "Places" },
    { question: "What is 9 × 7?", options: ["56", "63", "70", "77"], correct: "63", type: "Maths" },
    { question: "What is the primary source of Earth's climate energy?", options: ["Wind", "Sun", "Ocean", "Geothermal"], correct: "Sun", type: "Science" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "System Query Language", "Standard Query Language"], correct: "Structured Query Language", type: "Computer" },
    { question: "Which country has Stonehenge?", options: ["Ireland", "England", "Scotland", "Wales"], correct: "England", type: "Places" },
    { question: "What is 25 - 13?", options: ["10", "12", "14", "16"], correct: "12", type: "Maths" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"], correct: "Alexander Fleming", type: "GK" },
    { question: "What is the base of the binary number system?", options: ["2", "8", "10", "16"], correct: "2", type: "Computer" },
    { question: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile", type: "Maps" },
    { question: "What gas fills balloons to make them float?", options: ["Oxygen", "Helium", "Nitrogen", "Carbon Dioxide"], correct: "Helium", type: "Science" },
    { question: "Which city has the Golden Gate Bridge?", options: ["Los Angeles", "San Francisco", "Seattle", "San Diego"], correct: "San Francisco", type: "Places" }
  ],
  [
    { question: "What is the capital of South Africa?", options: ["Johannesburg", "Pretoria", "Cape Town", "Durban"], correct: "Pretoria", type: "Places" },
    { question: "Solve: 2x² - 8 = 0. What is x?", options: ["±1", "±2", "±3", "±4"], correct: "±2", type: "Maths" },
    { question: "What is the speed of light in a vacuum?", options: ["300,000 km/s", "300,000 m/s", "3,000 km/s", "3,000 m/s"], correct: "300,000 km/s", type: "Science" },
    { question: "What is an IP address?", options: ["A physical address", "A unique network identifier", "A software name", "A file extension"], correct: "A unique network identifier", type: "Computer" },
    { question: "Where is Chichen Itza?", options: ["Peru", "Mexico", "Brazil", "Guatemala"], correct: "Mexico", type: "Places" },
    { question: "What is 15% of 200?", options: ["20", "30", "40", "50"], correct: "30", type: "Maths" },
    { question: "Which scientist proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"], correct: "Albert Einstein", type: "Science" },
    { question: "What is a loop in programming?", options: ["A data type", "A repetitive structure", "A function", "A variable"], correct: "A repetitive structure", type: "Computer" },
    { question: "Which country has Petra?", options: ["Egypt", "Jordan", "Syria", "Iraq"], correct: "Jordan", type: "Places" },
    { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], correct: "12", type: "Maths" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Virginia Woolf"], correct: "Jane Austen", type: "GK" },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Automated Program Interface", "Application Process Interface", "Automated Processing Interface"], correct: "Application Programming Interface", type: "Computer" },
    { question: "Which country has the most deserts?", options: ["Australia", "Antarctica", "Saudi Arabia", "Egypt"], correct: "Antarctica", type: "Maps" },
    { question: "What is the primary source of energy for Earth's magnetic field?", options: ["Sun", "Earth's core", "Moon", "Solar wind"], correct: "Earth's core", type: "Science" },
    { question: "Which city has the Burj Khalifa?", options: ["Abu Dhabi", "Dubai", "Doha", "Riyadh"], correct: "Dubai", type: "Places" }
  ]
];

let currentLevel = 0;
let currentQuestion = 0;
let score = 10;
let userAnswers = [];
let unlockedLevels = [1];
let usedQuestions = [];

window.onload = function() {
  const frontPage = document.getElementById("front-page");
  const quizApp = document.getElementById("quiz-app");
  const startQuizBtn = document.getElementById("start-quiz-btn");
  const levelSelection = document.getElementById("level-selection");
  const levelsEl = document.getElementById("levels");
  const quiz = document.getElementById("quiz");
  const currentLevelEl = document.getElementById("current-level");
  const currentQuestionNumEl = document.getElementById("current-question-num");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const passMessageEl = document.getElementById("pass-message");
  const nextLevelBtn = document.getElementById("next-level-btn");
  const retryBtn = document.getElementById("retry-btn");
  const backToLevelsBtn = document.getElementById("back-to-levels-btn");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  if (!startQuizBtn) {
    console.error("Start Quiz button not found!");
    return;
  }

  console.log("DOM loaded, attaching event listener to Start Quiz button");

  startQuizBtn.addEventListener("click", () => {
    console.log("Start Quiz button clicked");
    frontPage.classList.add("hidden");
    quizApp.classList.remove("hidden");
    loadLevels();
  });

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function loadLevels() {
    levelsEl.innerHTML = "";
    for (let i = 0; i < 50; i++) {
      const btn = document.createElement("button");
      btn.textContent = levelNames[i];
      btn.className = `level-button ${unlockedLevels.includes(i) ? "unlocked" : "locked"}`;
      const angle = (i * Math.PI) / 5;
      const x = i * 150;
      const y = 100 + 40 * Math.sin(angle);
      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
      if (unlockedLevels.includes(i)) {
        btn.addEventListener("click", () => {
          console.log(`Level ${i + 1} clicked`);
          startLevel(i);
        });
      } else {
        btn.disabled = true;
      }
      levelsEl.appendChild(btn);
    }
    levelsEl.style.width = `${50 * 150}px`;
  }

  function startLevel(level) {
    if (level >= quizData.length) {
      alert("This challenge is not yet available. Add more questions to continue!");
      return;
    }
    currentLevel = level;
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    usedQuestions = [];
    levelSelection.classList.add("hidden");
    quiz.classList.remove("hidden");
    resultEl.classList.add("hidden");
    console.log(`Starting Level ${currentLevel + 1}`);
    loadQuestion();
  }

  function loadQuestion() {
    const availableQuestions = quizData[currentLevel].filter(q => !usedQuestions.includes(q.question));
    if (availableQuestions.length === 0) {
      alert("No more unique questions available!");
      return;
    }
    const q = shuffle(availableQuestions)[0];
    usedQuestions.push(q.question);
    currentLevelEl.textContent = levelNames[currentLevel];
    currentQuestionNumEl.textContent = currentQuestion + 1;
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = `
        <input type="radio" name="answer" id="option${index}" value="${option}">
        <label for="option${index}">${option}</label>
      `;
      optionsEl.appendChild(div);
    });
    nextBtn.textContent = currentQuestion === quizData[currentLevel].length - 1 ? "Submit" : "Next";
  }

  function getSelected() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    return selectedOption ? selectedOption.value : null;
  }

  nextBtn.addEventListener("click", () => {
    const selected = getSelected();
    if (!selected) {
      alert("Please select an answer! 😊");
      return;
    }
    const currentQuiz = quizData[currentLevel].find(q => q.question === usedQuestions[usedQuestions.length - 1]);
    userAnswers.push({ question: currentQuiz.question, selected, correct: currentQuiz.correct });
    if (selected === currentQuiz.correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData[currentLevel].length) {
      loadQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    quiz.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
    resultLevel.textContent = levelNames[currentLevel];
    console.log(`Score: ${score}, Current Level: ${currentLevel}, Unlocked Levels: ${unlockedLevels}`);
    if (score >= 10) {
      passMessageEl.textContent = "Awesome! You conquered this challenge! 🎉";
      const nextLevel = currentLevel + 1;
      if (nextLevel < 50 && !unlockedLevels.includes(nextLevel)) {
        unlockedLevels.push(nextLevel);
        console.log(`Unlocked Level ${nextLevel + 1}`);
      }
      nextLevelBtn.classList.remove("hidden");
      retryBtn.classList.add("hidden");
    } else {
      passMessageEl.textContent = "Oh no! You need 10/15 to pass. Check your incorrect answers below. 😔";
      nextLevelBtn.classList.add("hidden");
      retryBtn.classList.remove("hidden");
      showIncorrectAnswers();
    }
  }

  function showIncorrectAnswers() {
    modalBody.innerHTML = "";
    userAnswers.forEach((answer, index) => {
      if (answer.selected !== answer.correct) {
        const div = document.createElement("div");
        div.className = "mb-4";
        div.innerHTML = `
          <p><strong>Question:</strong> ${answer.question}</p>
          <p><strong>Your Answer:</strong> ${answer.selected} <span class="text-red-500">(Incorrect)</span></p>
          <p><strong>Correct Answer:</strong> ${answer.correct} ✅</p>
        `;
        modalBody.appendChild(div);
      }
    });
    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  nextLevelBtn.addEventListener("click", () => {
    const nextLevel = currentLevel + 1;
    if (nextLevel < 50) {
      startLevel(nextLevel);
    } else {
      alert("Congratulations! You've completed all levels! 🎉");
      resultEl.classList.add("hidden");
      levelSelection.classList.remove("hidden");
      loadLevels();
    }
  });

  retryBtn.addEventListener("click", () => {
    startLevel(currentLevel);
  });

  backToLevelsBtn.addEventListener("click", () => {
    resultEl.classList.add("hidden");
    levelSelection.classList.remove("hidden");
    loadLevels();
  });

  console.log('Quiz script loaded');
};