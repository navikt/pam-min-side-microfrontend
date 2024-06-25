import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  heading: {
    nb: "CV",
    nn: "CV",
    en: "CV",
  },
  description: {
    nb: "Opprett eller endre din CV på Arbeidsplassen",
    nn: "Opprett eller endre din CV på Arbeidsplassen",
    en: "Create or change your CV on Arbeidsplassen",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
