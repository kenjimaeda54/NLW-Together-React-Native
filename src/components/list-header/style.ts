import styled from "styled-components/native";
import { Theme } from "../../global/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const TextTitle = styled.Text`
  font-family: ${Theme.fonts.title700};
  color: ${Theme.colors.heading};
  font-size: 18px;
`;

export const TextSubtitles = styled.Text`
  font-family: ${Theme.fonts.text400};
  color: ${Theme.colors.highlight};
  font-size: 13px;
`;
