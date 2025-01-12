import { Hono } from "hono";
import parsePhoneNumber from 'libphonenumber-js';
import { z } from "zod";
import { HonoContextBindings } from "..";
import { getUser } from "../db/getUser";
import { usersSchema } from "../db/schemas/users.schema";
import { getSHA256Hash } from "../helpers/getSHA256Hash";
import { v4 as uuidv4 } from 'uuid';
const registerRoute = new Hono<HonoContextBindings>();

const registerInfoZodSchema_PhoneNumberIncluded = z.object({
  email: z.string(),
  username: z.string(),
  gender:
    z.literal('M').or(
      z.literal('F')
    ).or(
      z.literal('N/A')
    ),
  password: z.string(),
  passwordRepeated: z.string(),
  countryCode: z.string(),
  phoneNumber: z.string()
})

const registerInfoZodSchema_PhoneNumberExcluded = z.object({
  email: z.string(),
  username: z.string(),
  gender:
    z.literal('M').or(
      z.literal('F')
    ).or(
      z.literal('N/A')
    ),
  password: z.string(),
  passwordRepeated: z.string(),
});

const registerInfoZodSchema = registerInfoZodSchema_PhoneNumberIncluded.or(registerInfoZodSchema_PhoneNumberExcluded);

registerRoute.post('/register', async (ctx) => {

  const formData = await ctx.req.formData();

  const email = formData.get('email');
  const username = formData.get('email');
  const gender = formData.get('email');
  const password = formData.get('email');
  const passwordRepeated = formData.get('passwordRepeated');
  const countryCode = formData.get('countryCode');
  const phoneNumber = formData.get('phoneNumber');

  // Validating the input
  const validationResult = registerInfoZodSchema.safeParse({
    email: email,
    username: username,
    gender: gender,
    password: password,
    passwordRepeated: passwordRepeated,
    countryCode: countryCode,
    phoneNumber: phoneNumber
  });

  // Returning if the input is not valid
  if (validationResult.success === false) {
    return ctx.json({ error: 'Invalid Input'}, 401);
  }

  const validatedData = validationResult.data;
  let internationlPhoneNumber: null | string = null;

  // Checking if user has inputted a valid phone number
  if ('phoneNumber' in validatedData) {
  
    const parsedPhoneNumber = parsePhoneNumber(`${validatedData.countryCode}${validatedData.phoneNumber}`);

    if (parsedPhoneNumber === undefined || parsedPhoneNumber.isValid() === false) {
      return ctx.json({ error: 'Invalid Phone Number'}, 401);
    }

    internationlPhoneNumber = parsedPhoneNumber.formatInternational();
  }

  // Checking if password & repeated password match
  if (validatedData.password !== validatedData.passwordRepeated) {
    return ctx.json({ error: 'Invalid Input'}, 401);
  }

  // Checking if an account already exists with this email
  const getUserViaEmailResult = await getUser({ ctx, email: validatedData.email });

  if (getUserViaEmailResult) {
    return ctx.json({ error: 'Email Already Exists'}, 401); 
  }

  // Checking if an account already exists with this username
  const getUserViaUsernameResult = await getUser({ ctx, username: validatedData.username});

  if (getUserViaUsernameResult) {
    return ctx.json({ error: 'Username Already Exists'}, 401); 
  }

  // Adding the account into the database
  const db = ctx.get('DB');
  const hashInputPassword = await getSHA256Hash(validatedData.password);

  await db.insert(usersSchema).values({
    id: uuidv4(),
    email: validatedData.email,
    username: validatedData.username,
    gender: validatedData.gender,
    password: hashInputPassword,
    phoneNumber: internationlPhoneNumber
  });

  return ctx.json({ message: 'Registering Successful'}, 200);
});

export default registerRoute