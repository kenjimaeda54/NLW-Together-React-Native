import styled from "styled-components/native";
import { Theme } from "../../global/theme";

export const KeyboardContainer = styled.KeyboardAvoidingView`
  flex: 1;
  margin: 10px 0;
`;

export const TextLabel = styled.Text`
  font-size: 18px;
  font-family: ${Theme.fonts.title700};
  color: ${Theme.colors.heading};
`;

export const ViewForm = styled.View`
  padding: 0 24px;
  margin-top: 22px;
`;

export const ViewContentButton = styled.View`
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-color: ${Theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
  /*ideia o conteúdo não saia da caixa */
  /* ideal quando deseja fazer uma borda ou imagem dentro de uma view */
`;

export const ViewText = styled.View`
  flex: 1;
  align-items: center;
`;

export const ViewImg = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${Theme.colors.secondary40};
  border-color: ${Theme.colors.secondary40};
  border-width: 1px;
  border-radius: 8px;
`;

export const ViewTextInput = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 20px;
`;

export const ViewCalendar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextDivide = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${Theme.fonts.text500};
  color: ${Theme.colors.highlight};
`;

export const TextCharacters = styled.Text`
  font-family: ${Theme.fonts.text400};
  font-size: 13px;
  color: ${Theme.colors.highlight};
`;

export const ViewFooter = styled.View`
  margin: 20px 18px;
  width: 92%;
`;
