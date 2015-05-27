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

// add elements to the DOM
window.onload = function(){
	// adding wrapper element to DOM
	document.body.appendChild(wrapper);
	//add question
	bold.appendChild(document.createTextNode(allQuestions[curQuestion].question));
	wrapper.appendChild(bold);

	for(var i = 0; i < choices.length; i++){
		var lable = document.createElement('lable');
		var input = document.createElement('input');
		
		input.setAttribute('type', 'radio');
		input.setAttribute('name','choice');
		input.setAttribute('value', i);
		
		lable.appendChild(input);
		lable.appendChild(document.createTextNode(choices[i]));
		wrapper.appendChild(lable);
	}
	
	// sumbit button
	submit.appendChild(document.createTextNode('Submit'));
	submit.setAttribute('id', 'submit');
	wrapper.appendChild(submit);
	var button_sumbit = document.getElementById('sumbit');

}



function checkAnswer(){
	var radios = document.getElementsByName('choice');
	for(var i = 0; i < radios.length; i++){
		radios[i].onclick = function(){
			if(this.value == allQuestions[curQuestion].correctAnswer){
				score += 1;
			}
		};
	}
}


submit.addEventListener('click', function(){
	var p = document.createElement('p');
	var radios = document.getElementsByName('choice');
	var chosen;
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			chosen = radios[i].value;
		}
	}
	if(chosen == allQuestions[0].correctAnswer){
		p.appendChild(document.createTextNode('Correct!'))
		p.setAttribute('class','correct');
		wrapper.appendChild(p);
	}
	else{
		p.appendChild(document.createTextNode('That is not correct, please try again.'));
		p.setAttribute('class', 'wrong');
		wrapper.appendChild(p);
	}
});

