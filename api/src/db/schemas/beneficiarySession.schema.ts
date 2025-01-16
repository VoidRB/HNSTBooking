import { int, sqliteTable, text, SQLiteBoolean } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from "uuid";
import { LanguageTypes } from "../../../../shared/beneificiarySessions/language";
import { PlatformTypes } from "../../../../shared/beneificiarySessions/platform";
import { StatusType } from "../../../../shared/beneificiarySessions/status";

export const beneficiarySessionSchema = sqliteTable("beneficiarySession", {
	id: text()
		.primaryKey()
		.notNull()
		.$default(() => uuidv4()),

	status: int().$type<StatusType[keyof StatusType]["statusID"]>().default(0),
	dateSubmitted: text().$default(
		() => `${Math.round(new Date().getTime() / 1000)}`
	),
	beneficiaryId: text().unique().notNull(),
	dateScheduled: text().$default(
		() => `${Math.round(new Date().getTime() / 1000)}`
	),
	plaform: text().$type<PlatformTypes[keyof PlatformTypes]["plaformID"]>(),
	meetingLink: text(),
	language: text().$type<LanguageTypes[keyof LanguageTypes]["languageID"]>(),
	coordinatorId: text().notNull(),
	peerSupporterId: text().notNull(),
	preferredPeerSupporterId: text().notNull(),
	peerSupporterShowedup: text(), //boolean
	peerSupporterShowedupTime: int({ mode: "timestamp_ms" }),
	peerSupporterNotShowedupReason: text(),
	beneficiaryShowedUp: text(), //boolean
	beneficiaryShowUpTime: int({ mode: "timestamp_ms" }),
	beneficiaryNotShowedupReason: text(),
	postAssessment: text(),
});
