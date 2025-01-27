interface QuestionType {
	id: string;
	type: string;
	question: string;
	answer: string;
}

const mentalHealthContinuumQuestions: Array<QuestionType> = [
	{ id: "0", type: "scale", question: "Happy", answer: "" },
	{ id: "1", type: "scale", question: "Interested in life", answer: "" },
	{ id: "2", type: "scale", question: "Satisfied with life", answer: "" },
	{
		id: "3",
		type: "scale",
		question: "That you had something important to contribute to society",
		answer: "",
	},
	{
		id: "4",
		type: "scale",
		question: "That you belonged to a community",
		answer: "",
	},
	{
		id: "5",
		type: "scale",
		question:
			"That our society is a good place, or is becoming a better place, for all people",
		answer: "",
	},
	{
		id: "6",
		type: "scale",
		question: "That people are basically good",
		answer: "",
	},
	{
		id: "7",
		type: "scale",
		question: "That the way our society worksmade sense to you",
		answer: "",
	},
	{
		id: "8",
		type: "scale",
		question: "That you liked most parts of your personality",
		answer: "",
	},
	{
		id: "9",
		type: "scale",
		question: "Good at managing the responsibilities of your daily life",
		answer: "",
	},
	{
		id: "10",
		type: "scale",
		question: "That you had warm and trusting relationships with others",
		answer: "",
	},
	{
		id: "11",
		type: "scale",
		question:
			"That you had experiences that challenged you to grow and become a better person",
		answer: "",
	},
	{
		id: "12",
		type: "scale",
		question: "Confident to think or express your own ideas and opinions",
		answer: "",
	},
	{
		id: "13",
		type: "scale",
		question: "That your life has a sense of direction or meaning to it",
		answer: "",
	},
];

const preTherapyPsychlopsQuestions: Array<QuestionType> = [
	{
		id: "0",
		type: "text",
		question: "Choose a problem that troubles you the most",
		answer: "",
	},
	{
		id: "1",
		type: "scale",
		question: "how much has it affected you over the last week",
		answer: "",
	},
	{
		id: "2",
		type: "scale",
		question: "How long ago were you first concerned about this problem?",
		answer: "",
	},
	{
		id: "3",
		type: "text",
		question: "Choose another problem that troubles you",
		answer: "",
	},
	{
		id: "4",
		type: "scale",
		question: "How much has it affected you over the last week? ",
		answer: "",
	},
	{
		id: "5",
		type: "scale",
		question: "How long ago were you first concerned about this problem?",
		answer: "",
	},
	{
		id: "6",
		type: "text",
		question:
			"Choose one thing that is hard to do because of your problem (or problems).",
		answer: "",
	},
	{
		id: "7",
		type: "scale",
		question: "How hard has it been to do this thing over the last week?",
		answer: "",
	},
	{
		id: "8",
		type: "scale",
		question: "How have you felt in yourself this last week?",
		answer: "",
	},
];
const duringTherapyPsychlopsQuestions: Array<QuestionType> = [
	{
		id: "0",
		type: "text",
		question:
			"This is the problem you said troubled you the most when we first asked",
		answer: "",
	},
	{
		id: "1",
		type: "scale",
		question: "How much has it affected you over the last week?",
		answer: "",
	},
	{
		id: "2",
		type: "text",
		question:
			"This is the other problem you said troubled you when we first asked",
		answer: "",
	},
	{
		id: "3",
		type: "scale",
		question: "How much has it affected you over the last week?",
		answer: "",
	},
	{
		id: "4",
		type: "text",
		question: "This is the thing you said was hard to do when we first asked",
		answer: "",
	},
	{
		id: "5",
		type: "scale",
		question: "How hard has it been to do this thing over the last week?",
		answer: "",
	},
	{
		id: "6",
		type: "scale",
		question: "How have you felt in yourself this last week?",
		answer: "",
	},
	{
		id: "7",
		type: "text",
		question:
			"Now that you are having therapy, you may have found that other problems have become important. If so, please write the one that troubles you most",
		answer: "",
	},
	{
		id: "8",
		type: "scale",
		question:
			"How much have these other problems affected you over the last week? ",
		answer: "",
	},
];
const postTherapyPsychlopsQuestions: Array<QuestionType> = [
	{
		id: "0",
		type: "text",
		question:
			"This is the problem you said troubled you the most when we first asked. ",
		answer: "",
	},
	{
		id: "1",
		type: "scale",
		question: "How much has it affected you over the last week?",
		answer: "",
	},
	{
		id: "2",
		type: "text",
		question:
			"This is the other problem you said troubled you when we first asked",
		answer: "",
	},
	{
		id: "3",
		type: "scale",
		question: "How much has it affected you over the last week?",
		answer: "",
	},
	{
		id: "4",
		type: "text",
		question: "This is the thing you said was hard to do when we first asked",
		answer: "",
	},
	{
		id: "5",
		type: "scale",
		question: "How hard has it been to do this thing over the last week?",
		answer: "",
	},
	{
		id: "6",
		type: "scale",
		question: "How have you felt in yourself this last week?",
		answer: "",
	},
	{
		id: "7",
		type: "scale",
		question:
			"During therapy, you may have found that other problems became important. If so, how much have these problems affected you over the last week? ",
		answer: "",
	},
	{
		id: "8",
		type: "scale",
		question: "Compared to when you started therapy, how do you feel now?",
		answer: "",
	},
];

