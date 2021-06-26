import styled from "styled-components/native";
import { Theme } from "../../global/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const BannerIgm = styled.ImageBackground`
  width: 100%;
  height: 234px;
`;

export const ViewContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 30px;
`;

export const TextTitle = styled.Text`
  font-size: 28px;
  font-family: ${Theme.fonts.title700};
  color: ${Theme.colors.heading};
`;

export const TextSubTitle = styled.Text`
  font-size: 13px;
  font-family: ${Theme.fonts.text400};
  color: ${Theme.colors.heading};
  line-height: 21px;
`;

export const ListMember = styled.FlatList`
  margin-left: 24px;
  margin-top: 20px;
`;

export const ViewFooter = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()};
`;
