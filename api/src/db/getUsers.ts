import { HonoContext } from "..";
import { usersSchema } from "./schemas/users.schema";

type params = {
	ctx: HonoContext;
} & { roleId: (typeof usersSchema)["roleId"]["_"]["data"] };

export async function getUsers({ ctx, ...args }: params) {
	const db = ctx.get("DB");

	let users;

	users = await db.query.usersSchema.findMany({
		where: (user, { eq }) => eq(user.roleId, args.roleId),
	});
	return users;
}
