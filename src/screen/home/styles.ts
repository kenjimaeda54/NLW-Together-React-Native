import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ViewHeader = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px; /*estou usando no componente de maior hierarquia(App) */
  margin-bottom: 42px; /* o react-native-safe-area-context ele ja garante area segura no IOS */
`;

export const ViewContent = styled.View`
  justify-content: flex-start;
  margin-top: 20px;
`;

export const ListMatch = styled.FlatList`
  margin-top: 24px;
  margin-left: 24px;
`;
