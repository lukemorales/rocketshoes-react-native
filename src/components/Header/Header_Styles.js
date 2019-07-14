import styled from 'styled-components/native';
import logo from '~/assets/images/rocketshoes.png';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 20px;
  background-color: #141418;
  height: 80px;
`;

export const Logo = styled.TouchableWithoutFeedback`
  width: 220px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 220px;
  height: 30px;
`;

export const CartButton = styled.TouchableOpacity`
  position: relative;
`;

export const ItemCount = styled.Text`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  right: -6px;
  top: -6px;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  background: #7159c1;
`;
