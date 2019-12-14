import React from "react";
import RecursiveProperty from "./RecursiveProperty";

const App = () => {
  return (
    <div className="App">
      <div className="App-intro">
        <RecursiveProperty
          property={testJson}
          propertyName="Speisekarte"
          rootProperty={true}
        />
      </div>
    </div>
  );
};

export default App;

const testJson = [
  {
    id: "1",
    name: "null",
    email: "hel",
    kinder: {
      id: "1.1",
      name: "hallo",
      email: "nice",
      kinder: { id: "1.1.1", name: "men", email: "mento", kinder: {} }
    }
  },
  { id: "2", name: "hell", email: "tothe", kinder: {} },
  {
    id: "3",
    name: "hell",
    email: "tothe",
    kinder: { id: "3.1", name: "hell", email: "tothe", kinder: {} }
  }
];
