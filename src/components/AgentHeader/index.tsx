import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Icon } from 'react-native-paper';
import styles from './styles';
import { colors, normalize } from 'src/common';
import { useHaptics } from 'src/hooks';
import { HIT_SLOP } from 'src/common/helper';

interface AgentHeaderProps {
  title: string;
}

const AgentHeader: React.FC<AgentHeaderProps> = ({ title }) => {
  const { selection } = useHaptics();
  return (
    <Animated.View entering={FadeInUp}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity accessible={true}
          accessibilityLabel="Agent header clicked"
          accessibilityHint={title}
          accessibilityRole="button" hitSlop={HIT_SLOP.large} onPress={() => {
            selection()
          }}>
          <Icon source="arrow-right" size={normalize(22)} color={colors.WHITE} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default AgentHeader;
