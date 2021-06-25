import styled from "styled-components/native";
import { Theme } from "../../global/theme";

export const ContentImg = styled.View`
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-color: ${Theme.colors.overlay};
  border-right-width: 1px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${Theme.colors.heading};
  font-size: 15px;
  flex-direction: row;
  text-align: center;
  font-family: ${Theme.fonts.text500};
  line-height: 25px;
`;
