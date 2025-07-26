import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    withRepeat,
    FadeIn,
    FadeInUp,
} from 'react-native-reanimated';
import { SVGIcons } from 'src/assets';
import { IMAGES, normalize } from 'src/common';
import styles from './styles';
import { strings } from './constants';
import { useClipboard, useHaptics, useShare } from 'src/hooks';
import { HIT_SLOP } from 'src/common/helper';

interface ChatMessageProps {
    message: string;
    isSender?: boolean;
    isLoading?: boolean;
    onRegenerate?: () => void;
    isLastAIMessage?: boolean;
    index: number;
}

const ChatMessageBubble: React.FC<ChatMessageProps> = ({
    message,
    isSender = false,
    isLoading = false,
    onRegenerate,
    isLastAIMessage = false,
    index,
}) => {
    const { copyToClipboard } = useClipboard();
    const { share } = useShare();
    const { selection } = useHaptics();
    const [visibleText, setVisibleText] = useState('');
    const typingSpeed = 10;

    useEffect(() => {
        if (!isLoading && !isSender && message) {
            setVisibleText('');
            let currentIndex = 0;
            const chars = [...message];
            let interval: NodeJS.Timeout;

            const delayTimeout = setTimeout(() => {
                interval = setInterval(() => {
                    setVisibleText(prev => {
                        const nextChar = chars[currentIndex];
                        currentIndex++;
                        if (currentIndex >= chars.length) {
                            clearInterval(interval);
                        }
                        return prev + (nextChar ?? '');
                    });
                }, typingSpeed);
            }, 0);

            return () => {
                clearTimeout(delayTimeout);
                clearInterval(interval);
            };
        }
    }, [message, isLoading, isSender]);


    const TypingDots = () => {
        const dots = [0, 1, 2];
        return (
            <View style={styles.typingDots}>
                <Image source={IMAGES.LOGO} style={styles.sentientLogo}></Image>
                {dots.map((_, dotIndex) => {
                    const progress = useSharedValue(0);

                    useEffect(() => {
                        const timeout = setTimeout(() => {
                            progress.value = withRepeat(
                                withSequence(
                                    withTiming(1, { duration: 300 }),
                                    withTiming(0, { duration: 300 })
                                ),
                                -1,
                                false
                            );
                        }, dotIndex * 150);
                        return () => clearTimeout(timeout);
                    }, []);

                    const animatedStyle = useAnimatedStyle(() => ({
                        transform: [
                            { translateY: -6 * progress.value },
                            { scale: 1 + 0.3 * progress.value },
                        ],
                        opacity: 0.5 + 0.5 * progress.value,
                    }));

                    return (
                        <Animated.View key={dotIndex} style={[styles.dot, animatedStyle]} />
                    );
                })}
            </View>
        );
    };

    const copyAImessageToClipboard = (content: string) => () => {
        selection()
        copyToClipboard(content)
    }

    const shareIntent = (content: string) => () => {
        selection()
        share('Sentient', content, 'https://www.sentient.xyz/')
    }

    return (
        <View style={styles.messageContainer}>
            {/* === SENDER === */}
            {isSender && (
                <Animated.View
                    entering={FadeInUp.delay(index * 50).duration(400)}
                    style={styles.topRow}
                >
                    <SVGIcons.USER height={normalize(37)} width={normalize(37)} />
                    <Text style={styles.promptText}>{message}</Text>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity accessible={true}
                        accessibilityLabel="Edit prompt clicked"
                        accessibilityHint={"Edit prompt"}
                        accessibilityRole="button" hitSlop={HIT_SLOP.small} onPress={() => selection()}>
                        <SVGIcons.EDIT height={normalize(14.17)} width={normalize(14.17)} />
                    </TouchableOpacity>
                </Animated.View>
            )}

            {/* === AI RESPONSE === */}
            {!isSender && (
                <>
                    <Animated.View
                        entering={FadeInUp.delay(index * 150).duration(500)}
                        style={styles.aiContainer}
                    >
                        <View style={styles.aiHeader}>
                            <SVGIcons.AI height={normalize(38)} width={normalize(37)} />
                            <View style={{ flex: 1 }} />
                            <TouchableOpacity accessible={true}
                                accessibilityLabel="Copy AI response"
                                accessibilityHint={"Copy"}
                                accessibilityRole="button" hitSlop={HIT_SLOP.small} onPress={copyAImessageToClipboard(visibleText)}>
                                <SVGIcons.COPY height={normalize(18)} width={normalize(18)} />
                            </TouchableOpacity>
                            <TouchableOpacity accessible={true}
                                accessibilityLabel="Share AI response"
                                accessibilityHint={"Sharing Sheet"}
                                accessibilityRole="button" hitSlop={HIT_SLOP.small} onPress={shareIntent(visibleText)} style={styles.margin}>
                                <SVGIcons.SHARE height={normalize(18)} width={normalize(18)} />
                            </TouchableOpacity>
                        </View>

                        <Animated.View style={styles.responseBox}>
                            {isLoading ? (
                                <TypingDots />
                            ) : (
                                visibleText && visibleText?.length > 0 && <Text style={styles.responseText}>{visibleText}</Text>
                            )}
                        </Animated.View>
                    </Animated.View>

                    {!isLoading && isLastAIMessage && (
                        <Animated.View
                            entering={FadeIn.delay(index * 100 + 100).duration(500)}
                            style={styles.regenerateContainer}
                        >
                            <TouchableOpacity accessible={true}
                                accessibilityLabel="Regenerate response clicked"
                                accessibilityHint={"Regenerate AI response"}
                                accessibilityRole="button" onPress={() => {
                                    setVisibleText('');
                                    onRegenerate?.();
                                }} style={styles.regenerateButton}>
                                <SVGIcons.REGENERATE height={normalize(14)} width={normalize(14)} />
                                <Text style={styles.regenerateText}>{strings.regenerateResponse}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    )}
                </>
            )}
        </View>
    );
};

export default ChatMessageBubble;
