import { DrizzleD1Database } from 'drizzle-orm/d1';
import { Context, Hono } from 'hono';
import { cors } from 'hono/cors';
import * as schema from "../drizzle/schemas";
import { dbMiddleware } from './middlewares/db';
import loginRoute from './routes/login';
import registerRoute from './routes/register';

export type HonoContextBindings = {
  Bindings: {
    D1: D1Database;
    JWT_SECRET: string;
  };
  Variables: {
    DB: DrizzleD1Database<typeof schema> & {
      $client: D1Database;
    };
  }
}

export type HonoContext = Context<HonoContextBindings>;
const app = new Hono<HonoContextBindings>();

// Setting the CORS to fix cloudflare-related issues
app.use(cors());

// Database Middleware
app.use(dbMiddleware);

// Login Route
app.route('', loginRoute);

// Register Route
app.route('', registerRoute);

// Main Route
app.get('/', async(ctx) => {
  return ctx.json({
    message: 'yes it is working'
  });
})

export default app