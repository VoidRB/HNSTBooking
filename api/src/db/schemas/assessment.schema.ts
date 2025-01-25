import { sql } from "drizzle-orm";
import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from "uuid";

export const assessmentSchema = sqliteTable("assessmentResults", {
	id: text()
		.primaryKey()
		.notNull()
		.$default(() => uuidv4()),
	beneficiary_id: int().notNull(),
	peer_supporter_id: int().notNull(),
	text_based_answers: text().notNull(),
	scale_based_answers: text().notNull(),
	date_submitted: text("timestamp")
		.notNull()
		.default(sql`(current_timestamp)`),
});
