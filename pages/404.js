import React, { useEffect } from "react";
import styled from "styled-components";

export default function Custom404() {
  return (
    <NotFound>
      <h1>404 - Page Not Found</h1>;
    </NotFound>
  );
}

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h1 {
    color: #fff;
  }
`;
