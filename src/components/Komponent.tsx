import { BodyShort, Heading } from "@navikt/ds-react";
import LinkCard from "./card/LinkCard";
import { cvUrl } from "../api/urls";
import { Piktogram } from "./Piktogram";
import styles from "./Komponent.module.css";

interface Props {
  heading: string;
  description: string;
}

const Komponent = ({ heading, description }: Props) => {
  const url = cvUrl;

  return (
    <LinkCard href={url}>
      <div className={styles.flex}>
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