const GRiSTQuestions: Array<QuestionType> = [
	{
		id: "0",
		type: "YOrN",
		question: "Does the person have a history of falls or other accidents? ",
		answer: "",
	},
	{
		id: "1",
		type: "YOrN",
		question:
			"Are you concerned about any other issues that may be putting the person at risk due to his or her vulnerability",
		answer: "",
	},
	{
		id: "2",
		type: "YOrN",
		question: "Does the person have a history of wandering behaviour?",
		answer: "",
	},
	{
		id: "3",
		type: "YOrN",
		question:
			"Are you concerned about the person being at risk of self neglect or neglect by others?",
		answer: "",
	},
	{
		id: "4",
		type: "YOrN",
		question: "Has the person ever made a suicide attempt?",
		answer: "",
	},
	{
		id: "5",
		type: "YOrN",
		question:
			"Are you concerned about the person’s current intention to commit suicide?",
		answer: "",
	},
	{
		id: "6",
		type: "YOrN",
		question:
			"Are you concerned about the person being exposed to circumstances or emotions that could trigger suicide attempts?",
		answer: "",
	},
	{
		id: "7",
		type: "YOrN",
		question: "Is the person having suicidal thoughts or fantasies? ",
		answer: "",
	},
	{
		id: "8",
		type: "YOrN",
		question: "Has the person ever engaged in self-harming behaviour?",
		answer: "",
	},
	{
		id: "9",
		type: "YOrN",
		question:
			"Are you concerned about the person being exposed to circumstances or emotions that could trigger self-harm?",
		answer: "",
	},
	{
		id: "10",
		type: "YOrN",
		question: "Is the person having self-harming thoughts or fantasies?",
		answer: "",
	},
	{
		id: "11",
		type: "YOrN",
		question:
			"Has the person ever engaged in episodes of harm to people/animals or damage to property (fire setting, vandalism, etc)?",
		answer: "",
	},
	{
		id: "12",
		type: "MCQ",
		question:
			"Tick all groups of people who are known to have been the target of any harm by the person",
		answer: "",
	},
	{
		id: "13",
		type: "YOrN",
		question: "Were any of the episodes physical or sexual assaults/abuse? ",
		answer: "",
	},
	{
		id: "14",
		type: "YOrN",
		question: "Has the person ever engaged in fire setting behaviour?",
		answer: "",
	},
	{
		id: "15",
		type: "YOrN",
		question:
			"Do you believe the person has an intention to cause harm or damage?",
		answer: "",
	},
	{
		id: "16",
		type: "YOrN",
		question:
			"Are you concerned about the person being exposed to circumstances or emotions that could trigger harm or damage?",
		answer: "",
	},
	{
		id: "17",
		type: "YOrN",
		question:
			"Is the person having thoughts or fantasies about harming people/animals or damaging property?",
		answer: "",
	},
	{
		id: "18",
		type: "YOrN",
		question: "Are there any child protection issues?",
		answer: "",
	},
	{
		id: "19",
		type: "YOrN",
		question: "Are you concerned about risks to dependents?",
		answer: "",
	},
	{
		id: "20",
		type: "YOrN",
		question:
			"Are you concerned about risks due to the person’s mental faculties/cognitive capacity?",
		answer: "",
	},
	{
		id: "21",
		type: "YOrN",
		question:
			"Are you concerned about risks due to the person’s social context (relationships, living arrangements, finances, employment, any detrimental changes)?",
		answer: "",
	},
	{
		id: "22",
		type: "YOrN",
		question:
			"Are you concerned about risks due to the person’s current relationships?",
		answer: "",
	},
	{
		id: "23",
		type: "YOrN",
		question:
			"Are you concerned about risks due to the person’s living arrangements?",
		answer: "",
	},
	{
		id: "24",
		type: "YOrN",
		question:
			"Are you concerned about the person’s concordance with mental-health treatment?",
		answer: "",
	},
	{
		id: "25",
		type: "YOrN",
		question:
			"Are you concerned about the person’s general current behaviour (eg risk-taking, sleep patterns, daily activities, challenging behaviour)?",
		answer: "",
	},
	{
		id: "26",
		type: "scale",
		question:
			"To what extent does the person’s behaviour lead to unintentional risks (eg fire or harm due to being careless, thoughtless or forgetful; self-injurious behaviour)?",
		answer: "",
	},
	{
		id: "27",
		type: "scale",
		question:
			"To what extent does the person display challenging behaviour (eg antisocial, disruptive, resistance to advice, predatory) ",
		answer: "",
	},
	{
		id: "28",
		type: "YOrN",
		question:
			"Is there any history of depression or serious mental illness, including any current episode?",
		answer: "",
	},
	{
		id: "29",
		type: "YOrN",
		question:
			"Are you concerned about risks due to any physical health problems?",
		answer: "",
	},
	{
		id: "30",
		type: "YOrN",
		question: "Are you concerned about the person’s diet?",
		answer: "",
	},
	{
		id: "31",
		type: "YOrN",
		question:
			"Are you concerned about the person’s motivation and engagement with the world?",
		answer: "",
	},
	{
		id: "32",
		type: "YOrN",
		question:
			"Are you concerned about the person’s behavioural presentation with respect to potential risks (eg verbal and physical behaviour, uneasy ‘gut’ feeling in yourself)?",
		answer: "",
	},
	{
		id: "33",
		type: "YOrN",
		question:
			"Are you concerned about the person’s lack of insight and sense of responsibility?",
		answer: "",
	},
	{
		id: "34",
		type: "YOrN",
		question:
			"Are you concerned about risks due to the person’s feelings/emotions?",
		answer: "",
	},
	{
		id: "35",
		type: "YOrN",
		question:
			"Are you concerned about risks due to the person’s sense of self worth?",
		answer: "",
	},
	{
		id: "36",
		type: "YOrN",
		question:
			"Are you concerned about personality factors and their impact on risks?",
		answer: "",
	},
	{
		id: "37",
		type: "YOrN",
		question: "Does the person have a history of misusing drugs or alcohol?",
		answer: "",
	},
	{
		id: "38",
		type: "YOrN",
		question:
			"Does the person have a history of adverse life events (eg suffered abuse, criminal justice proceedings, detrimental upbringing/education, eating disorders)?",
		answer: "",
	},
];

export {
	mentalHealthContinuumQuestions,
	preTherapyPsychlopsQuestions,
	duringTherapyPsychlopsQuestions,
	postTherapyPsychlopsQuestions,
	GRiSTQuestions,
};
