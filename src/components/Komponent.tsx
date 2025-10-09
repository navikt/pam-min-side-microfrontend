import { BodyShort, Heading } from "@navikt/ds-react";
import LinkCard from "./card/LinkCard";
import styles from "./Komponent.module.css";
import { Piktogram } from "./Piktogram";

interface Props {
  heading: string;
  description: string;
  cvUrl: string;
}

const Komponent = ({ heading, description, cvUrl }: Props) => {
  return (
    <LinkCard href={cvUrl}>
      <div className={styles.komponentContainer}>
        <div>
          <Piktogram />
        </div>
        <div>
          <Heading level="3" size="small" className={styles.heading}>
            {heading}
          </Heading>
          <BodyShort size="small" className={styles.detail}>
            {description}
          </BodyShort>
        </div>
      </div>
    </LinkCard>
  );
};

export default Komponent;
