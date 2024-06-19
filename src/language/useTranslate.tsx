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
    nb: "Opprett eller endre din CV",
    nn: "Opprett eller endre din CV",
    en: "Create or change your CV",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
