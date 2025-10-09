type EnvUrl = { development: string; production: string; local: string };

const CV_URL: EnvUrl = {
  production: "https://www.nav.no/min-cv",
  development: "https://www.ansatt.dev.nav.no/min-cv",
  local: "http://localhost:3000/min-cv",
};

export const cvUrl = (environment: string) => CV_URL[environment as keyof EnvUrl];
