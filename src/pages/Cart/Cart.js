import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '~/store/modules/cart/actions';
import { formatPrice } from '~/utils/format';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  EmptyCart,
  EmptyWrapper,
  EmptyIcon,
  EmptyHeader,
  EmptyInfo,
  StartShoppingButton,
  StartShoppingButtonText,
  CartItems,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  ProductAmountText,
  ProductInfo,
  DeleteButton,
  OrderDetails,
  ProductSubTotal,
  AmountButton,
  AboutProduct,
  AboutWrapper,
  Checkout,
  CheckoutTotal,
  CheckoutButton,
  CheckoutButtonText,
  CheckoutWrapper,
  CheckoutHeader,
} from './Cart_Styles';
import NavigationService from '~/services/navigation';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalAmount, product) => {
        return totalAmount + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {!cart.length ? (
        <EmptyCart>
          <EmptyIcon />

          <EmptyWrapper>
            <EmptyHeader>Oops...</EmptyHeader>
            <EmptyInfo>Looks like your shopping cart is empty!</EmptyInfo>
            <StartShoppingButton onPress={() => NavigationService.navigate('Main')}>
              <StartShoppingButtonText>Start Shopping</StartShoppingButtonText>
            </StartShoppingButton>
          </EmptyWrapper>
        </EmptyCart>
      ) : (
        <>
          <CartItems
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item: product, index }) => (
              <Product isFirst={index} isLast={index === cart.length - 1}>
                <ProductImage source={{ uri: product.image }} />
                <ProductInfo>
                  <AboutProduct>
                    <AboutWrapper>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{product.priceFormatted}</ProductPrice>
                    </AboutWrapper>
                    <DeleteButton onPress={() => dispatch(CartActions.removeFromCart(product.id))}>
                      <Icon name="delete-forever" size={18} color="#999" />
                    </DeleteButton>
                  </AboutProduct>

                  <OrderDetails>
                    <ProductAmount>
                      <AmountButton onPress={() => decrement(product)}>
                        <Icon name="remove-circle-outline" size={24} color="#7159c1" />
                      </AmountButton>
                      <ProductAmountText>{product.amount}</ProductAmountText>
                      <AmountButton onPress={() => increment(product)}>
                        <Icon name="add-circle-outline" size={24} color="#7159c1" />
                      </AmountButton>
                    </ProductAmount>

                    <ProductSubTotal>{product.subtotal}</ProductSubTotal>
                  </OrderDetails>
                </ProductInfo>
              </Product>
            )}
          />
          <Checkout>
            <CheckoutWrapper>
              <CheckoutHeader>Total</CheckoutHeader>
              <CheckoutTotal>{total}</CheckoutTotal>
            </CheckoutWrapper>
            <CheckoutButton>
              <CheckoutButtonText>Proceed to Checkout</CheckoutButtonText>
            </CheckoutButton>
          </Checkout>
        </>
      )}
    </Container>
  );
}
