import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Cart from '~/pages/Cart';

import transitionConfig from '~/utils/transitionConfig';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: null,
      }),
      transitionConfig,
      transparentCard: true,
    }
  )
);

export default Routes;
