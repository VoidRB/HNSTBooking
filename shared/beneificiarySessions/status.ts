const pending = {
	statusID: 0,
	statusName: "Pending",
} as const;

const scheduled = {
	statusID: 1,
	statusName: "Scheduled",
} as const;

const cancelled = {
	statusID: 2,
	statusName: "Cancelled",
} as const;

const onGoing = {
	statusID: 3,
	statusName: "OnGoing",
} as const;

const halted = {
	statusID: 4,
	statusName: "Halted",
} as const;

const completed = {
	statusID: 5,
	statusName: "Completed",
} as const;

export const statusType = {
	pending: pending,
	scheduled: scheduled,
	cancelled: cancelled,
	onGoing: onGoing,
	halted: halted,
	completed: completed,
} as const;

export type StatusType = typeof statusType;
