import styled from "styled-components/native";
import { Theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageBackGround = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`;
export const Title = styled.Text`
  color: ${Theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Subtitles = styled.Text`
  color: ${Theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;
