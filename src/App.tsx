import { useState } from "react";
import CodeBox from "./components/CodeBox";
import preAnnotDataSinhala from "./data/pre_annotations_sinhala.json";
import preAnnotDataEnglish from "./data/pre_annotations_english.json";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {
  const [dataset, setDataset] = useState(preAnnotDataSinhala);

  const handleOnClickGenerate = () => {
    const dataVolume = dataset.length;
    const randomNum = getRndInteger(0, dataVolume);
    setCode(JSON.stringify(dataset[randomNum], null, 2));
  };

  const handleOnChangeLanguage = (event: any) => {
    const language = event.target.value;
    if (language === "sinhala") {
      setDataset(preAnnotDataSinhala);
    } else if (language === "english") {
      setDataset(preAnnotDataEnglish);
    }
  };

  const [code, setCode] = useState("");

  return (
    <div className="p-5 px-10">
      <div className="text-4xl font-bold text-center pt-5">
        Pre-Annotation Objects Generator
      </div>
      <div className="text-2xl font-semibold italic text-center pb-10 text-amber-800">
        for a Named Entity Recognition Research
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <div className="flex gap-5 w-full">
            <div className="w-1/2">
              <select
                onChange={handleOnChangeLanguage}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl flex items-center align-middle justify-center align-middle justify-center cursor-pointer w-full h-10"
              >
                <option value="sinhala">Sinhala</option>
                <option value="english">English</option>
              </select>
            </div>
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl flex items-center align-middle justify-center cursor-pointer w-1/2 h-10"
              onClick={handleOnClickGenerate}
            >
              Generate New
            </div>
          </div>
          <div className="pt-14 font-semibold text-2xl">About</div>
          <div className="pt-5">
            The purpose of this application is to create pre-annotated objects
            for News Article Corpus for various languages. Currently this
            application is limited to Sinhala and English languages. This
            application can be used by anyone how work with Natural Language
            Processing, Named Entity Recognition or related tasks. Currenty this
            one is used for the ongoing research that 'Sinhala Document
            Clustering using Name Entity Recognition'.
          </div>
          <div className="pt-10 font-semibold text-2xl">How it use?</div>
          <div className="pt-5">
            <ol className="list-decimal list-inside">
              <li>
                Select the language you want to generate pre-annotated objects.
              </li>
              <li>
                Click on the "Generate New" button to generate a new object.
              </li>
              <li>
                Do your entity annotation with named entities. Currently this is
                limited to ["LOCATION", "PERSON", "ORGANIZATION", "DATE",
                "TIME"] these entities.
              </li>
              <li>
                Copy the generated object and paste it to the relevant file.
              </li>
            </ol>
          </div>
        </div>
        <div className="w-1/2">
          <CodeBox code={code} setCode={setCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
