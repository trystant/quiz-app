var state = {
	questions: [
		{
			questionText: "#1. What were the name of the Aegon the Conqueror's three dragons?",
			questionChoices: ['A. Balerion, Vhagar, and Meraxes', 'B. Drogon, Rhaegal, and Viserion', 'C. Balerion, Quicksilver, and Tessarion', 'D. Drogon, Viserion, and Tyraxes'],
			correctChoiceIndex: 0,
			answerText: "The correct answer was A. Balerion, Vhagar and Meraxes.",
			answerInfo: "Aegon rode Balerion and his two sister-wives, Visenya and Rhaenys, rode Vhagar and Meraxes respectively.",
			number: 1
		},
		{
			questionText: "#2. Which Targaryen king first successfully conquered Dorne (for a time)?",
			questionChoices: ['A. Aegon I Targaryen', 'B. Viserys II Targaryen', 'C. Daeron I Targaryen', 'D. Aegon IV Targaryen'],
			correctChoiceIndex: 2,
			answerText: "The correct answer was C. Daeron I Targaryen.",
			answerInfo: 'Daeron I Targaryen, a.k.a. "The Young Dragon", conquered Dorne when he was 15 in 158 AC. He was killed in the rebellion in 161 AC at 18 years old.',
			number: 2
		},
		{
			questionText: "#3. Who was the man who knighted Jaime Lannister?",
			questionChoices: ['A. Ser Barristan Selmy', 'B. Ser Arthur Dayne', 'C. King Robert Baratheon', 'D. The Smiling Knight'],
			correctChoiceIndex: 1,
			answerText: "The correct answer was B. Arthur Dayne.",
			answerInfo: 'Ser Arthur Dayne, a.k.a. "The Sword of the Morning was a member of the Kingsguard and thought of as one of the greatest knights in the history of Westeros. He knighted Jaime Lannister after Jaime helped fight against the Kingswood Brotherhood.',
			number: 3
		},
		{
			questionText: "#4. Which of these characters has not had a POV Chapter?",
			questionChoices: ['A. Jaime Lannister', 'B. Theon Greyjoy', 'C. Victarion Greyjoy', 'D. Robb Stark'],
			correctChoiceIndex: 3,
			answerText: "The correct answer was D. Robb Stark.",
			answerInfo: "None of the initial kings in the War of the Five Kings received any POV Chapters. This was to add further emphasis onto the morally ambiguous nature of the conflict.",
			number: 4
		},
		{
			questionText: "#5. Tywin Lannister wiped out House Reyne during their rebellion. Which other house did he wipe out with them?",
			questionChoices: ['A. House Greystark', 'B. House Casterly', 'C. House Tarbeck', 'D. House Gardener'],
			correctChoiceIndex: 2,
			answerText: "The correct answer was C. House Tarbeck.",
			answerInfo: "House Greystark was wiped out after joining the Boltons in rebellion against the Starks centuries ago. House Casterly vanished sometime in the Age of Heroes. House Gardener was wiped out during Aegon's Conquest.",
			number: 5
		},
		{
			questionText: "#6. What was the direwolf in the beginning of the first book killed by?",
			questionChoices: ['A. A stag', 'B. A hunter', 'C. A bear', 'D. A wight'],
			correctChoiceIndex: 0,
			answerText: "The correct answer was A. A stag.",
			answerInfo: "The direwolf being killed by a stag in the beginning served as early foreshadowing, symbolizing that House Stark and House Baratheon (whose sigils are a direwolf and a stag respectively) would bring about each other's mutual destruction.",
			number: 6
		},
		{
			questionText: "#7. Who is the one suspected of being behind the Frey Pies?",
			questionChoices: ['A. Arya Stark', 'B. Wyman Manderly', 'C. Roose Bolton', 'D. Howland Reed'],
			correctChoiceIndex: 1,
			answerText: "The correct answer was B. Wyman Manderly.",
			answerInfo: "While in the HBO series, Arya is the one who cooks the Frey pies, in the books, Lord Wyman Manderly is most likely doing it as revenge for the Red Wedding, killing and baking Freys and serving them at Ramsay Bolton's wedding feast.",
			number: 7
		},
		{
			questionText: "#8. Who was behind the Sack of Saltpans?",
			questionChoices: ['A. Gregor Clegane', 'B. Rorge', 'C. Tywin Lannister', 'D. Ramsay Bolton'],
			correctChoiceIndex: 1,
			answerText: "The correct answer was B. Rorge.",
			answerInfo: "The Sack of Saltpans was considered one of the most horrific events to take place during the War of the Five Kings. The psychopathic Rorge led a band of marauders in a raid on the town, burning it down and slaughtering almost every inhabitant.",
			number: 8
		},
		{
			questionText: "#9. What was the Visenya Targaryen's Valyrian steel longsword?",
			questionChoices: ['A. Oathkeeper', 'B. Dawn', 'C. Hearteater', 'D. Dark Sister'],
			correctChoiceIndex: 3,
			answerText: "The correct answer was D. Dark Sister.",
			answerInfo: "Aegon Targaryen's older sister-wife is, despite being a female, still highly regarded as a warrior. It was Visenya Targaryen who was behind the formation of the Kingsguard.",
			number: 9
		},
		{
			questionText: "#10. What was the nickname of Aegon IV Targaryen?",
			questionChoices: ["A. The Unlikely", 'B. The Wise', 'C. The Unworthy', 'D. The Mad King'],
			correctChoiceIndex: 2,
			answerText: "The correct answer was C. The Unworthy.",
			answerInfo: 'Aegon IV Targaryen, a.k.a. "Aegon the Unworthy", is regarded as one of the worst, if not THE worst, of the Targaryen kings. His hedonism and horrible behavior made for a horrible reign, and his legitimizing of his bastards out of spite led to five Blackfyre Rebellions.',
			number: 10
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
	'quiz-answer': $('.quiz-answer.modal'),
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