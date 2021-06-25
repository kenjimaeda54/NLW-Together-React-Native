import styled from "styled-components/native";
import { Theme } from "../../global/theme";
import { LinearGradient } from "expo-linear-gradient";

interface IViewContentProps {
  checked: boolean;
}

interface IViewCheckedProps {
  checked: boolean;
}

export const Container = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const ViewContent = styled(LinearGradient)<IViewContentProps>`
  width: 100%;
  height: 116px;
  background-color: ${Theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 7px;
  opacity: ${(props) => (props.checked ? "1" : "0.4")};
`;

export const TextTitle = styled.Text`
  font-family: ${Theme.fonts.title500};
  color: ${Theme.colors.heading};
  font-size: 15px;
`;

export const ViewChecked = styled.View<IViewCheckedProps>`
  position: absolute;
  top: 7px;
  right: 7px;
  width: ${(props) => (props.checked ? "12px" : "10px")};
  height: ${(props) => (props.checked ? "12px" : "10px")};
  background-color: ${(props) =>
    props.checked ? Theme.colors.primary : Theme.colors.secondary50};
  border-color: ${(props) => (props.checked ? Theme.colors.secondary50 : 0)};
  margin-right: 7px;
  border-radius: 3px;
  border-width: 2px;
`;
