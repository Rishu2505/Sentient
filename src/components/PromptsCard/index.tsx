import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';
import styles from './styles';
import { useHaptics } from 'src/hooks';

interface PromptsCardProps {
    index: number;
    id: string;
    prompt: string;
    onPress: () => void;
}

const PromptsCard: React.FC<PromptsCardProps> = ({ index, prompt, onPress }) => {
    const { selection } = useHaptics();
    return (
        <Animated.View entering={FadeInUp.delay(index * 100).duration(800)}>
            <Pressable
            accessible={true}
            accessibilityLabel="Prompt clicked"
            accessibilityHint={prompt}
            accessibilityRole="button"
                style={styles.card}
                onPress={() => {
                    selection()
                    onPress?.();
                }}>
                <View style={styles.content}>
                    <Text style={styles.prompt}>{prompt}</Text>
                </View>
            </Pressable>
        </Animated.View>
    );
};

export default PromptsCard;
