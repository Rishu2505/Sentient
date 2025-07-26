import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { colors, normalize } from 'src/common';
import styles from './styles';
import { strings } from './constants';
import { SVGIcons } from 'src/assets';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    ZoomInEasyDown,
    ZoomIn,
    ZoomInUp,
    ZoomOut,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHaptics } from 'src/hooks';

interface InputProps {
    onSend: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ onSend }) => {
    const [key, setKey] = useState(0);
    const [text, setText] = useState('');
    const widthValue = useSharedValue(84);
    const insets = useSafeAreaInsets();
    const { selection } = useHaptics();

    const handleSend = () => {
        setKey(prev => prev + 1);
        if (text.trim().length > 0) {
            selection();
            onSend(text.trim());
            setText('');
        }
    };

    const handleFocus = () => {
        widthValue.value = withTiming(94, {
            duration: 250,
            easing: Easing.out(Easing.ease),
        });
    };

    const handleBlur = () => {
        widthValue.value = withTiming(84, {
            duration: 250,
            easing: Easing.out(Easing.ease),
        });
    };

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${widthValue.value}%`,
    }));

    return (
        <View style={[styles.wrapper, { marginBottom: insets.bottom }]}>
            <Animated.View style={[styles.container, animatedStyle]}>
                <TextInput
                    placeholder={strings.placeHolder}
                    placeholderTextColor={colors.GREY}
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={handleSend}
                    returnKeyType="send"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Send button clicked"
                    accessibilityHint="Send"
                    accessibilityRole="button"
                    onPress={handleSend}
                    style={styles.sendButton}
                >
                    <Animated.View
                        key={`send-icon-${key}`}
                        entering={ZoomIn.duration(250)}
                    >
                        <SVGIcons.Send height={normalize(30)} width={normalize(30)} />
                    </Animated.View>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default Input;
