import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: transparent;
  width: auto;
  height: auto;
`;

export interface BoxProps {
  props: any;
}

export const Box: React.FC<BoxProps> = ({ props }) => {
  return <Div {...props} />;
};

export default Box;
