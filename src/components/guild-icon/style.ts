import styled from "styled-components/native";
import { Theme } from "../../global/theme";

export const Container = styled.View`
  width: 62px;
  height: 66px;
  border-radius: 8px;
  background-color: ${Theme.colors.discord};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ImageProfile = styled.Image`
  width: 66px;
  height: 65px;
`;
