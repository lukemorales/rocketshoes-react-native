import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Logo, LogoImage, CartButton, ItemCount } from './Header_Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavigationService from '~/services/navigation';

export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((total, p) => {
      return total + p.amount;
    }, 0)
  );

  return (
    <Container>
      <Logo onPress={() => NavigationService.navigate('Main')}>
        <LogoImage />
      </Logo>
      <CartButton onPress={() => NavigationService.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <ItemCount>{cartSize || 0}</ItemCount>
      </CartButton>
    </Container>
  );
}
