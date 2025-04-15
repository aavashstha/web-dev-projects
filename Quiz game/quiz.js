
let index = 0;
let score = 0;
let answered = false;


const qna = [
  [
    {
      question: "What is the capital city of Nepal?",
      option1: "Pokhara",
      option2: "Kathmandu",
      option3: "Lalitpur",
      option4: "Biratnagar",
      optionTrue: "Kathmandu"
    },
    {
      question: "Which mountain is the highest peak in Nepal?",
      option1: "K2",
      option2: "Annapurna",
      option3: "Mount Everest",
      option4: "Makalu",
      optionTrue: "Mount Everest"
    },
    {
      question: "What is the national flower of Nepal?",
      option1: "Lotus",
      option2: "Sunflower",
      option3: "Rhododendron",
      option4: "Lily",
      optionTrue: "Rhododendron"
    },
    {
      question: "Which animal is the national animal of Nepal?",
      option1: "Bengal Tiger",
      option2: "Cow",
      option3: "Red Panda",
      option4: "Snow Leopard",
      optionTrue: "Cow"
    },
    {
      question: "Who is considered the founder of modern Nepal?",
      option1: "King Birendra",
      option2: "Prithvi Narayan Shah",
      option3: "Gyanendra Shah",
      option4: "Baburam Bhattarai",
      optionTrue: "Prithvi Narayan Shah"
    },
    {
      question: "Which religion is followed by the majority in Nepal?",
      option1: "Buddhism",
      option2: "Islam",
      option3: "Christianity",
      option4: "Hinduism",
      optionTrue: "Hinduism"
    },
    {
      question: "What is the currency of Nepal?",
      option1: "Rupee",
      option2: "Dollar",
      option3: "Taka",
      option4: "Yen",
      optionTrue: "Rupee"
    },
    {
      question: "What is the official language of Nepal?",
      option1: "Hindi",
      option2: "Nepali",
      option3: "Tibetan",
      option4: "English",
      optionTrue: "Nepali"
    },
    {
      question: "Which UNESCO World Heritage site is located in Nepal?",
      option1: "Great Wall",
      option2: "Taj Mahal",
      option3: "Lumbini",
      option4: "Angkor Wat",
      optionTrue: "Lumbini"
    },
    {
      question: "Which river is the longest in Nepal?",
      option1: "Bagmati",
      option2: "Seti",
      option3: "Koshi",
      option4: "Gandaki",
      optionTrue: "Koshi"
    }
  ]
  
]

const game = document.getElementById("game");
const startGame = document.getElementById("startGame");
let questionPart = document.getElementById("question");
let options = document.querySelectorAll(".options");
let option1Part = document.getElementById("option1");
let option2Part = document.getElementById("option2");
let option3Part = document.getElementById("option3");
let option4Part = document.getElementById("option4");
const next = document.getElementById("next");
let scorePart = document.getElementById("score");




startGame.onclick = function(){
  game.style.display = "block";
  startGame.style.display = "none";
  quizgame();
}
next.onclick = function(){
  if(index == 9){
    if(answered){
      game.innerHTML = `You've finished to game. <br>Your score is: ${score}<br>`;
      game.classList.add("finish");
      const restart = document.createElement("button");
      restart.textContent = "Restart";
      restart.id = "restart";
      game.appendChild(restart);
      restart.onclick = function(){
        location.reload();
      }
    }
    else{
      window.alert("Please select an answer.");
    }
  }
  else if(index == 8){
    next.textContent = `Results`;
    next.style.textDecoration = "underline";
    if(answered){
      index++;
      option1Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
      option1Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option1Part.style.color = "#b76e79";
      option1Part.style.textDecoration = "none";
      option2Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)"; 
      option2Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option2Part.style.color = "#b76e79"; 
      option2Part.style.textDecoration = "none";
      option3Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
      option3Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option3Part.style.color = "#b76e79";
      option3Part.style.textDecoration = "none";
      option4Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
      option4Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option4Part.style.color = "#b76e79";
      option4Part.style.textDecoration = "none";
      answered = false;
      quizgame();

    }
    else{
      window.alert("Please select an answer.")
    }

  }
  else{
      
    if(answered){
      index++;
      option1Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
      option1Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option1Part.style.color = "#b76e79";
      option1Part.style.textDecoration = "none";
      option2Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)"; 
      option2Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option2Part.style.color = "#b76e79"; 
      option2Part.style.textDecoration = "none";
      option3Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
      option3Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option3Part.style.color = "#b76e79";
      option3Part.style.textDecoration = "none";
      option4Part.style.background = "linear-gradient(to right, #fdfbfb, #ebedee)";
      option4Part.style.border = "4px solid hsl(0, 1%, 61%)";
      option4Part.style.color = "#b76e79";
      option4Part.style.textDecoration = "none";
      answered = false;
      quizgame();

    }
    else{
      window.alert("Please select an answer.")
    }

  }
}


function quizgame(){
  questionPart.textContent = qna[0][index].question;
  option1Part.textContent = `${qna[0][index].option1}`;
  option2Part.textContent = `${qna[0][index].option2}`;
  option3Part.textContent = `${qna[0][index].option3}`;
  option4Part.textContent = `${qna[0][index].option4}`;



  options.forEach(option => {
    option.addEventListener("click", event => {
      if(answered){
        return ;
      }

      answered = true;

      if(option.textContent.trim() == qna[0][index].optionTrue){
        event.target.style.background = "#57b846";
        event.target.style.border = "4px solid white";
        event.target.style.color = "white";
        event.target.style.transition = "background ease-in 0.2s";
        score++;
        scorePart.textContent = `Score: ${score}`;
      }
      else{
        event.target.style.background = "#ff4d4d";
        event.target.style.border = "4px solid white";
        event.target.style.color = "white";
        event.target.style.textDecoration = "line-through";
        event.target.style.transition = "background ease-in 0.2s";

        if(option1Part.textContent == qna[0][index].optionTrue){
          option1Part.style.background = "#57b846";
          option1Part.style.border = "4px solid white";
          option1Part.style.color = "white";
          option1Part.style.transition = "background ease-in 0.3s";
        }
        else if(option2Part.textContent == qna[0][index].optionTrue){
          option2Part.style.background = "#57b846";
          option2Part.style.border = "4px solid white";
          option2Part.style.color = "white";
          option2Part.style.transition = "background ease-in 0.3s";
        }
        else if(option3Part.textContent == qna[0][index].optionTrue){
          option3Part.style.background = "#57b846";
          option3Part.style.border = "4px solid white";
          option3Part.style.color = "white";
          option3Part.style.transition = "background ease-in 0.3s";
        }
        else if(option4Part.textContent == qna[0][index].optionTrue){
          option4Part.style.background = "#57b846";
          option4Part.style.border = "4px solid white";
          option4Part.style.color = "white";
          option4Part.style.transition = "background ease-in 0.3s";
        }
      }
    })
  })


}
