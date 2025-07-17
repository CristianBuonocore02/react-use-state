import { useState } from "react";
import LanguageButton from "./components/LanguageButton";
import LanguageCard from "./components/LanguageCard";
import "./index.css";



const languages = [
  {
    name: "HTML",
    description: "Linguaggio per strutturare il contenuto delle pagine web.",
  },
  {
    name: "CSS",
    description: "Serve per stilizzare il contenuto HTML (colori, layout, ecc).",
  },
  {
    name: "JavaScript",
    description: "Dà interattività alle pagine web (es. click, animazioni, ecc).",
  },
  {
    name: "Node.js",
    description: "Dà interattività alle pagine web (es. click, animazioni, ecc).",
  },
  {
    name: "Express",
    description: "Dà interattività alle pagine web (es. click, animazioni, ecc).",
  },
  {
    name: "ReactJS",
    description: "Dà interattività alle pagine web (es. click, animazioni, ecc).",
  },
];


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div>
      <h1>Linguaggi del Web</h1>

      {languages.map((lang) => (
        <LanguageButton
          key={lang.name}
          language={lang}
          isSelected={selectedLanguage?.name === lang.name}
          onClick={() => setSelectedLanguage(lang)}
        />
      ))}

      <LanguageCard language={selectedLanguage} />
    </div>
  );
}


export default App
