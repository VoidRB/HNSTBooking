import { Hono } from "hono";
import { HonoContextBindings } from "..";
import { authenticateMiddleware } from "../middlewares/authenticate";
import { getUsersbyRole } from "../db/getUsersByRole";

const userRoute = new Hono<HonoContextBindings>();

// Authenticating the token in the cookie
userRoute.use(authenticateMiddleware);

userRoute.post("/users", async (ctx) => {
	const allUsersByRole = await getUsersbyRole({
		ctx: ctx,
		roleId: ctx.get("UserRole"),
	});

	return ctx.json(allUsersByRole, 200);
});

export default userRoute;
