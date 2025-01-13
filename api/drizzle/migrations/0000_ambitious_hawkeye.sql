CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`gender` text NOT NULL,
	`email` text NOT NULL,
	`phoneNumber` text,
	`password` text NOT NULL,
	`createdAt` text,
	`timezone` text DEFAULT '{"label":"Europe/London (GMT+00:00)","tzCode":"Europe/London","name":"(GMT+00:00) London, Birmingham, Liverpool, Sheffield, Bristol","utc":"+00:00"}',
	`roleId` integer DEFAULT 0
);
