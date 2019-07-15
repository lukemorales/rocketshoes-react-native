import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Shimmer from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  padding: 20px;
  width: 100%;
`;

export const Product = styled.View`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  elevation: 2;
  flex-grow: 1;
`;

export const ProductImage = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
`;

export const PlaceHolderImage = styled(Shimmer)`
  height: 220px;
  width: 220px;
  align-self: center;
  border-radius: 110px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 4px 0 2px;
`;

export const PlaceHolderTitle = styled(Shimmer)`
  margin: 34px 0 8px;
  height: 22px;
  width: 83%;
  border-radius: 1px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const PlaceHolderPrice = styled(Shimmer)`
  width: 120px;
  height: 28px;
  border-radius: 1px;
`;

export const AddButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  margin-top: 10px;
  align-items: center;
  position: relative;
  height: 52px;
`;

export const PlaceHolderButton = styled(Shimmer)`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  margin-top: 6px;
`;

export const ProductAmount = styled.View`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  background: rgba(0, 0, 0, 0.17);
  height: 52px;
  width: 60px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 2px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
`;
