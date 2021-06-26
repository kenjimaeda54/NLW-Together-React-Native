import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Theme } from "../../global/theme";

export const ContainerLinear = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight()};
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${Theme.fonts.title700};
  font-size: 20px;
  color: ${Theme.colors.heading};
`;
