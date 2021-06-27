import styled from "styled-components/native";
import { Theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Mensagem = styled.Text`
  margin: 5px 0;
  font-family: ${Theme.fonts.text500};
  color: ${Theme.colors.heading};
  font-size: 13px;
  line-height: 15px;
`;
