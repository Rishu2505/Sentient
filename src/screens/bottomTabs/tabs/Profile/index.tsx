import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { CustomHeader } from 'src/components';
import { ROUTES } from 'src/consts';
import { RootStackParamList } from 'src/types';
import { IMAGES } from 'src/common';
import { strings } from './constants';

type Props = {
  navigation: RouteProp<RootStackParamList, ROUTES.PROFILE>;
};

const Profile = ({ navigation }: Props) => {
  const [visibleText, setVisibleText] = useState('');
  const typingSpeed = 20;

  useEffect(() => {
    setVisibleText('');
    let currentIndex = 0;
    const chars = [...strings.info];
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
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader right_icon={'dots-horizontal'} title={strings.title} />
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarContainer}>
          <Image
            source={IMAGES.LOGO}
            style={styles.avatar}
          />
        </View>
        <View style={styles.nameEmailContainer}>
          <Text style={styles.name}>{strings.name}</Text>
          <Text style={styles.email}>{strings.email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{visibleText}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
