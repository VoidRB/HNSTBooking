import { Jwt } from "hono/utils/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import { CustomJWTpayload } from "./signJWT";

export async function verifyJWT(JWT: string, JWT_SECRET: string) {
  try {
    const payload = await Jwt.verify(JWT, JWT_SECRET);
    return payload as JWTPayload & CustomJWTpayload
  } catch {
    return false
  }
}