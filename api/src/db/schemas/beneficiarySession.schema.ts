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
	beneficiary_id: text().unique().notNull(),
	date_scheduled: text(),
	plaform: text().$type<PlatformTypes[keyof PlatformTypes]["plaformID"]>(),
	meeting_link: text(),
	language: text().$type<LanguageTypes[keyof LanguageTypes]["languageID"]>(),
	coordinator_id: text().notNull(),
	peerSupporter_id: text().notNull(),
	preferred_peer_supporter_id: text().notNull(),
	peer_supporter_showed_up: text(), //boolean
	peer_supporter_showed_up_time: int({ mode: "timestamp_ms" }),
	peer_supporter_not_showed_up_reason: text(),
	beneficiary_showed_up: text(), //boolean
	beneficiary_show_up_time: int({ mode: "timestamp_ms" }),
	beneficiary_not_showed_up_reason: text(),
	post_assessment: text(),
});
