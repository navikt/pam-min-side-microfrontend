import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next();
  if (response.headers.get("content-type") === "text/html") {
    response.headers.set("content-type", "text/html; charset=utf-8");
  }
  return response;
});
