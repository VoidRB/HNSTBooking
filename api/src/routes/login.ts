import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { z } from "zod";
import { HonoContextBindings } from "..";
import { getUser } from "../db/getUser";
import { signJWT } from "../helpers/signJWT";
import { getSHA256Hash } from "../helpers/getSHA256Hash";

const loginRoute = new Hono<HonoContextBindings>();

const loginInfoZodSchema = z.object({
  email: z.string(),
  password: z.string()
});

loginRoute.post('/login', async (ctx) => {

  const formData = await ctx.req.formData();

  const email = formData.get('email');
  const password = formData.get('password');

  // Validating the input
  const validationResult = loginInfoZodSchema.safeParse({
    email: email,
    password: password
  });

  // Returning if the input is not valid
  if (validationResult.success === false) {
    return ctx.json({ error: 'Invalid Input' }, 401);
  }

  // Checking if there is a user with that account
  const getUserResult = await getUser({ ctx, email: validationResult.data.email });
  
  // Returning if there is no userFound
  if (getUserResult === null || getUserResult === undefined) {
    return ctx.json({ error: 'Invalid Data' }, 401); 
  }

  // Checking if the two hashed passwords match
  const hashInputPassword = await getSHA256Hash(validationResult.data.password);

  // Returning if the hashed passwords don't match
  if (hashInputPassword !== getUserResult.password) {
    return ctx.json({ error: 'Invalid Data' }, 401);
  }

  // Generate a JWT
  const token = await signJWT({ userID: getUserResult.id }, ctx.env.JWT_SECRET);

  if (token === false) {
    return ctx.json({ error: 'Unexpected Error' }, 400); 
  }

  // Setting the token in the cookie
  setCookie(ctx, 'token', token, {
    maxAge: 60 * 10 // Login session is valid for 10 mins
  });

  return ctx.json({ message: 'Login Successful' }, 200);
});

export default loginRoute