import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from 'uuid';
import { SystemRoles } from '../../../../shared/roles';
import { Timezone } from '../../../../shared/timezones';

export const usersSchema = sqliteTable('users', {
  // Unique ID of the user
  id: text()
  .primaryKey()
  .notNull()
  .$default(() => uuidv4()),

  // Username of the user
  username: text()
  .notNull(),

  // Gender of the user
  gender: text()
  .notNull(),

  // Email of the user
  email: text()
  .notNull(),

  // International phone number of the user
  phoneNumber: text(),

  // Hashed password of the user
  password: text()
  .notNull(),

  // Timestamp in seconds the user's account was created
  createdAt: text()
  .$default(() => `${Math.round(new Date().getTime() / 1000)}`),

  // The timezone the user's at
  timezone: text({ mode: "json" })
  .$type<(Timezone)>()
  .default({
    label: 'Europe/London (GMT+00:00)',
    tzCode: 'Europe/London',
    name: '(GMT+00:00) London, Birmingham, Liverpool, Sheffield, Bristol',
    utc: '+00:00'
  }),

  // Role ID of the user assigned by the IT department
  roleId: int()
  .$type<SystemRoles[keyof SystemRoles]['roleID']>()
  .default(0)
})

