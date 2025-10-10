import type { AmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";
import { getAnalyticsInstance } from "@navikt/nav-dekoratoren-moduler";

type ExtendedAmpltitudeEvent = AmplitudeEvent<"navigere", { lenketekst: string }>;

const analyticsLogger = getAnalyticsInstance<ExtendedAmpltitudeEvent>("pam-min-side-microfrontend");

export const logEvent = async (lenketekst: string) => {
  await analyticsLogger("navigere", { lenketekst: lenketekst });
};

export const logClickEvent = async () => {
  await analyticsLogger("min-cv-lenke");
};
