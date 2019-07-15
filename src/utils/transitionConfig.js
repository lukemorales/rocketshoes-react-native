import { Easing, Animated } from 'react-native';

export default () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.inOut(Easing.poly(5)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return { transform: [{ translateX }] };
    },
  };
};

// credits: https://github.com/luizbatanero
