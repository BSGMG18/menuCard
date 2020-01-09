import React from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";

const ListStyle = styled.div`
  margin-left: 14px;
  border-left: 1px dotted black;
`;

const MenuList = props => {
  return (
    <div>
      <ListStyle>
        {!!props.property ? (
          <MenuItem
            title={props.propertyName}
            expanded={!!props.rootProperty}
            parent={props.parent}
          >
            {props.property.map(property => (
              <MenuList
                key={property.id}
                propertyName={property.name}
                property={property.children}
                parent={props.propertyName}
              />
            ))}
          </MenuItem>
        ) : (
          <MenuItem
            title={props.propertyName}
            expanded={!!props.rootProperty}
            isLeaf={true}
            parent={props.parent}
          />
        )}
      </ListStyle>
    </div>
  );
};

export default MenuList;
