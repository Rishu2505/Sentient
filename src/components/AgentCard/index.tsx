import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';
import { Icon } from 'react-native-paper';
import styles from './styles';
import { AgentItem } from 'src/types/agents';
import { colors, normalize } from 'src/common';
import { useHaptics } from 'src/hooks';
import { HIT_SLOP } from 'src/common/helper';

interface AgentCardProps {
  index: number;
  agent: AgentItem;
  onPress: () => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ index, agent, onPress }) => {
  const { selection } = useHaptics();
  return (
    <Animated.View entering={FadeInRight.delay(index * 100).duration(800)}>
      <Pressable onPress={() => {
        selection()
        onPress?.();
      }} accessible={true}
        accessibilityLabel="Agent card clicked"
        accessibilityHint={agent.title}
        accessibilityRole="button" style={styles.card}>
        <Icon source={agent.icon} size={normalize(30)} color={colors.AGENTS_CARD_ICON} />
        <Text numberOfLines={1} style={styles.title}>{agent.title}</Text>
        <Text numberOfLines={2} style={styles.desc}>{agent.description}</Text>
        <TouchableOpacity accessible={true}
          accessibilityLabel="Agent card clicked"
          accessibilityHint={agent.title}
          accessibilityRole="button" hitSlop={HIT_SLOP.large} onPress={() => {
            selection()
            onPress?.();
          }} style={styles.arrowContainer}>
          <Icon source="arrow-right" size={normalize(16)} color={colors.WHITE} />
        </TouchableOpacity>
      </Pressable>
    </Animated.View>
  );
};

export default AgentCard;
