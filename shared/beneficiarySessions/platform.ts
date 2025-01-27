const zoom = {
	plaformID: 0,
	plaformName: "Zoom",
} as const;

const googleMeet = {
	plaformID: 1,
	plaformName: "GoogleMeet",
} as const;

const telegram = {
	plaformID: 2,
	plaformName: "Telegram",
} as const;

const telephone = {
	plaformID: 3,
	plaformName: "Telephone",
} as const;

export const platformTypes = {
	zoom: zoom,
	googleMeet: googleMeet,
	telegram: telegram,
	telephone: telephone,
} as const;

export type PlatformTypes = typeof platformTypes;
