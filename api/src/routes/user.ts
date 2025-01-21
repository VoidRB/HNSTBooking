import { Hono } from "hono";
import { HonoContextBindings } from "..";
import { authenticateMiddleware } from "../middlewares/authenticate";
import { getUser } from "../db/getUser";
import { getUsersbyRole } from "../db/getUsersByRole";

const userRoute = new Hono<HonoContextBindings>();

// Authenticating the token in the cookie
userRoute.use(authenticateMiddleware);

userRoute.get("/single", async (ctx) => {
	const currentUser = await getUser({
		ctx: ctx,
		id: ctx.get("CurrentUserID"),
	});

	return ctx.json(currentUser, 200);
});

userRoute.get("/all", async (ctx) => {
	const allUsersByRole = await getUsersbyRole({
		ctx: ctx,
		roleId: ctx.get("UserRole"),
	});

	return ctx.json(allUsersByRole, 200);
});

export default userRoute;
