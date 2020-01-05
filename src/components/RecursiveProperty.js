import React from "react";
import styled from "styled-components";
import ExpandableProperty from "./ExpandableProperty";

const RecursivePropertyContainer = styled.div`
  padding-top: 10px;
  padding-left: 3px;
  margin-left: 30px;
  color: blue;
  font-size: 16px;
`;

export const PropertyName = styled.span`
  color: purple;
  font-size: 14px;
  font-weight: bold;
`;

// const camelCaseToNormal = string =>
//   string.replace(/([A-Z])/g, " $1").replace(/^./, str2 => str2.toUpperCase()); props.propertyName

const RecursiveProperty = props => {
  return (
    <RecursivePropertyContainer>
      {!!props.property ? (
        // wenn es ein Objekt ist, dann wird es als die nächsetn Childrens erkannt ###
        // wenn es kein Objekt ist, dann wird es als Childrens mit props.propertyName und props.property.toString() geladen
        typeof props.property === "number" ||
        typeof props.property === "string" ||
        typeof props.property === "boolean" ? (
          <React.Fragment>
            <PropertyName>{props.propertyName} </PropertyName>
            {props.property.toString()}
          </React.Fragment>
        ) : (
          // und danach der titel genommen mit props.propertyName ###
          <ExpandableProperty
            title={
              props.propertyName === ("preis" || "menge")
                ? props.propertyName
                : props.property.name
            }
            expanded={!!props.rootProperty}
            property={!!props.property.isSelected}
          >
            {Object.values(props.property).map(
              // und danach mit map über die Childrens iteriert (props.property) ###
              (property, index) => (
                <RecursiveProperty
                  key={index}
                  propertyName={
                    Object.getOwnPropertyNames(props.property)[index]
                  }
                  property={property}
                />
              )
            )}
          </ExpandableProperty>
        )
      ) : (
        <React.Fragment>
          <PropertyName>{props.propertyName}: </PropertyName>
          leer
        </React.Fragment>
      )}
    </RecursivePropertyContainer>
  );
};

export default RecursiveProperty;
