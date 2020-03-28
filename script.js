(
    function game() {
        while (true) {

            var Question = function(question, answers, correctAnswer) {
                this.question = question;
                this.answers = answers;
                this.correctAnswer = correctAnswer;
                
            }

            Question.prototype.displayQuestion = function() {
                console.log(this.question);
                for (let i = 0; i < this.answers.length; i++) {
                    console.log(i + '. ' + this.answers[i]);
                }
            }

            Question.prototype.checkAnswer = function(answer) {
                let result = parseInt(answer) == this.correctAnswer ? "correct" : "wrong";
                console.log('Your answer: ' + answer + '. It is ' + result + '.');
            }

            var questions = [];

            questions.push(new Question('Inside which HTML element do we put the JavaScript?', ['<scripting>', '<script>', '<js>', '<javascript>'], 1));

            questions.push(new Question('What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>', ['document.getElementByName("p").innerHTML = "Hello World!";', ' document.getElementById("demo").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";'], 1));

            questions.push(new Question('Where is the correct place to insert a JavaScript?', ['Both the <head> section and the <body> section are correct', 'The <head> section', 'The <body> section'], 1));

            questions.push(new Question('What is the correct syntax for referring to an external script called "xxx.js"?', ['<script name="xxx.js">', ' <script src="xxx.js">', ' <script href="xxx.js">'], 1));

            questions.push(new Question('The external JavaScript file must contain the <script> tag.', ['True', 'False'], 1));

            questions.push(new Question('How do you write "Hello World" in an alert box?', [' alert("Hello World");', ' alertBox("Hello World");', ' msg("Hello World");', 'msgBox("Hello World");'], 0));


            let randomIndex = Math.round(Math.random()*(questions.length-1));

            questions[randomIndex].displayQuestion();

            const answer = prompt("Enter answer: ");
            if (answer === "exit")
            {
                break;
            }
            questions[randomIndex].checkAnswer(answer);
        }
    }
)();