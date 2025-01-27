const english = {
	languageID: 0,
	languageName: "English",
} as const;

const arabic = {
	languageID: 1,
	languageName: "Arabic",
} as const;

const both = {
	languageID: 2,
	languageName: "Both",
} as const;

export const languageTypes = {
	english: english,
	arabic: arabic,
	both: both,
} as const;

export type LanguageTypes = typeof languageTypes;
