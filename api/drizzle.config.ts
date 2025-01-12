import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./drizzle/schemas.ts",
  out: "./drizzle/migrations"
});