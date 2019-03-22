import React from "react";
import styled from "styled-components/native";
import { Paragraph, Title } from "./Text";
import Container, { Row } from "./Container";

const ListItemContainer = styled.View`
  padding-right: 5;
  padding-left: 5;
  padding-top: 4;
  padding-bottom: 4;
  margin-bottom: 4;
  margin-top: 4;
  border-bottom-color: #eeeeee;
  border-bottom-width: 0.85;
  flex: 0;
  min-height: 30px;
`;

const Wrapper = styled(Row)`
  margin-left: 10px;
`;

const StyledImage = styled.Image`
  height: 35;
  width: 35;
  border-radius: 17;
  border-width: 1;
  border-color: transparent;
`;

const CommentComponent = styled(Paragraph)`
  font-size: 9;
`;

const TitleSubtitleContainer = styled(Container)`
  justify-content: center;
  flex-wrap: nowrap;
  padding-left: 12;
`;

const RenderListItem = ({ item: { userImgUrl, userName, comment } }) => (
  <ListItemContainer>
    <Wrapper>
      <StyledImage source={{ uri: userImgUrl }} />

      <TitleSubtitleContainer>
        <Title children={userName} />
        <CommentComponent>{comment}</CommentComponent>
      </TitleSubtitleContainer>
    </Wrapper>
  </ListItemContainer>
);

export default RenderListItem;
