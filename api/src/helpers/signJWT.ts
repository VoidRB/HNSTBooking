import { Jwt } from "hono/utils/jwt";

export type CustomJWTpayload = {
  userID: string;
}

export async function signJWT(payload: CustomJWTpayload, JWT_SECRET: string) {
  try {
    const token = await Jwt.sign(payload, JWT_SECRET);
    return token
  } catch {
    return false
  }
}