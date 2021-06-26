import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Theme } from "../../global/theme";

export const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`;

export const ViewContent = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 20px;
`;

export const TextName = styled.Text`
  font-family: ${Theme.fonts.title700};
  color: ${Theme.colors.heading};
  font-size: 18px;
  margin-bottom: 11px;
`;

export const TextOwner = styled.Text`
  font-family: ${Theme.fonts.text400};
  color: ${Theme.colors.highlight};
  font-size: 13px;
  margin-bottom: 24px;
`;
