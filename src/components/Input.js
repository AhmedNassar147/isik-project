import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Title } from "./Text";

export const InputContainer = styled.View`
  border-radius: 4;
  border-width: 1;
  border-color: #b2dfdb;
  padding-left: 4;
  padding-right: 4;
  padding-top: 4;
  padding-bottom: 4;
  margin-top: 5;
  margin-bottom: 5;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledInput = styled.TextInput`
  font-size: 10.5;
  min-width: 180;
`;

export const IconComponent = styled(Title)`
  width: 30;
  font-size: 25;
  text-align: center;
  align-self: center;
  color: ${({ disabled }) => (disabled ? "#b2dfdb" : "#2196f3")};
`;

const Input = ({ inputValue, onChange, onPress, shouldLoading }) => {
  const disableSendButton = !inputValue;
  const handlePress = disableSendButton ? undefined : onPress;

  return (
    <InputContainer>
      <StyledInput value={inputValue} onChangeText={onChange} />
      <TouchableOpacity onPress={handlePress}>
        {shouldLoading ? (
          <ActivityIndicator size="small" color="#2196f3" />
        ) : (
          <IconComponent children=">" disabled={disableSendButton} />
        )}
      </TouchableOpacity>
    </InputContainer>
  );
};

export default Input;
