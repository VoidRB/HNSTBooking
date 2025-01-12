import { MiddlewareHandler } from "hono";
import { getCookie } from "hono/cookie";
import { Jwt } from "hono/utils/jwt";
import { HonoContextBindings } from "..";

export const authenticateMiddleware: MiddlewareHandler<HonoContextBindings> = async (ctx, next) => {
  // Getting the token from the cookie
  const token = getCookie(ctx, 'token');

  // Returning if the token is undefined
  if (token === undefined) {
    return ctx.json({ error: 'Invalid Token' }, 401);
  }

  // Verifying if the JWT is valid
  try {
    const payload = await Jwt.verify(token, ctx.env.JWT_SECRET);

    if (
      payload.exp !== undefined ||
      payload.iat !== undefined ||
      payload.nbf !== undefined
    ) {
      // Returning if the any of variables
      // in the JWT payload is undefined
      // Check: https://hono.dev/docs/helpers/jwt#payload-validation
      return ctx.json({ error: 'Invalid Token' }, 401);
    }

    // Moving on to the next middleware
    await next();
  } catch (err) {
    // Returning if the token failed to verify
    return ctx.json({ error: 'Invalid Token' }, 401);
  }
}