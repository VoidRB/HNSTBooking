import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersSchema = sqliteTable('users', {
  // Unique ID of the user
  id: text('id', { mode: "text" }).primaryKey(),

  // Username of the user
  username: text('username', { length: 50 }).notNull(),

  // Gender of the user
  gender: text('gender', { length: 5 }).notNull(),

  // Email of the user
  email: text('email', { length: 256 }).notNull(),

  // International phone number of the user
  phoneNumber: text('phoneNumber', { length: 20 }),

  // Hashed password of the user
  password: text('password', { length: 256 }).notNull(),

  // Timestamp in seconds the user's account was created
  createdAt: text('createdAt')
    .$default(() => `${Math.round(new Date().getTime() / 1000)}`)
,

  // Role of the user assigned by the IT department
  role: text('role', { length: 256 }),
})