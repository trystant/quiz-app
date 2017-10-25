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
	state.lastAnswer = currentQuestion.correctChoiceIndex === answer;
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
		setPosition(state, 'quiz-question');
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
	renderQuestionNumber(state, element.find('.question-number'));
	renderQuestionScore(state, element.find('.question-score'));
	renderQuestionChoices(state, element.find('.question-choices'));
};

function renderQuizAnswer(state, element) {
	renderAnswerHeader(state, element.find('.answer-header'));
	renderAnswerText(state, element.find('.answer-text'));
	renderAnswerInfo(state, element.find('.answer-info'));
	$('.quiz-question').show();
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

function renderQuestionNumber(state, element) {
	var currentQuestion = state.questions[state.currentQuestionNumber];
	var text = 'Question ' + currentQuestion.number + ' out of ' + state.questions.length;
	element.text(text);
}

function renderQuestionScore(state, element) {
	var text = 'Current Score: ' + state.score + ' out of ' + state.questions.length;
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
	var html = state.lastAnswer ? '<h3 class="correct-answer">Correct!</h3>' : '<h3 class="incorrect-answer">Incorrect!</>';
	element.html(html);
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

$('.try-again').click(function(event) {
	event.preventDefault();
	restartQuiz(state);
	renderPage(state, page_variables);
});

$('form[name="question-form"]').submit(function(event) {
	event.preventDefault();
	var answer = $('input[name="user-answer"]:checked').val();
	answer = parseInt(answer, 10);
	answerQuestion(state, answer);
	renderPage(state, page_variables);
});

$('.quiz-continue').click(function(event) {
	nextQuestion(state);
	renderPage(state, page_variables);
});

$(function() { renderPage(state, page_variables); });