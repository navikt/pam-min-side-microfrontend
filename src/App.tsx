import useTranslate from "./language/useTranslate.jsx";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  return (
    <section>
      <Komponent heading={useTranslate("heading")} description={useTranslate("description")} />
    </section>
  );
}

export default App;
