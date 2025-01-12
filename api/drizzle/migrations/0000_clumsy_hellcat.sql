CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text(50) NOT NULL,
	`gender` text(5) NOT NULL,
	`email` text(256) NOT NULL,
	`phoneNumber` text(20),
	`password` text(256) NOT NULL,
	`createdAt` text,
	`role` text(256)
);
