import React from "react";
import RecursiveProperty from "./components/RecursiveProperty";
import uuidv4 from "uuid/v4";

const App = () => {
  const menu = [
    {
      id: uuidv4(),
      name: "Speisekarte",
      beschreibung: "Die besten Griechischen Gerichte in ganz Brandenburg",
      isSelected: false,
      children: [
        {
          id: uuidv4(),
          name: "Vorspeisen",
          beschreibung: "Salate, Suppen und vieles mehr",
          isSelected: false
        },
        {
          id: uuidv4(),
          isSelected: false,
          name: "Vorspeisen",
          kategorie: true,
          email: "hel",
          children: [
            {
              id: uuidv4(),
              name: "Nudelgerichte",
              isSelected: false,
              preis: [1, 23, 4]
            }
          ]
        }
      ]
    }
  ];

  //         children: [{
  //           id: uuidv4(),
  //           isSelected: false,
  //           name: "NudelnMitTomatensoße",
  //           preis: [2, 3, 4]
  //         },
  //         children: {
  //           id: uuidv4(),
  //           name: "NudelnOhneTomatensoße",
  //           isSelected: false
  //         }
  //       }],
  //       children: {
  //         id: uuidv4(),
  //         isSelected: false,
  //         name: "Kartoffelgerichte",
  //         kategorie: false,
  //         email: "nice",
  //         children: {
  //           id: uuidv4(),
  //           isSelected: false,
  //           name: "Kartoffeln mit Quark",
  //           email: "mento"
  //         },
  //         children: {
  //           id: uuidv4(),
  //           name: "KartoffelnOhneQuark",
  //           isSelected: false
  //         }
  //       }
  //     }
  //   }
  // ;

  return (
    <div className="App">
      <div className="App-intro">
        <RecursiveProperty
          propertyName={null}
          property={menu[0]}
          rootProperty={true}
        />
      </div>
    </div>
  );
};

export default App;
