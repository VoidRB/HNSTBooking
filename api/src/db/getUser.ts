import { HonoContext } from "..";
import { usersSchema } from "./schemas/users.schema";

type params = {
  ctx: HonoContext
} & (
  | { id: typeof usersSchema['id']['_']['data'] }
  | { username: typeof usersSchema['username']['_']['data'] }
  | { email: typeof usersSchema['email']['_']['data'] }
);

export async function getUser({ctx, ...args}: params) {
  
  const db = ctx.get('DB');

  let user;

  // Searching the user by id
  if ('id' in args) {
    user = await db.query.usersSchema.findFirst({
      where: (user, { eq }) => eq(user.id, args.id),
    });
  }
  // Searching the user by username
  else if ('username' in args) {
    user = await db.query.usersSchema.findFirst({
      where: (user, { eq }) => eq(user.username, args.username),
    });
  }
  // Searching the user by email
  else if ('email' in args) {
    user = await db.query.usersSchema.findFirst({
      where: (user, { eq }) => eq(user.email, args.email),
    });
  }
  // Returning false if non is passed.
  // (Will never happen but I've to satisfy Typescript)
  else {
    return null
  }

  return user
}