import { Hono } from "hono";
import { HonoContextBindings } from "..";
import { authenticateMiddleware } from "../middlewares/authenticate";
import { getUser } from "../db/getUser";

const userRoute = new Hono<HonoContextBindings>();

// Authenticating the token in the cookie
userRoute.use(authenticateMiddleware);

userRoute.get('/dashboard', async (ctx) => {

  const currentUser = await getUser({
    ctx: ctx,
    id: ctx.get('CurrentUserID')
  });

  return ctx.json(currentUser, 200);
});

export default userRoute