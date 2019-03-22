import React from "react";
import styled from "styled-components/native";
import Container from "./Container";
import Header, { Paragraph } from "./Text";

const ContainerView = styled(Container)`
  box-shadow: 10px 5px 5px #000;
  padding-left: 3;
  padding-right: 3;
  padding-top: 6;
  padding-bottom: 6;
  align-self: flex-start;
  max-height: 200px;
  border-radius: 4;
  border-width: 1;
  border-color: #b2dfdb;
`;

const ArticleView = ({ header, data }) => (
  <ContainerView>
    <Header>{header}</Header>
    <Paragraph>{data}</Paragraph>
  </ContainerView>
);

export default ArticleView;
