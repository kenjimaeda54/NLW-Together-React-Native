import styled from "styled-components/native";
import { Theme } from "../../global/theme";
import { LinearGradient } from "expo-linear-gradient";

interface ITextPlayerProps {
  owner: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const ViewContent = styled.View`
  flex: 1;
`;

export const ViewHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TextTitle = styled.Text`
  font-family: ${Theme.fonts.title700};
  color: ${Theme.colors.heading};
  font-size: 18px;
`;

export const TextCategory = styled.Text`
  font-family: ${Theme.fonts.text400};
  color: ${Theme.colors.highlight};
  font-size: 13px;
  margin-right: 24px;
`;

export const ViewFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewDataInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewPlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextDate = styled.Text`
  font-family: ${Theme.fonts.text500};
  color: ${Theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
  margin-right: 24px;
`;

export const TextPlayer = styled.Text<ITextPlayerProps>`
  font-family: ${Theme.fonts.text500};
  font-size: 13px;
  margin-left: 7px;
  margin-right: 24px;
  color: ${(props) => (props.owner ? Theme.colors.primary : Theme.colors.on)};
`;
