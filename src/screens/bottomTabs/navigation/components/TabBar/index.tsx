import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles';
import { colors, normalize } from 'src/common';
import { SVGIcons } from 'src/assets';
import { useIsFocused } from '@react-navigation/native';
import { useHaptics } from 'src/hooks';
import { useState } from 'react';
import Animated, { ZoomInEasyDown } from 'react-native-reanimated';

const icons: {
  [key: string]: {
    icon: any;
    label: string;
  };
} = {
  Home: {
    icon: SVGIcons.Home,
    label: 'Home',
  },
  Categories: {
    icon: SVGIcons.Categories,
    label: 'Categories',
  },
  History: {
    icon: SVGIcons.History,
    label: 'History',
  },
  Profile: {
    icon: SVGIcons.Profile,
    label: 'Profile',
  },
};

function TabBar({ label, onPress }: any) {
  const [iconKey, setIconKey] = useState(0);
  const { selection } = useHaptics();
  const focused = useIsFocused();
  const Icon = icons[label]?.icon;
  const tintColor = focused ? colors?.WHITE : colors.GREY;
  const dotColor = focused ? colors?.WHITE : colors.TRANSPARENT;

  return (
    <TouchableWithoutFeedback
      accessible={true}
      accessibilityLabel="Bottom tab clicked"
      accessibilityHint={`${icons[label]?.label}`}
      accessibilityRole="button"
      onPress={event => {
        setIconKey(prev => prev + 1);
        selection();
        onPress?.(event);
      }}>
      <View style={[styles.tab]}>
        <View style={[styles.tabContent]}>
          <Animated.View
            key={`icon-${label}-${iconKey}`}
            entering={ZoomInEasyDown.duration(250)}
          >
            <Icon height={normalize(24)} width={normalize(24)} />
          </Animated.View>
          <Animated.View
            key={`icon-${iconKey}`}
            entering={ZoomInEasyDown.duration(250)}
          >
            <View style={[styles.dotStyle, { backgroundColor: dotColor }]} />
          </Animated.View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TabBar;
