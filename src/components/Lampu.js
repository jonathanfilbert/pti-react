import React from "react";
import styled from "styled-components";

const LampuStyle = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background: ${props => props.color};
  }
`;

const Lampu = props => (
  <LampuStyle color={props.warna}>
    <div className="container" />
  </LampuStyle>
);

export default Lampu;
