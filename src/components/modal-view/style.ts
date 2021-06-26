import styled from "styled-components/native";
import { Modal } from "react-native";
import { Theme } from "../../global/theme";

export const ViewContent = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const ViewOverlay = styled.View`
  flex: 1;
  background-color: ${Theme.colors.overlay};
`;

export const ViewBar = styled.View`
  width: 39px;
  height: 2px;
  border-radius: 2px;
  background-color: ${Theme.colors.secondary30};
  align-self: center;
  margin-top: 13px;
  margin-bottom: 103px;
`;
