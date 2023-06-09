import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

export interface BoxProps {
  props: any;
}

export const Box: React.FC<BoxProps> = ({ props }) => {
  return <Div {...props} />;
};

export default Box;
