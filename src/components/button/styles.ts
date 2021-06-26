import styled from "styled-components/native";
import { Theme } from "../../global/theme";
import { RectButton } from "react-native-gesture-handler";

export const Title = styled.Text`
  flex: 1;
  color: ${Theme.colors.heading};
  font-size: 15px;
  flex-direction: row;
  text-align: center;
  font-family: ${Theme.fonts.text500};
  line-height: 25px;
`;

export const ButtonView = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${Theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;
