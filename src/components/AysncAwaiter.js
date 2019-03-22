import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Container from "./Container";

const CenteredContainerView = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export default ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <CenteredContainerView>
        <ActivityIndicator size="small" color="#7986cb" />
      </CenteredContainerView>
    );
  }
  return children;
};
