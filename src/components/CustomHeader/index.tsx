import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { Icon } from 'react-native-paper';
import styles from './styles';
import { colors, normalize } from 'src/common';
import { useHaptics } from 'src/hooks';
import { HIT_SLOP } from 'src/common/helper';

type Props = {
    title: string;
    left_icon?: IconSource;
    right_icon?: IconSource;
};

export default function CustomHeader({ title, left_icon, right_icon }: Props) {
    const navigation = useNavigation();
    const { selection } = useHaptics();
    const handleBack = () => {
        if (navigation.canGoBack()) {
            selection()
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.headerRow, {
                justifyContent: left_icon || right_icon ? 'space-between' : 'center',
                alignItems: 'center',
            }]}>
                {left_icon ? (
                    <TouchableOpacity accessible={true}
                        accessibilityLabel="Back button clicked"
                        accessibilityHint={"Back"}
                        accessibilityRole="button" hitSlop={HIT_SLOP.small} onPress={handleBack} style={styles.leftIconWrapper}>
                        <Icon source={left_icon} size={normalize(30)} color={colors.CHEVRON_ARROW} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.iconPlaceholder} />
                )}

                <Text style={styles.title}>{title}</Text>

                {right_icon ? (
                    <TouchableOpacity accessible={true}
                        accessibilityLabel="Menu button clicked"
                        accessibilityHint={"Menu"}
                        accessibilityRole="button" hitSlop={HIT_SLOP.small} onPress={() => {
                            selection()
                        }} style={styles.iconWrapper}>
                        <Icon source={right_icon} size={normalize(47)} color={colors.CHEVRON_ARROW} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.iconPlaceholder} />
                )}
            </View>
        </View>
    );
}
