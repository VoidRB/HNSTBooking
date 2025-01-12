import { MiddlewareHandler } from "hono";
import { HonoContextBindings } from "..";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "../../drizzle/schemas";

export const dbMiddleware: MiddlewareHandler<HonoContextBindings> = async (ctx, next) => {
  
  // Setting the database
  const db = drizzle(ctx.env.D1, { schema: schema });

  // Putting the database on the context
  ctx.set('DB', db);

  // Moving on to the next middleware
  await next();
}