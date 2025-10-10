import type { AmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";
import { getAnalyticsInstance } from "@navikt/nav-dekoratoren-moduler";
import { logger } from "./logger";

type ExtendedAmpltitudeEvent = AmplitudeEvent<"navigere", { lenketekst: string }>;

const analyticsLogger = getAnalyticsInstance<ExtendedAmpltitudeEvent>("pam-min-side-microfrontend");

export const logEvent = async (lenketekst: string) => {
  logger.info(`Noen har trykket på mikrofrontenden som føreer til ${lenketekst}`);
  await analyticsLogger("navigere", { lenketekst: lenketekst });
};
