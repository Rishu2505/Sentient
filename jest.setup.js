jest.mock('react-native-reanimated', () => {
    const View = require('react-native').View;
    return {
      ...require('react-native-reanimated/mock'),
      FadeInUp: View,
      FadeInRight: View,
      FadeOut: View,
      FadeOutUp: View,
      SlideInUp: View,
      SlideOutDown: View,
    };
  });
  
  
  jest.mock('expo-constants', () => ({
    expoConfig: { extra: { OPENAI_API_KEY: 'mock-key' } },
    manifest: { extra: { OPENAI_API_KEY: 'mock-key' } },
  }));
  
  jest.mock('expo-font', () => ({
    loadAsync: jest.fn().mockResolvedValue(undefined),
  }));
  
  jest.mock('expo-clipboard', () => ({
    setStringAsync: jest.fn(() => Promise.resolve()),
    getStringAsync: jest.fn(() => Promise.resolve('mocked clipboard content')),
  }));
  
  jest.mock('expo-haptics', () => ({
    impactAsync: jest.fn(),
    notificationAsync: jest.fn(),
  }));
  
  jest.mock('expo-image', () => 'Image');
  jest.mock('expo-linear-gradient', () => 'LinearGradient');
  jest.mock('expo-media-library', () => ({
    getAssetsAsync: jest.fn(),
  }));
  
  jest.mock('react-native-gesture-handler');
  jest.mock('src/navigation/Navigation', () => () => <></>);
  