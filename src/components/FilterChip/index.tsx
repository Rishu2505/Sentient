import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';
import { Icon } from 'react-native-paper';
import styles from './styles';
import { colors, normalize } from 'src/common';
import { useHaptics } from 'src/hooks';

interface FilterChipProps {
    index: number;
    label: string;
    icon?: string;
    isActive: boolean;
    onPress: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ index, label, icon, isActive, onPress }) => {
    const { selection } = useHaptics();
    return (
        <Animated.View entering={FadeInRight.delay(index * 100).duration(800)}>
            <Pressable
                accessible={true}
                accessibilityLabel="Agents filter clicked"
                accessibilityHint={`${label}`}
                accessibilityRole="button"
                style={[styles.chip, isActive && styles.active, { paddingHorizontal: icon ? normalize(12) : normalize(16) }]}
                onPress={() => {
                    selection()
                    onPress?.();
                }}>
                <View style={styles.contentRow}>
                    <Text style={[styles.label, isActive && styles.activeLabel, { marginRight: icon ? normalize(10) : 0 }]}>{label}</Text>
                    {icon && (
                        <Icon
                            source={icon}
                            size={normalize(18.5)}
                            color={isActive ? colors.WHITE : colors.IN_ACTIVE_CHIPS}
                        />
                    )}
                </View>
            </Pressable>
        </Animated.View>
    );
};

export default FilterChip;
