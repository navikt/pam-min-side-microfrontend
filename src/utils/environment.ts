export const isLocal = process.env.NODE_ENV === "development";

const isProduction = (location: string) => location.includes("www.nav.no");
const isDevelopment = (location: string) =>
  location.includes("www.intern.dev.nav.no") || location.includes("www.ansatt.dev.nav.no");

export const getEnvironment = (location: string) => {
  if (isProduction(location)) {
    return "production";
  }

  if (isDevelopment(location)) {
    return "development";
  }

  return "local";
};
