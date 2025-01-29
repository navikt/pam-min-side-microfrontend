import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

export const logNavigereEvent = () => {
  logAmplitudeEvent({
    origin: "pam-min-side-microfrontend",
    eventName: "navigere",
    eventData: {
      komponent: "pam-min-side-microfrontend",
    },
  });
};
