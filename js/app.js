var state = {
	questions: [
		{
			questionText: "#1. What were the name of the Aegon the Conqueror's three dragons?",
			questionChoices: ['A. Balerion, Vhagar, Meraxes', 'B. Drogon, Rhaegal, Viserion', 'C. Balerion, Quicksilver, Tessarion', 'D. Drogon, Viserion, Tyraxes'],
			correctChoiceIndex: 0,
			answerText: "The correct answer was A. Balerion, Vhagar and Meraxes",
			answerInfo: "Aegon rode Balerion and his two sister-wives, Visenya and Rhaenys, rode Vhagar and Meraxes respectively."
		},
		{
			questionText: "#2. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 2,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#3. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 1,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#4. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 3,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#5. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 2,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#6. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 0,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#7. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 1,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#8. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 1,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#9",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 3,
			answerText: "",
			answerInfo: ""
		},
		{
			questionText: "#10",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 2,
			answerText: "",
			answerInfo: ""
		}
	],
	score: 0,
	currentQuestionNumber: 0,
	position: 'quiz-start',
	lastAnswer: false,
};

var page_variables = {
	'quiz-start': $('.quiz-start'),
	'quiz-question': $('.quiz-question'),
	'quiz-answer': $('.quiz-answer'),
	'quiz-score': $('.quiz-score')
};

function setPosition(state, position) {
	state.position = position;
};

function restartQuiz(state) {
	state.score = 0;
	state.currentQuestionNumber = 0;
	setPosition(state, 'quiz-start');
};

function answerQuestion(state, answer) {
	var currentQuestion = state.questions[state.currentQuestionNumber];
	state.lastAnswer = currentQuestion.currentQuestionNumber === answer;
	if (state.lastAnswer) {
		state.score++;
	}
	setPosition(state, 'quiz-answer');
};



function nextQuestion(state) {
	state.currentQuestionNumber++;
	if (state.currentQuestionNumber === state.questions.length) {
		setPosition(state, 'quiz-score');
	} else {
		setPosition(state, 'question');
	}
};

function renderPage(state, elements) {
	Object.keys(elements).forEach(function(position) {
		elements[position].hide();
	});
	elements[state.position].show();

	if (state.position === 'quiz-start') {
		renderQuizStart(state, elements[state.position]);
	} else if (state.position === 'quiz-question') {
		renderQuizQuestion(state, elements[state.position]);
	} else if (state.position === 'quiz-answer') {
		renderQuizAnswer(state, elements[state.position]);
	} else if (state.position === 'quiz-score') {
		renderQuizScore(state, elements[state.position]);
	}
};

// Rendering sections
function renderQuizStart(state, element) {
};

function renderQuizQuestion(state, element) {
	renderQuestionText(state, element.find('.question-text'));
	renderQuestionChoices(state, element.find('.question-choices'));
};

function renderQuizAnswer(state, element) {
	renderAnswerHeader(state, element.find('.answer-header'));
	renderAnswerText(state, element.find('.answer-text'));
	renderAnswerInfo(state, element.find('.answer-info'));
};

function renderQuizScore(state, element) {
	renderFinalScore(state, element.find('.final-score'));
};

// Rendering elements within sections
function renderQuestionText(state, element) {
	var currentQuestion = state.questions[state.currentQuestionNumber];
	var text = currentQuestion.questionText;
	element.text(text);
};

function renderQuestionChoices(state, element) {
	var currentQuestion = state.questions[state.currentQuestionNumber];
	var choices = currentQuestion.questionChoices.map(function(choice, index) {
		return (
			'<li><input type="radio" name="user-answer" value="' + index + '" required><label>' + choice + '</label></li>'
		);
	});
	element.html(choices);
};

function renderAnswerHeader(state, element) {
	var html = state.lastAnswer ? '<h3 class="correct-answer">Correct!</h3>' : '<h3 class="incorrect-answer">Incorrect!</h3>';
};

function renderAnswerText(state, element) {
	var currentQuestion = state.questions[state.currentQuestionNumber];
	var text = currentQuestion.answerText;
	element.text(text);
};

function renderAnswerInfo(state, element) {
	var currentQuestion = state.questions[state.currentQuestionNumber];
	var text = currentQuestion.answerInfo;
	element.text(text);
};

function renderFinalScore(state, element) {
	var text = 'You scored ' + state.score + ' out of ' + state.questions.length + '.';
	element.text(text);
};

$('form[name="quiz-begin"]').submit(function(event) {
	event.preventDefault();
	setPosition(state, 'quiz-question');
	renderPage(state, page_variables);
});

$('form[name="question-form"]').submit(function(event) {
	event.preventDefault();
	var answer = $('input[name="user-answer"]:checked').val();
	answer = parseInt(answer, 10);
	answerQuestion(state, answer);
	renderPage(state, page_variables);
});

$('form[name="quiz-continue"]').submit(function(event) {
	nextQuestion(state);
	renderPage(state, page_variables);
});

$('form[name="try-again"]').submit(function(event) {
	event.preventDefault();
	restartQuiz(state);
	renderPage(state, page_variables);
});

$(function() {
	renderPage(state, page_variables);
});