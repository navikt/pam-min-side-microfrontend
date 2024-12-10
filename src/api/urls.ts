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
  local: "http://localhost:3000/min-cv",
  development: "https://www.ansatt.dev.nav.no/min-cv",
  production: "https://www.nav.no/min-cv",
};

export const cvUrl = CV_URL[getEnvironment()];
