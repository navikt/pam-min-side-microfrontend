import { useContext } from "react";
import { LanguageContext, Language } from "./LanguageProvider";

type Text = {
  [key: string]: { [key in Language]: string };
};

const text: Text = {
  heading: {
    nb: "Min CV",
    nn: "Min CV",
    en: "My CV",
  },
  description: {
    nb: "Nå kan du opprette eller endre din CV på Nav.no",
    nn: "No kan du opprette eller endre CV-en din på Nav.no",
    en: "Create or change your CV at Nav.no",
  },
};

export default function useTranslate(id: string) {
  const language = useContext(LanguageContext);
  return text[id][language];
}
