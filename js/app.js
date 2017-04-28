var state = {
	questions: [
		{
			questionText: "#1. What were the name of the Aegon the Conqueror's three dragons?",
			questionChoices: ['A. Balerion, Vhagar, Meraxes', 'B. Drogon, Rhaegal, Viserion', 'C. Balerion, Quicksilver, Tessarion', 'D. Drogon, Viserion, Tyraxes'],
			correctChoiceIndex: 0,
			answerText: "The correct answer was A. Balerion, Vhagar and Meraxes.",
			answerInfo: "Aegon rode Balerion and his two sister-wives, Visenya and Rhaenys, rode Vhagar and Meraxes respectively."
		},
		{
			questionText: "#2. Which Targaryen king first successfully conquered Dorne (for a time)?",
			questionChoices: ['A. Aegon I Targaryen', 'B. Viserys II Targaryen', 'C. Daeron I Targaryen', 'D. Aegon IV Targaryen'],
			correctChoiceIndex: 2,
			answerText: "The correct answer was C. Daeron I Targaryen.",
			answerInfo: 'Daeron I Targaryen, a.k.a. "The Young Dragon", conquered Dorne when he was 15 in 158 AC. He was killed in the rebellion in 161 AC at 18 years old.'
		},
		{
			questionText: "#3. Who was the man who knighted Jaime Lannister?",
			questionChoices: ['A. Ser Barristan Selmy', 'B. Ser Arthur Dayne', 'C. King Robert Baratheon', 'D. The Smiling Knight'],
			correctChoiceIndex: 1,
			answerText: "The correct answer was B. Arthur Dayne.",
			answerInfo: 'Ser Arthur Dayne, a.k.a. "The Sword of the Morning was a member of the Kingsguard and thought of as one of the greatest knights in the history of Westeros. He knighted Jaime Lannister after Jaime helped fight against the Kingswood Brotherhood.'
		},
		{
			questionText: "#4. Which of these characters has not had a POV Chapter?",
			questionChoices: ['A. Jaime Lannister', 'B. Theon Greyjoy', 'C. Victarion Greyjoy', 'D. Robb Stark'],
			correctChoiceIndex: 3,
			answerText: "The correct answer was D. Robb Stark.",
			answerInfo: "None of the initial kings in the War of the Five Kings received any POV Chapters. This was to add further emphasis onto the morally ambiguous nature of the conflict."
		},
		{
			questionText: "#5. Tywin Lannister wiped out House Reyne during their rebellion. Which other house did he wipe out with them?",
			questionChoices: ['A. House Greystark', 'B. House Casterly', 'C. House Tarbeck', 'D. House Gardener'],
			correctChoiceIndex: 2,
			answerText: "The correct answer was C. House Tarbeck.",
			answerInfo: "House Greystark was wiped out after joining the Boltons in rebellion against the Starks centuries. House Casterly vanished sometime in the Age of Heroes. House Gardener was wiped out during Aegon's Conquest."
		},
		{
			questionText: "#6. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 0,
			answerText: "The correct answer was A. ",
			answerInfo: ""
		},
		{
			questionText: "#7. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 1,
			answerText: "The correct answer was B. ",
			answerInfo: ""
		},
		{
			questionText: "#8. ",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 1,
			answerText: "The correct answer was B. ",
			answerInfo: ""
		},
		{
			questionText: "#9",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 3,
			answerText: "The correct answer was D. ",
			answerInfo: ""
		},
		{
			questionText: "#10",
			questionChoices: ['A. ', 'B. ', 'C. ', 'D. '],
			correctChoiceIndex: 2,
			answerText: "The correct answer was C. ",
			answerInfo: ""
		}
	],
	score: 0,
	currentQuestionNumber: 0,
	position: 'quiz-start',
	lastAnswer: false,
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

var page_variables = {
	'quiz-start': $('.quiz-start'),
	'quiz-question': $('.quiz-question'),
	'quiz-answer': $('.quiz-answer'),
	'quiz-score': $('.quiz-score')
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