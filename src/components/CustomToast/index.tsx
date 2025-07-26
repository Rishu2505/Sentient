import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

interface Props {
  text1: string;
  text2?: string;
  type: 'success' | 'error' | 'info';
}

const CustomToast: React.FC<Props> = ({ text1, text2, type }) => {
  const iconName =
    type === 'success' ? 'check-circle' : type === 'error' ? 'error' : 'info';

  return (
    <View
      style={[
        styles.container,
        type === 'success'
          ? styles.success
          : type === 'error'
            ? styles.error
            : styles.info,
      ]}
    >
      {/* <MaterialIcons name={iconName} size={20} color="#fff" style={styles.icon} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{text1}</Text>
        {!!text2 && <Text style={styles.infoText}>{text2}</Text>}
      </View>
    </View>
  );
};
export default CustomToast;