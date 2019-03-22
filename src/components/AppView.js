import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Container from "./Container";
import ArticleView from "./ArticleView";
import Input from "./Input";
import ListItem from "./ListItem";

const StyledContainerView = styled(Container)`
  margin-top: 30;
  padding-left: 5;
  padding-right: 5;
  max-height: 100%;
`;

const DataViewContainer = styled(Container)`
  padding-left: 3;
  padding-right: 3;
  margin-top: 5;
`;

const AppView = ({ articleData, comments, ...inputProps }) => (
  <StyledContainerView>
    {ArticleView({ ...articleData })}

    <DataViewContainer>
      <ScrollView scrollEnabled shouldRasterizeIOS showsVerticalScrollIndicator>
        {comments &&
          comments.map((item, idx) => <ListItem key={idx} item={item} />)}
      </ScrollView>

      {Input({ ...inputProps })}
    </DataViewContainer>
  </StyledContainerView>
);

const keyExtractor = (item, idx) => (item.id ? item.id : idx.toString());
export default AppView;
