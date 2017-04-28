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