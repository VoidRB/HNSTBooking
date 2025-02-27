const guestRole = {
	roleID: 0,
	roleName: "Guest",
} as const;

const beneficiaryRole = {
	roleID: 1,
	roleName: "Beneficiary",
} as const;

const peerSupporterRole = {
	roleID: 2,
	roleName: "Peer Supporter",
} as const;

const coordinatorRole = {
	roleID: 3,
	roleName: "Coordinator",
} as const;

const AuditorRole = {
	roleID: 4,
	roleName: "Auditor",
} as const;

const AdminRole = {
	roleID: 5,
	roleName: "Admin",
} as const;

export const systemRoles = {
	guest: guestRole,
	beneficiary: beneficiaryRole,
	peerSupporter: peerSupporterRole,
	coordinator: coordinatorRole,
	auditor: AuditorRole,
	admin: AdminRole,
} as const;

export type SystemRoles = typeof systemRoles;
