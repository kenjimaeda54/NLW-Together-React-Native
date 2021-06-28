import styled from "styled-components/native";
import { Theme } from "../../global/theme";
import { Modal } from "react-native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row; /*por padrão em react native e column */
  align-items: center;
`;

export const ViewUser = styled.View`
  flex-direction: row;
  margin: 0 2px;
`;

export const Greeting = styled.Text`
  font-family: ${Theme.fonts.title700};
  font-size: 24px;
  color: ${Theme.colors.heading};
  margin-right: 6px;
`;

export const UserName = styled.Text`
  font-family: ${Theme.fonts.title700};
  font-size: 24px;
  color: ${Theme.colors.heading};
`;

export const Mensagem = styled.Text`
  flex-wrap: wrap;
  text-align: left;
  padding: 0 2px;
  width: 60%;
  font-family: ${Theme.fonts.text400};
  color: ${Theme.colors.highlight};
`;
