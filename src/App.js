import React from "react";
import RecursiveProperty from "./components/RecursiveProperty";
import EditFrame from "./components/EditFrame";
import uuidv4 from "uuid/v4";

const App = () => {
  const menu = {
    id: uuidv4(),
    beschreibung: "Die besten Griechischen Gerichte in ganz Brandenburg",
    isSelected: false,
    Vorspeisen: {
      id: uuidv4(),
      beschreibung: "Salate, Suppen und vieles mehr",
      isSelected: false
    },
    Hauptspeisen: {
      id: uuidv4(),
      isSelected: false,
      name: "1",
      kategorie: true,
      email: "hel",
      Nudelgerichte: {
        id: uuidv4(),
        isSelected: false,
        NudelnMitTomatensoße: {
          id: uuidv4(),
          isSelected: false,
          name: "ja",
          preis: [2, 3, 4]
        },
        NudelnOhneTomatensoße: {
          id: uuidv4(),
          isSelected: false
        }
      },
      Kartoffelgerichte: {
        id: uuidv4(),
        isSelected: false,
        name: "2.1",
        kategorie: false,
        email: "nice",
        KartoffelnMitQuark: {
          id: uuidv4(),
          isSelected: false,
          name: "2.1.1",
          email: "mento"
        },
        KartoffelnOhneQuark: {
          id: uuidv4(),
          isSelected: false
        }
      }
    }
  };
  return (
    <div className="App">
      <div className="App-intro">
        <RecursiveProperty
          property={menu}
          propertyName="Speisekarte"
          rootProperty={true}
        />
        <EditFrame />
      </div>
    </div>
  );
};

export default App;
