import React from "react";

export const MenuProvider = props => {
  const testJson = {
    beschreibung: "Nallo",
    menge: [1, 2, 34, 5],
    Vorspeisen: {
      beschreibung: "Hallo",
      Nudelgerichte: {
        id: "1.1",
        name: "1.1",
        kategorie: false,
        email: "nice",
        Children: {
          Nudeln: { id: "1.1.1", name: "1.1.1", email: "mento", Children: {} },
          Nuaeln: { id: "1.1.1", name: "1.1.1", email: "mento", Children: {} },
          Nuddln: { id: "1.1.1", name: "1.1.1", email: "mento", Children: {} }
        }
      },
      Kartoffelgerichte: {
        id: "2.1",
        name: "2.1",
        kategorie: false,
        email: "nice",
        Children: { id: "2.1.1", name: "2.1.1", email: "mento", Children: {} }
      }
    },
    Hauptspeisen: {
      id: "1",
      name: "1",
      kategorie: true,
      email: "hel",
      Children: {
        id: "1.1",
        name: "1.1",
        kategorie: false,
        email: "nice",
        Children: { id: "1.1.1", name: "1.1.1", email: "mento", Children: {} }
      },
      id: "2",
      name: "2",
      kategorie: true,
      email: "hel",
      Children: {
        id: "2.1",
        name: "2.1",
        kategorie: true,
        email: "nice",
        Children: {
          id: "2.1.1",
          name: "2.1.1",
          kategorie: false,
          email: "mento",
          Children: {}
        }
      },
      id: "2.2",
      name: "2.2",
      kategorie: true,
      email: "nice",
      Children: {}
    }
  };

  const [menu, setMenu] = useState(testJson);

  return (
    <MenuContext.Provider value={menu}>{props.children}</MenuContext.Provider>
  );
};
