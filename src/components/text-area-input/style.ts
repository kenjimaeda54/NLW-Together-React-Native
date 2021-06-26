import styled from "styled-components/native";
import { Theme } from "../../global/theme";
import { TextInput } from "react-native";

export const InputContainer = styled(TextInput)`
  width: 92%;
  height: 95px;
  background-color: ${Theme.colors.secondary40};
  color: ${Theme.colors.heading};
  border-radius: 8px;
  font-family: ${Theme.fonts.text400};
  font-size: 13px;
  margin-left: 18px;
  text-align: center;
  border-width: 1px;
  border-color: ${Theme.colors.secondary50};
  text-align: left;
  padding-left: 15px;
  margin-top: 10px;
`;
