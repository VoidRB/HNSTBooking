import { MiddlewareHandler } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { HonoContextBindings } from "..";
import { verifyJWT } from "../helpers/verifyJWT";

export const authenticateMiddleware: MiddlewareHandler<HonoContextBindings> = async (ctx, next) => {
  // Getting the token from the cookie
  const token = getCookie(ctx, 'token');

  // Returning if the token is undefined
  if (token === undefined) {
    return ctx.json({ error: 'Invalid Token' }, 401);
  }

  // Verifying if the JWT is valid
  try {
    const payload = await verifyJWT(token, ctx.env.JWT_SECRET);

    if (
      payload === false ||
      payload.exp !== undefined ||
      payload.iat !== undefined ||
      payload.nbf !== undefined
    ) {
      // Returning if the any of variables
      // in the JWT payload are defined
      // Check: https://hono.dev/docs/helpers/jwt#payload-validation
      return ctx.json({ error: 'Invalid Token' }, 401);
    }

    // Extending the login session
    setCookie(ctx, 'token', token, {
      maxAge: 60 * 10
    });

    // Setting the current user id to the one in the payload
    ctx.set('CurrentUserID', payload.userID);

    // Moving on to the next middleware
    await next();
  } catch (err) {
    // Returning if the token failed to verify
    return ctx.json({ error: 'Invalid Token' }, 401);
  }
}