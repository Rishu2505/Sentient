import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { RootStackParamList } from 'src/types';
import { ROUTES } from 'src/consts';
import { colors, IMAGES } from 'src/common';
import { reset } from 'src/navigation/RootNavigation';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

type Props = {
  navigation: RouteProp<RootStackParamList, ROUTES.SPLASH>;
};

const Splash = ({ navigation }: Props) => {

  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    const timeout = setTimeout(() => {
      reset(ROUTES.BOTTOM_TAB_STACK)
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.APP_PRIMARY, "#1d2123", colors.APP_PRIMARY]}
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <Image source={IMAGES.SENTIENT} style={styles.splashIcon}></Image>
      </LinearGradient>
    </View>
  );
}
export default Splash;