const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const CV_URL: EnvUrl = {
  local: "http://localhost:3000/min-side",
  development: "https://arbeidsplassen.intern.dev.nav.no/min-side",
  production: "https://arbeidsplassen.nav.no/min-side",
};

export const cvUrl = CV_URL[getEnvironment()];
