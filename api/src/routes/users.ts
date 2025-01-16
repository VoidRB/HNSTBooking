import { Hono } from "hono";
import { HonoContextBindings } from "..";
import { authenticateMiddleware } from "../middlewares/authenticate";
import { getUsers } from "../db/getUsers";

const userRoute = new Hono<HonoContextBindings>();

// Authenticating the token in the cookie
userRoute.use(authenticateMiddleware);

userRoute.get("/users", async (ctx) => {
	const allUsersByRole = await getUsers({
		ctx: ctx,
		roleId: ctx.get("UserRole"),
	});

	return ctx.json(allUsersByRole, 200);
});

export default userRoute;
