import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  margin: 20px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const EmptyCart = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const EmptyWrapper = styled.View``;

export const EmptyIcon = styled(Icon).attrs({
  name: 'remove-shopping-cart',
  color: '#f3f3f6',
  size: 220,
})`
  position: absolute;
`;

export const EmptyHeader = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

export const EmptyInfo = styled.Text`
  font-size: 16px;
  margin: 4px 0 16px;
`;

export const StartShoppingButton = styled(RectButton)`
  padding: 16px;
  background: #7159c1;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const StartShoppingButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
`;

export const CartItems = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  padding: 20px;
`;

export const Product = styled.View`
  padding: 20px 0;
  padding-top: ${({ isFirst }) => (isFirst === 0 ? '0' : '20px')};
  flex-direction: row;
  border-bottom-width: ${({ isLast }) => (isLast ? '0' : '1px')};
  border-bottom-color: #ddd;
`;

export const ProductImage = styled.Image`
  width: 92px;
  height: 92px;
  align-self: center;
  margin-right: 12px;
`;

export const ProductInfo = styled.View`
  flex-shrink: 1;
`;

export const AboutProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AboutWrapper = styled.View`
  flex: 1;
  flex-basis: 90%;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 4px 0 2px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #999;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 8px 0 8px;
`;

export const OrderDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const AmountButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
})``;

export const ProductAmountText = styled.Text`
  font-size: 16px;
  margin: 0 12px;
  width: 20px;
  text-align: center;
`;

export const ProductSubTotal = styled.Text`
  margin-top: auto;
  font-size: 16px;
  font-weight: bold;
`;

export const Checkout = styled.View`
  background: #141418;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;

export const CheckoutWrapper = styled.View``;

export const CheckoutHeader = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.47);
`;

export const CheckoutTotal = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const CheckoutButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  height: 52px;
  padding: 0 20px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
`;
