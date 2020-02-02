import React from "react";
import MenuList from "./components/MenuList";
import uuidv4 from "uuid/v4";

const App = () => {
  const menu = [
    {
      id: uuidv4(),
      name: "Speisekarte",
      beschreibung: "Die besten Griechischen Gerichte in ganz Brandenburg",
      style: "Überschrift 11",
      children: [
        {
          id: uuidv4(),
          name: "Vorspeisen",
          beschreibung: "Salate, Suppen und vieles mehr",
          style: "Überschrift 2",
          children: [
            {
              id: uuidv4(),
              name: "Nudelgerichte",
              preis: [1, 23, 4],
              style: "Gericht"
            },
            {
              id: uuidv4(),
              name: "Nudelgerichte",
              preis: [1, 23, 4],
              style: "Gericht"
            },
            {
              id: uuidv4(),
              name: "Nudelgerichte",
              preis: 12.5,
              style: "Gericht"
            },
            {
              id: uuidv4(),
              name: "Nudelgerichte",
              preis: [1, 23, 4],
              style: "Gericht"
            }
          ]
        },
        {
          id: uuidv4(),
          name: "Vorspeisen",
          email: "hel",
          style: "Überschrift 2",
          children: [
            {
              id: uuidv4(),
              name: "Nudelgerichte",
              style: "Gericht",
              preis: 12.3
            },
            {
              id: uuidv4(),
              name: "Cola",
              style: "Getränk",
              preis: 12.3,
              menge: 0.3
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="App">
      <div className="App-intro">
        <MenuList
          property={menu}
          propertyName={"Erstellen Sie Ihre Speisekarte :)"}
          rootProperty={true}
        />
      </div>
    </div>
  );
};

export default App;
