import React, { useState } from "react";
import "./css/MenuItem.css";

const MenuItem = props => {
  const [isOpen, setIsOpen] = useState(!!props.expanded);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <React.Fragment>
      <li
        onDoubleClick={() => setIsSelected(!isSelected)}
        style={{ backgroundColor: isSelected ? "blue" : "" }}
      >
        <i onClick={() => setIsOpen(!isOpen)}>
          {!props.isLeaf ? (
            isOpen ? (
              <i class="material-icons-outlined">indeterminate_check_box</i>
            ) : (
              <i class="material-icons-outlined">add_box</i>
            )
          ) : (
            ""
          )}
        </i>
        {props.title}
      </li>
      {isOpen ? props.children : null}
    </React.Fragment>
  );
};

export default MenuItem;
