var allQuestions = [
	{
		question: "Who is prime minister of the United Kingdom?",
		choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
		correctAnswer:0
	},
	{
		question: "What is the most populous country in the world?",
		choices: ["China", "France", "United State", "Russia"],
		correctAnswer: 0
	},
	{
		question: "Which scientist discovered the radioactive element radium?",
		choices: ["Isaac Newton", "Albert Einstein", "Benjamin Franklin", "Marie Curie"],
		correctAnswer: 3
	}
];

var curQuestion = 0;
var score = 0;

// creating dom elements
var wrapper = document.createElement('div');
var choices = allQuestions[curQuestion].choices;
var bold = document.createElement('b');
var submit = document.createElement('button');
var lable = document.createElement('lable');
var input = document.createElement('input');
var p_score = document.createElement('p');

// add elements to the DOM
window.onload = function(){
	// adding wrapper element to DOM
	document.body.appendChild(wrapper);
	//add question
	bold.appendChild(document.createTextNode(allQuestions[curQuestion].question));
	wrapper.appendChild(bold);
	var questions = document.createElement('div');
	questions.setAttribute('class','questions');
	wrapper.appendChild(questions);
	for(var i = 0; i < choices.length; i++){
		lable = document.createElement('lable');
		input = document.createElement('input');
		
		input.setAttribute('type', 'radio');
		input.setAttribute('name','choice');
		input.setAttribute('value', i);
		questions.appendChild(input);
		lable.appendChild(document.createTextNode(choices[i]));
		questions.appendChild(lable);
	}
	
	// sumbit button
	submit.appendChild(document.createTextNode('Submit'));
	submit.setAttribute('id', 'submit');
	wrapper.appendChild(submit);
	var button_sumbit = document.getElementById('sumbit');
	wrapper.appendChild(p_score);
	p_score.innerHTML = "score: " + score + " out of " + 3;

}

submit.addEventListener('click', function(){
	var radios = document.getElementsByName('choice');
    for (var i=0; i < radios.length; i++){
        if(radios[i].checked){
			if(radios[i].value == allQuestions[curQuestion].correctAnswer){
				score += 1;
			}
        }
    }
	p_score.innerHTML = "score: " + score + " out of " + 3;
	curQuestion++;
	if(curQuestion == 3){
		curQuestion = 0;
		score = 0;
		p_score.innerHTML = "score: " + score + " out of " + 3;
	}
	bold.innerHTML = allQuestions[curQuestion].question;
	var radios = document.getElementsByTagName('lable');
	for(var i = 0; i < radios.length; i++){
		radios[i].innerHTML = allQuestions[curQuestion].choices[i];
	}
	
});

