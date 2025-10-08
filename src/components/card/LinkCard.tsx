import { ChevronRightIcon } from "@navikt/aksel-icons";
import { logEvent } from "@src/utils/analytics.ts";
import type { ReactElement } from "react";
import styles from "./LinkCard.module.css";

interface Props {
  href: string;
  children: ReactElement;
}

const LinkCard = ({ href, children }: Props) => {
  return (
    <a id={styles.linkcard} className={`navds-panel navds-link-panel`} href={href} onClick={() => logEvent(href)}>
      <div className="navds-link-panel__content">{children}</div>
      <ChevronRightIcon id={styles.linkcardChevron} className="navds-link-panel__chevron" />
    </a>
  );
};

export default LinkCard;
