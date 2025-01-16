const pending = {
	statusId: 0,
	statusName: "Pending",
} as const;

const scheduled = {
	statusId: 1,
	statusName: "Scheduled",
} as const;

const cancelled = {
	statusId: 2,
	statusName: "Cancelled",
} as const;

const onGoing = {
	statusId: 3,
	statusName: "OnGoing",
} as const;

const halted = {
	statusId: 4,
	statusName: "Halted",
} as const;

const completed = {
	statusId: 5,
	statusName: "Completed",
} as const;
