import React, { useState } from "react";
import styled from "styled-components";

export const PropertyName = styled.div`
  color: green;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const ExpandableProperty = props => {
  const [isOpen, setIsOpen] = useState(!!props.expanded);
  // const [isSelected, setIsSelected] = useState(!!props.property);
  // const [isEnd, setIsEnd] = useState(props.end.kinder);

  return (
    <React.Fragment>
      <PropertyName onClick={() => setIsOpen(!isOpen)}>
        <li>
          {" "}
          {props.title}
          {isOpen ? (
            <i className="material-icons">keyboard_arrow_down</i>
          ) : (
            <i className="material-icons">keyboard_arrow_right</i>
          )}
        </li>
      </PropertyName>
      {console.log(props.children)}
      {isOpen ? props.children : null}
    </React.Fragment>
  );
};

export default ExpandableProperty;
