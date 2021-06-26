import styled from "styled-components/native";
import { Theme } from "../../global/theme";

interface IViewStyleProps {
  isOnline: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TextName = styled.Text`
  font-family: ${Theme.fonts.title700};
  color: ${Theme.colors.heading};
  font-size: 18px;
  margin: 0 40px;
`;

export const ViewFooter = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 40px;
`;

export const ViewStyle = styled.View<IViewStyleProps>`
  background-color: ${(props) =>
    props.isOnline ? Theme.colors.on : Theme.colors.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px; /*coloca altura e largura igual o border radius a metade de ambos */
  margin-right: 9px; /*assim forma um circulo perfeito */
`;

export const TextStatus = styled.Text`
  font-family: ${Theme.fonts.text400};
  color: ${Theme.colors.highlight};
  font-size: 13px;
`;
