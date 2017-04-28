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